<template>
  <div>
    <ProductDetails :product="productData" :productImageUrl="productImageUrl" />
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";

export default defineComponent({
  async setup() {
    const firestore = inject("firestore");
    const { productId } = useRoute().params;

    const db = getFirestore(firestore);
    const docRef = doc(db, "Product", productId);
    const docSnap = await getDoc(docRef);
    let productData = null;
    let productImageUrl = '';

    if (docSnap.exists()) {
      productData = docSnap.data();
      console.log("Document data:", productData);
      productImageUrl = await fetchProductImage(productData.productPrimaryPicturePath);
    } else {
      console.log("No such document!");
    }

    if (!productData) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
        fatal: true,
      });
    }

    return { productId, productData, productImageUrl };
  },
});

async function fetchProductImage(productPrimaryPicturePath) {
  try {
    const storage = getStorage();
    const productImageRef = storageRef(storage, productPrimaryPicturePath);
    return await getDownloadURL(productImageRef);
  } catch (error) {
    console.error('Error loading image:', error);
    return ''; // Return an empty string if image loading fails
  }
}
</script>

<style scoped></style>
