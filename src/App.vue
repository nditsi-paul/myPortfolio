<template>
  <Header/>
  <main class="flex-1">
    <router-view :key="$route.fullPath"/>
  </main>
  <Footer/>
</template>

<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>