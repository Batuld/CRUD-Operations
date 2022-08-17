<template>
  <div class="edit-form">
    <h4 class="m-2"><b>Tutorial</b></h4>
    <form> 
      <div class="m-4 text-left ...">
        <label >Title</label>
        <input
          type="text"
         class="flex text-left shadow appearance-none border rounded w-64 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title"
        />
      </div>
      <div class="m-4 text-left ...">
        <label for="description"  class="text-left ...">Description</label>
        <input
          type="text"
         class="flex text-left shadow appearance-none border rounded w-64 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
        />
      </div>
      <div  class="m-4 text-left ...">
        <label class="text-left ..."><strong>Status:</strong></label>
      </div>
    </form>
    <button  class="flex-1 p-1 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      UnPublish
    </button>
    <button  class="flex-1 p-1 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Publish
    </button>
    <button  class="flex-1 p-1 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
    <button type="submit" class="flex-1 p-1 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Update
    </button>
   
  </div>
</template>

<script lang="ts">

export default {
  name: 'tutorial-details',
  
}
</script>