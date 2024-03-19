<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img
          :src="product.imagepath"
          alt="product img"
          class="mx-auto my-7 max-w-sm"
        />
      </div>

      <div>
        <h2 class="font-bold text-4xl my7">{{ product.productTitle }}</h2>
        <p>{{ product.productDescription }}</p>
        <p class="font-bold border-b-2 mb-4 pb-2">
          <strong>Produktinformation: </strong> {{ product.productInformation }}
        </p>
        <p class="text-xl my-7">
          <strong>Pris: </strong> {{ product.price }} kr
        </p>
        <p><strong>Förpackningssstorlek:</strong> {{ product.packaging }}</p>
        <p>Disponibel in:</p>
        <div v-for="color in product.colors">
          <p>{{ color.colorName }}</p>
        </div>

        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Lägg till</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
