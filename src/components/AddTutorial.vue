<template>
        <div class="rounded overflow-hidden shadow-lg w-96 justify-center p-10">
            <div class="text-left ...">Title</div>
 <input placeholder= "Add Todo" class="flex mt-4 
        shadow
        appearance-none
        border
        rounded
        w-64
        py-2
        px-2
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline"  v-model="tutorial.title"/>
         <div class="text-left ... mt-4">Description</div>
 <input placeholder= "Add Todo" class="flex mt-4 
        shadow
        appearance-none
        border
        rounded
        w-64
        py-2
        px-2
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline"  v-model="tutorial.description" />
 <button class="flex-1 p-1 m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addBlog()">
  Submit
 </button>
       </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tutorial from "../types/Tutorial";

export default defineComponent({
  name: 'add',
  data() {
   return {
     //tutorial: "",
    // description: ""
     tutorial: {
        id: 1,
        title: "",
        description: "",
        published: false,
      } as Tutorial,
   };
 },
  methods: {
   addBlog() {
     if (this.tutorial.title !== "") {
       const newTask = new Tutorial(this.tutorial.title);
       this.$store.commit("setTask", newTask);
       this.tutorial = "";
       console.log("add",this.tutorial);
       this.$router.push("/");
     }
   } 
 }
})
</script>