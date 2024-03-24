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
          <strong>Product Information: </strong> {{ product.productInformation }}
        </p>
        <p class="text-xl my-7">
          <strong>Price: </strong> {{ product.price }} kr
        </p>
        <p><strong>Packaging Size:</strong> {{ product.packaging }}</p>
        <p>Available in:</p>
        <div v-for="color in product.colors" :key="color.id">
          <p>{{ color.colorName }}</p>
        </div>

        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

const { product, productImageUrl } = defineProps(['product', 'productImageUrl']);



</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
