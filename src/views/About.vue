<template>
  <section>
    <AboutMe/>
  </section>
  <section class="grid grid-cols-2 max-sm:grid-cols-1">
    <div>
      <MyJourney/>
    </div>
    
    <div>
      <Education/>
    </div>
  </section>
</template>
<script setup>
import AboutMe from '../components/AboutMe.vue';
import MyJourney from '../components/MyJourney.vue';
import Education from '../components/Education.vue';
</script>

<style scoped></style>