<template>
      <div class="flex justify-between items-center sticky top-0 z-50 w-full border-b-my-elec border-b py-2.5 px-7.5 max-sm:px-2">
        <div class="logo text-2xl flex gap-0.5 items-center">
          <div>
            <span class="text-my-blue">Nditsi</span> 
            Paul
          </div>
      </div>

      <!-- Desktop Links -->
      <nav class="hidden md:flex gap-4">
        <router-link 
          v-for="link in links" 
          :key="link.path"
          :to="link.path"
          active-class="active"
        >
          {{ link.name }}
        </router-link>
      </nav>
      

      <!-- Mobile Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-2xl">
        <span v-if="!isOpen">
          <fa-icon icon="fa-solid fa-bars"/>
        </span>
        <span v-else>
          <fa-icon icon="fa-solid fa-xmark"/>
        </span>
      </button>
    </div>
      
   <!-- Mobile Menu -->
    <transition name="slide">
      <nav v-if="isOpen" class="md:hidden absolute to-2.5 text-center bg-my-black left-0 border-t w-full px-1 py-1 flex flex-col gap-4">
        <router-link 
          v-for="link in links" :key="link.path"
          :to="link.path"
          @click="isOpen = false"
          active-class="active"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </transition>


</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = ref([
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'Skills & Services', path:'/skills-services'},
    {name:'Projects', path:'/projects'},
    {name:'Contact', path:'/contact'},
 ])

</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: all 0.1s ease;
}
.slide-enter-from{
  opacity: 0;
  transform: translateX(-10px);
}
.slide-leave-to{
  opacity: 0;
  transform: translateX(10px);
}
.active{
    background: #0267F6;
    color: white;
    padding: 0 12px;
    border-radius: 5px;
  }
</style>