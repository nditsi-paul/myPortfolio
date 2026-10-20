<template>
  
  <section>
   <div>
    <ContactDetails/>
   </div>
   <div>
    <ContactForm/>
   </div>
  </section>

  <section></section>

</template>
<script setup>
  import {ref} from 'vue'
  import ContactDetails from '../components/ContactDetails.vue';
  import ContactForm from '../components/ContactForm.vue';
 
</script>

<style scoped></style>