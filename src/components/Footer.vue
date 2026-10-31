<template>
  <footer class="bg-my-surf text-white border-t border-t-my-elec">
    <div class="py-2 px-4 grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1">
      <div class="p-1 flex gap-0.5">
        <div class="border-my-blue border-r p-1">
          <img src="#" loading="lazy" alt="#logo">
        </div>
        <div class="border-my-blue border-l p-1">
          <img src="#" loading="lazy" alt="#logo">
        </div>
      </div>
      <div class="p-1">
        <div class="text-center"><h3 class="text-my-bright">Quick Links</h3></div>
        <div class="grid grid-cols-2 gap-1 text-center">
        <router-link 
          v-for="link in links" 
          :key="link.path"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </div>
      </div>
      <div class="p-1">
        <div class="text-center"><h3 class="text-my-bright">Follow Me</h3></div>
        <div class="grid grid-cols-2 gap-1 text-center">
          <div v-for="medium in media" :key="medium.link">
          <a :href="medium.link" target="_blank" rel="noopener noreferrer">
            <fa-icon :icon="medium.icon"/>
             {{medium.name}}
          </a>
        </div>
        </div>
      </div>
    </div>
    <div class="text-center px-1.5">
      <hr>
      <small>&copy; 2026 Nditsi Paul Penyia - All Rights Reserved</small>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'Skills & Services', path:'/skills-services'},
    {name:'Projects', path:'/projects'},
 ])

const media = [
  {name:"Facebook", link:"https://facebook.com", icon: "fa-brands fa-facebook"},
  {name:"Instagram", link:"https://instagram.com", icon: "fa-brands fa-instagram"},
  {name:"LinkedIn", link:"https://linkedin.com", icon: "fa-brands fa-linkedin"},
  {name:"GitHub", link:"https://github.com", icon: "fa-brands fa-github"},
]
</script>

<style scoped>
footer{
  font-weight: bold;
}
</style>