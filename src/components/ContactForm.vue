<template>
  <div class="h-full p-1 relative">
    
  <form class="border p-3 my-auto rounded-2xl border-my-elec">
    <label for="name">
      Name: <span class="text-red-500">*</span>
    </label>
    <input class="my-0.5 w-full bg-white rounded text-black px-1.5 py-0.5" type="text" name="name" id="name" placeholder="Nditsi Paul" required>

    <label for="email">
      Email: <span class="text-red-500">*</span>
    </label>
    <input class="my-0.5 w-full bg-white rounded text-black px-1.5 py-0.5" type="email" name="email" id="email" placeholder="example@gmail.com" required>

    <label for="subject">Subject</label>
    <select class="my-0.5 w-full bg-white rounded text-black px-1.5 py-0.5" name="subject" id="subject">
      <option v-for="sub in subjects"
      :value="sub.value"
      :key="sub.value">{{ sub.name }}</option>
    </select>

    <label for="desc">
      Description: <span class="text-red-500">*</span>
    </label>
    <textarea class="my-0.5 w-full bg-white rounded text-black px-1.5 py-0.5" name="desc" id="desc" placeholder="Describe your project in few words...." required></textarea>

    <button class="my-0.5 bg-my-elec text-2xl w-full rounded" type="submit">
      <fa-icon icon="fa fa-envelope"/>
       Mail
    </button>
  </form>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'

const subjects=[
  {name:"Select a Subject", value:""},
  {name:"Web Design", value:"design"},
  {name:"Web Development", value:"webDev"},
  {name:"Web Maintenance", value:"webMain"},
]


</script>

<style scoped>
button, label{
  font-weight: bold;
}

textarea{
  resize: none;
  overflow: hidden;
  min-height: 150px;
}

</style>