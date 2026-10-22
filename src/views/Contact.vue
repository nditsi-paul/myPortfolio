<template>
  
  <div class="h-full px-4 max-md:px-2 flex flex-col">
    <div class="grid gap-1 grid-cols-2 max-md:flex flex-col h-full my-2 flex-1 px-4 max-sm:px-0">
      <div class="h-full my-auto flex-1 py-[auto] items-center">
        <ContactDetails/>
      </div>
      <div class="h-full my-auto flex-1 items-center">
        <ContactForm/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import ContactDetails from '../components/ContactDetails.vue';
  import ContactForm from '../components/ContactForm.vue';
 
</script>

<style scoped></style>