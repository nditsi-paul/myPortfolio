<template>
  <Header/>
  <main class="flex-1 px-5 md:px-3 max-sm:px-1 bg-my-black text-my-white py-1">
    <router-view :key="$route.fullPath"/>
  </main>
  <Footer/>
</template>

<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<style>
*{
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>