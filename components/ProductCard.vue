<template>
  <div class="card text-center">
    <img :src="imageUrl" :alt="product.productTitle" class="thumb" v-if="imageUrl">
    <p v-else>    <img
            src="@/assets/transparent_logo.png"
            alt="Victoria's image"
            class="thumb"
          /></p>
    <p class="font-bold text-slate-500 m-4 truncate">{{ product.productTitle }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">mer</p>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import "@/assets/transparent_logo.png";
const { product, imageUrl } = defineProps(['product', 'imageUrl']);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
