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
     v-model="searchData"
      id="username"
      type="text"
      placeholder="Search Tutorials"
    />
    <button  class="flex-1 bg-gray-400 rounded p-1 mt-4" >Search</button>
  </div>
        <div class="flex justify-center">
     <table>
       <thead>
         <tr>
          <th> <h4 class="m-2"><b>Tutorials List</b></h4></th>
         </tr>
       </thead>
         <tr :class='{"bg-emerald-200" : index == currentIndex }'
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)">
        <!--@click="setActiveTutorial(tutorial, index)"--> 
         <td class="border border-slate-300 ... w-80">{{tutorial.title}}</td>
         </tr>
          <!-- <div
          v-if="!searchFunction.length"
          class="
            m-10
            text-xs text-gray-700
            uppercase
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <b>No results found!</b>
        </div> -->
     </table>
      
   </div>
  <button class="flex-1 bg-gray-400 rounded p-1 m-4"  @click="deleteTask(tutorial)">
        Remove All
  </button>

   <div  class="flex-1">
      <div v-if="currentTutorial.id">
        <h4><b class="flex-1 p-5 m-4 bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">Tutorial</b></h4>
        <div class="m-3 text-left ...">
          <label><strong>Title:</strong></label> 
          {{ currentTutorial.title }}
        </div>
        <div class="m-3 text-left ...">
          <label><strong>Description:</strong></label>
          {{ currentTutorial.description }}
        </div>
        <div class="m-3 text-left ...">
          <label><strong>Status:</strong></label>
        </div>
        <router-link
      
          :to="'/tutorials/' + currentTutorial.id"
         class="flex-1 p-1 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Edit</router-link
        >
      </div>
      <div>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
      
</template>
<script lang="ts">
import Tutorial from "../types/Tutorial";
import { defineComponent } from "vue";
//import ResponseData from "../types/ResponseData";

export default defineComponent ({
  name: 'tutorials',
   data() {
		return {
			tutorials: [] as Tutorial[],
        searchData: "",
        currentTutorial: {} as Tutorial,
       currentIndex: -1,
      // title: "",
		};
	},
mounted() {
   this.tutorials = this.$store.state.tutorials;
   console.log("list",  this.tutorials);
   
},
// computed:{
//  searchFunction() {
//       return this.tutorials.filter((tutorial) => {
//         return tutorial.title.toLowerCase().includes(this.searchData.toLowerCase());
//       });
//     },
// },
  methods: {
    deleteTask(tutorial: Tutorial) {
     this.$store.commit("deleteTask", tutorial);
   }, 

   setActiveTutorial(tutorial: Tutorial, index = -1) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
      console.log("current",tutorial);
      
    }
 }
})
  
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>