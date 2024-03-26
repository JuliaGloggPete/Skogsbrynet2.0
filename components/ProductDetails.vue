<template>
  <div class="card">
    <div class="grid lg:grid-cols-2 lg:gap-6">
      <div class="p-7">
        <img
          v-if="productImageUrl"
          :src="productImageUrl"
          alt="Product Image"
          class="mx-auto my-4 md:my-7 max-w-md"
        />
        <img
          v-else
          src="@/assets/transparent_logo.png"
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

        <button
          v-if="!alreadyOrdered"
          class="btn flex mt-5"
          @click="addToCart(productId, product.productTitle, product.price)"
        >
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>

        <div v-if="alreadyOrdered">
          <button class="btn my-4 mr-3" @click="decreaseItem">-</button>
          <span
            v-for="(item, index) in orderStore.$state.orderedItems"
            :key="index"
          >
            <span v-if="item.productId === productId">{{
              item.orderItemCount
            }}</span>
          </span>
          <button class="btn my-4 ml-3" @click="increaseItem">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from "~/stores/orderStore";
import { useOverallCount } from "~/stores/overallCount";

import { ref } from "vue";

let alreadyOrdered = ref(false);

const countStore = useOverallCount();

const { product, productImageUrl, productId } = defineProps([
  "product",
  "productImageUrl",
  "productId",
]);

const orderStore = useOrderStore();

console.log(orderStore.getProductById(productId));
console.log(alreadyOrdered);
// förbättra kolla om product finns i orderstore
let orderItemCount = 0;

const increaseItem = () => {
  orderStore.updateItemCount(productId);
  countStore.increaseCount();
};

const decreaseItem = () => {
  orderStore.decreaseItemCount(productId);
  countStore.decreaseCount();
};

const getOrderItemCount = () => {
  const item = orderStore.getProductById(productId);
  return item ? item.orderItemCount : 0;
};

const addToCart = (productId, productTitle, price) => {
  alreadyOrdered.value = true;

  const productToAdd = { productId, productTitle, price, orderItemCount: 1 };
  countStore.increaseCount();
  orderStore.addItem(productToAdd);

  console.log(orderStore.$state);
};

/*const orderedItems = orderStore.$state.orderedItems.filter(
  (item) => item.productId === productId
);*/
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
~/stores/orderStore
