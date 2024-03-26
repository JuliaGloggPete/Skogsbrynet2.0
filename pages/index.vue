<template>
  <div>
    <h2 class="text-center text-4xl">Skogsbrynets Verkstad</h2>

    

    <div class="sm:grid sm:grid-cols-3 lg:grid-cols-5 my-8">

      <div
        class="rounded-full my-4 sm:my-auto mx-auto h-48 w-48 overflow-hidden"
      >
        <img
          src="@/assets/IMG_8460.jpg"
          alt="Victoria's image"
          class="object-cover"
        />
      </div>
      <div class="col-span-2 lg:col-span-4 my-auto">
        <p>
          Hej! Jag är Victoria, en passionerad naturälskare och
          trädgårdsentusiast. Att odla är min passion, och jag älskar att se hur
          mina växter växer och blomstrar. Det bästa är när jag kan skapa något
          användbart av det jag har odlat - jag älskar att göra egna produkter
          som exempelvis sylt från mina egna bär eller krämer av de örter jag
          har planterat. Dessutom är jag en ivrig fårullsentusiast och älskar
          att spinna och skapa med den mjuka ullen. Naturen är mitt lugn och min
          inspiration, och jag strävar alltid efter att leva i harmoni med den
        </p>
      </div>
    </div>
    <hr class="my-4" />
    <div class="grid md:grid-cols-3 gap-4">
      
      <NuxtLink to="/products">
        <div class="border rounded-md border-[#afc0b4] flex-grow">
          <div class="bg-[#afc0b4] text-white p-2 text-center">Produkter</div>
          <div class="overflow-hidden">
            <img
              src="@/assets/product_default.jpg"
              alt="Victoria's image"
              class="object-cover aspect-video"
            />
          </div>
          <div class="m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            delectus esse nobis! Ipsum consequatur enim, ab aspernatur eaque
            iure nesciunt, obcaecati exercitationem tempore voluptatem sunt non
            expedita doloremque eveniet modi? Ab ad odit
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/events">
      <div class="border rounded-md border-[#afc0b4] h-full">
        <div class="bg-[#afc0b4] text-white p-2 text-center">Events</div>
        <div class="overflow-hidden">
          <img
            src="@/assets/event_default.jpg"
            alt="Victoria's image"
            class="object-cover aspect-video"
          />
        </div>
        <div class="m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          delectus esse nobis! Ipsum consequatur enim, ab aspernatur eaque iure
          nesciunt, obcaecati exercitationem tempore .
        </div>
      </div>
    </NuxtLink>
      <NuxtLink to="/blogs">
        <div class="border rounded-md border-[#afc0b4] h-full">
          <div class="bg-[#afc0b4] text-white p-2 text-center">Blogg</div>
          <div class="overflow-hidden ">
            <img
              src="@/assets/blog_default.jpg"
              alt="Victoria's image"
              class="object-cover aspect-video"
            />
          </div>
          <div class="m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            delectus esse nobis! Ipsum consequatur enim, ab aspernatur eaque
            iure nesciunt, obcaecati exercitationem .
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import "@/assets/IMG_8460.jpg";
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
