<template>
  <header>
    <div></div>
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
    background: #1a237e;
    color: white;
    padding: 6px 12px;
    border-radius: 5px;
  }
  nav{
    display: flex;
    gap: 20px;
  }
  header{
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }
</style>