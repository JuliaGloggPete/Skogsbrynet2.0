<template>
  <div>
    <header class="shadow-sm">
      <nav class="container mx-auto px-2 flex justify-between">
        <NuxtLink to="/">
          <div class="h-32 overflow-hidden">
          <img
              src="@/assets/Logo_namn.png"
              alt="Skogsbrynets Verkstad"
              class=" h-48 object-cover -my-8"
            />
            
          </div>
       </NuxtLink>
        <ul class="flex gap-4 my-auto ">
          <li><NuxtLink to="/">Home</NuxtLink></li>

          <li><NuxtLink to="/products">Produkter</NuxtLink></li>
          <li><NuxtLink to="/blogs">Blog</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/about">Om</NuxtLink></li>
          <li>
            <NuxtLink to="/shoppingcard"
              ><i class="material-icons mr-2">shopping_cart</i>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="flex-1">

  

    <div class="container mx-auto p-4 flex-1">
      <slot />
    </div>
  </main>
    <footer>
      <address class="flex flex-col container mx-auto p-4">
        <p>Victoria Erlingsson</p>
        <p>28267 Vittsjö</p>
      </address>
    </footer>
  </div>
</template>

<script>
import "@/assets/transparent_logo.png";
</script>
<style scoped>
.router-link-exact-active {
  text-decoration: underline;

  color: white;
}
</style>
