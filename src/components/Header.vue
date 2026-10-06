<template>
  <header class="bg-white">
    <div class="logo">
      <span class="text-blue-400">Nditsi</span> Paul
    </div>
    <div>
      <nav>
        <router-link 
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          active-class="active">
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>
<script setup>
 import {ref} from 'vue'
 const links = ref([
  {name:'Home', path:'/'},
  {name:'About', path:'/about'},
  {name:'Skills & Services', path:'/skills-services'},
  {name:'Projects', path:'/projects'},
  {name:'Contact', path:'/contact'},
 ])
</script>

<style scoped>
  .active{
    background: #009dfffb;
    color: white;
    padding: 0 12px;
    border-radius: 5px;
  }
  nav{
    display: flex;
    gap: 20px;
    font-weight: bold;
  }
  header{
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }

  .logo{
    font-weight: bold;

  }
</style>