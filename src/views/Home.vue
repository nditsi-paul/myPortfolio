<template>
  <section>
    <Hero/>
  </section>
  <section>
    <AboutPreview/>
  </section>
  <section>
    <SkillPreview/>
  </section>
  <section>
    <ProjectPreview/>
  </section>
  <section>
    <ContactMe/>
  </section>
</template>
<script setup>
import {ref} from 'vue'
import Hero from '../components/Hero.vue'
import AboutPreview from '../components/AboutPreview.vue'
import SkillPreview from '../components/SkillPreview.vue'
import ProjectPreview from '../components/ProjectPreview.vue'
import ContactMe from '../components/ContactMe.vue'
 let count = ref(false)

</script>

<style scoped>
</style>