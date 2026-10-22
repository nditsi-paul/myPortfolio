<template>
  <div class="grid grid-cols-2 max-sm:grid-cols-1">
    <div>
      <HeroDetail/>
    </div>
    <div>
      <HeroImg/>
    </div>
  </div>
</template>

<script setup>
import HeroDetail from './HeroDetail.vue';
import HeroImg from './HeroImg.vue';
</script>

<style scoped>
h1{
  font-weight: bold;
}

br{
  font-size: small;
}

#web{
  font-size: medium;
  font-weight: bold;
}
</style>