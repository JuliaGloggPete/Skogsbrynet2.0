<template>
  <div class="card">
    <div class="grid lg:grid-cols-2 lg:gap-6">
      <div class="p-7">
        <img
          :src="productImageUrl"
          alt="Product Image"
          class="mx-auto my-4 md:my-7 max-w-md"
        />
      </div>

      <div class="mx-auto mb-4 lg:my-auto">
        <h2 class="font-bold text-4xl my7">{{ product.productTitle }}</h2>
        <p>{{ product.productDescription }}</p>
        <p class="font-bold border-b-2 mb-4 pb-2">
          <strong>Product Information: </strong>
          {{ product.productInformation }}
        </p>
        <p class="text-xl my-7">
          <strong>Price: </strong> {{ product.price }} kr
        </p>
        <p><strong>Packaging Size:</strong> {{ product.packaging }}</p>
        <!--         <p>Available in:</p>
        <div v-for="color in product.colors" :key="color.id">
          <p>{{ color.colorName }}</p> 
        </div>
       -->

        <button
          v-if="!alreadyOrderd"
          class="btn flex mt-5"
          @click="addToCart(product.id, product.productTitle, product.price)"
        >
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>

        <div v-else>
          <button class="btn my-4 mr-3">-</button>
          <span> {{ orderItemCount }}</span>
          <button class="btn my-4 ml-3">+</button>
        </div>
        <p v-for="(item, index) in orderStore.$state.orderedItems" :key="index">
          {{ item.productTitle }},&nbsp;
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { useOrderStore } from "~/stores/orderStore";
const { product, productImageUrl } = defineProps([
  "product",
  "productImageUrl",
]);

const orderStore = useOrderStore();

let alreadyOrderd = false; // förbättra kolla om product finns i orderstore
let orderItemCount = 0
const addToCart = (id, productTitle, price) => {
  //göra en if-sats här om produkten redan finns så ändras knapperna och
  // count

  if (!alreadyOrderd) {
    orderItemCount = 1;

    const productToAdd = { id, productTitle, price, orderItemCount };

    orderStore.addItem(productToAdd);
    alreadyOrderd = true;
    console.log(orderStore.$state);

  } else {
    // ändra bara count
    // increase() & decrease()
  }
};
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
~/stores/orderStore
