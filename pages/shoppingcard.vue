<template>
  <div class="card">
    <p class="text-3xl text-center mt-4">Varukorg</p>
    <div class="px-8 my-8">
      <!-- Header row -->
      <div class="grid grid-cols-5 mb-4 font-semibold">
        <div>Antal</div>
        <div>Product</div>
        <div>Pris per stk</div>
        <div>Rabatt</div>
        <div>Total</div>
      </div>
      <hr class="mb-4">
      
      <!-- Items row -->
      <div class="grid grid-cols-5" v-for="(item, index) in orderStore.$state.orderedItems" :key="index">
        <div>{{ item.orderItemCount }}</div>
        <div>{{ item.productTitle }}</div>
        <div>{{ item.price }} kr</div>
        <div></div> <!-- Placeholder for Rabatt -->
        <div>{{ item.price * item.orderItemCount }} kr</div> <!-- Placeholder for Total -->
      </div>
   
  <hr class="my-4" />
  <div class="grid grid-cols-5 mb-4 ">
    <div class="col-span-3"></div>

   <p class="font-bold">Summa</p> 
   <p>{{ overallSum }} kr
</p>

</div>
</div>
<div class="text-center -mb-5">
      <button class="btn" @click="placeOrder">Beställ</button>
    </div>
</div>
</template>

<script setup>
import { useOrderStore } from "~/stores/orderStore";
import { useOverallCount } from "~/stores/overallCount";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const db = getFirestore();

const countStore = useOverallCount();
const orderStore = useOrderStore();



const calculateTotal = (item) => {
  return item.price * item.orderItemCount;
};


const overallSum = computed(() => {
  let sum = 0;
  orderStore.$state.orderedItems.forEach((item) => {
    sum += calculateTotal(item);
  });
  return sum;
});


//TODO läsa ner o kolla vilken ordernummer det verkligen ska vara

//TODO kundDetailjer
const getRandomOrderNumber = () => {
  return Math.floor(Math.random() * 1000) + 1; 
};
const placeOrder = async () => {
  const orderItems = orderStore.$state.orderedItems.map((item) => ({
    itemName: item.productTitle,
    itemPrice: item.price,
    itemCount: item.orderItemCount,
  }));

  const newOrder = {
    orderDatum: new Date().toISOString(),
    orderNumber: getRandomOrderNumber(),

    orderItems: orderItems,
    totalSum: overallSum.value, 
  };

  try {
    await addDoc(collection(db, "Orders"), newOrder);
    console.log("Order placed successfully!");
  } catch (error) {
    console.error("Error placing order:", error);
  }
};


//db.collection("Order").add(newOrder)




</script>

<style lang="scss" scoped>

</style>