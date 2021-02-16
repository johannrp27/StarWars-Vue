<template>
  <div class="home">
    <div class="grid grid-rows-2 grid-cols-3 gap-4">
      <div class="text-center bg-gray-400">Characters</div>
      <div class="text-center bg-gray-400">Planets</div>
      <div class="text-center bg-gray-400">Fils</div>
      <div class="text-center bg-gray-400">Species</div>
      <div class="text-center bg-gray-400">Vehicles</div>
      <div class="text-center bg-gray-400">Starships</div>

    </div>
    <!-- <button class="btn " @click="fetchData('Categoria')">Click me</button>
    {{data}} -->

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {  
  },
  computed:{
    ...mapState(['data'])
  },
  methods:{
    ...mapActions(['fetchData'])
  }  
}
</script>
