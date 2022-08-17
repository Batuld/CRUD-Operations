<template>
  <div class="w-96">
   <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <router-link to="/" class="font-semibold text-xl tracking-tight" >CRUD App</router-link>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
         <div class="text-sm lg:flex-grow">
        <li  class= "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <router-link to="/tutorials" >Tutorials</router-link>
        </li>
        <li  class= "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          <router-link to="/add" >Add</router-link>
        </li>
      </div>
      </div>
    </nav> 
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
