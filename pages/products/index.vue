<template>
  <div>
    <h2>Produkter</h2>

    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in productList.list" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, inject } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";



export default defineComponent({
  async setup() {
    const productList = reactive({ list: [] });
    const firestore = inject("firestore");
    const db = getFirestore(firestore);

    onMounted(async () => {
      await getProducts(db);
    });

    await getProducts(db);
    async function getProducts(db) {
      const productsCol = collection(db, "Product");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      productList.list = products;
    }

    //useHead({ title: "Skogsbrynets produkter" });

    return {
      productList,
    };
  },
});

</script>

<style scoped>

</style>