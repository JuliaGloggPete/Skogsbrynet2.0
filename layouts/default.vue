<template>
  <div>
    <header class="shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/">Skogsbrynets Verkstad</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>

          <li><NuxtLink to="/products">Produkter</NuxtLink></li>
          <li><NuxtLink to="/blogs">Blog</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/about">Om</NuxtLink></li>
          <li>
            <NuxtLink to="/shoppingcard.vue"
              ><i class="material-icons mr-2">shopping_cart</i>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer>
      <address class="flex flex-col container mx-auto p-4">
        <p>Victoria Erlingsson</p>
        <p>28267 Vittsjö</p>
      </address>
    </footer>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  text-decoration: underline;
}
</style>
