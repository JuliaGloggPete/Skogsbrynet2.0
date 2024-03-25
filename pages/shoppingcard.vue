<template>
  <div class="card">
    <p class="text-3xl text-center mt-4">Varukorg</p>
  <div class="px-8 my-8" v-for="(item, index) in orderStore.$state.orderedItems" :key="index">
         
    {{ item.orderItemCount }}
      {{ item.productTitle }}&nbsp;
      
       price
      
  </div>
  <hr class="my-4" />
  <div class="px-8 my-8">

   <p class="font-bold">Total</p> 
  </div>

</div>
</template>

<script setup>
import { useOrderStore } from "~/stores/orderStore";
import { useOverallCount } from "~/stores/overallCount";

const countStore = useOverallCount();
const orderStore = useOrderStore();




</script>

<style lang="scss" scoped>

</style>