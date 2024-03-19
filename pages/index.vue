<template>
  <div>
    <h2>Home</h2>
  </div>
</template>

<script >
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { defineComponent, reactive } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "skogbrynets-verkstad.firebaseapp.com",
  projectId: "skogbrynets-verkstad",
  storageBucket: "skogbrynets-verkstad.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: "G-ZVPCD01LNG",
};

/*const firebaseConfig = {
  apiKey: "AIzaSyDR9MIgBIGhGz3_WWg2kXO-0ezn2-fd37U",
  authDomain: "skogbrynets-verkstad.firebaseapp.com",
  projectId: "skogbrynets-verkstad",
  storageBucket: "skogbrynets-verkstad.appspot.com",
  messagingSenderId: "887634919102",
  appId: "1:887634919102:web:09689068c5980d488728ef",
  measurementId: "G-ZVPCD01LNG",
};*/



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default defineComponent({
  async setup() {
    const productList = reactive({ list: [] });
    const db = getFirestore(app);
    await getProducts(db);
    async function getProducts(db) {
      const productsCol = collection(db, "Product");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      productList.list = products;
      console.log(productList);
    }

    return {
      productList,
    };
  },
});
</script>

<style></style>
