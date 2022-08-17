<template>
 <div class="flex justify-content:start">
    <input
      class=" mt-4
        shadow
        appearance-none
        border
        rounded
        w-80
        py-2
        px-2
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      id="username"
      type="text"
      placeholder="Search Tutorials"
    />
    <button  class="flex-1 bg-gray-400 rounded p-1 mt-4">Search</button>
  </div>
      
        <div >
     <table class="main-table">
       <thead>
         <tr>
        <h4 class="m-2"><b>Tutorials List</b></h4>
         </tr>
       </thead>
         <tr v-for="tutorial in tutorials" :key="tutorial.title">
         </tr>
     </table>
   </div>
       <button class="flex-1 bg-gray-400 rounded p-1 m-2">
        Remove All
      </button>
</template>
<script lang="ts">
//import AddTutorial from '../store/AddTutorial';
import Tutorial from '../types/Tutorial';
import { defineComponent } from "vue";

export default defineComponent ({
  name: 'tutorials',
   data() {
		return {
			tutorials: [] as Tutorial[]
		};
	},
mounted() {
   this.tutorials = this.$store.state.tutorials;
 },
})
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>