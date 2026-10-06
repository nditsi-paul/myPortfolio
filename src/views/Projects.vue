<template>
  <div v-for="project in projects">
    <div class="project">
          <div class="p-img">
            <div class="p-pic"></div>
          <a href="https://kumdoris.com" target="_blank" rel="noopener noreferrer"><button >View This Project <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
          </div>
          <div class="p-info">
            <h4>{{project.Title}}</h4>
            <span><em>{{projects.Tech}}</em></span>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
  </div>
</template>
<script setup>
  import {ref} from 'vue'
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  myProjects=[{
    ImgSrc:"../assets/img",
    Title: "e",
    Link: "",
    Techs: ""
  }]
  projects = ref('')
  projects.value = myProjects
</script>

<style scoped></style>