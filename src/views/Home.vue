<template>
  <div class="home">
    <div class="flex flex-row flex-wrap">
      <router-link :to="url" v-for="({name, url}, i) of categories" :key="i" 
        class="text-center bg-gray-400 flex-grow p-4 m-3 category-card cursor-pointer text-lg">
        {{name}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {  
  },
  computed:{
    ...mapState(['categories'])
  },
}
</script>

<style scoped>
  .category-card{
    width: 400px;
  }
</style>
