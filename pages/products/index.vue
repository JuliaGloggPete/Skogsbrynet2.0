<template>
  <div>
    <h2>Produkter</h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="product in productList.list" :key="product.id">
        <ProductCard :product="product" :imageUrl="product.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, inject, onMounted, ref } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

export default defineComponent({
  setup() {
    const productList = reactive({ list: [] });
    const firestore = inject("firestore");
    const db = getFirestore(firestore);

    onMounted(async () => {
      await getProducts(db);
    });

    async function getProducts(db) {
      const productsCol = collection(db, "Product");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      await Promise.all(products.map(getProductImage));
      productList.list = products;
    }

    async function getProductImage(product) {
      const storage = getStorage();
      const productImageRef = storageRef(storage, product.productPrimaryPicturePath);

      try {
        const url = await getDownloadURL(productImageRef);
        product.imageUrl = url;
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }

    return {
      productList,
    };
  },
});
</script>

<style scoped>
</style>
