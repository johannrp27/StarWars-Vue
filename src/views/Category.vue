<template>
  <div>
      {{data}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  beforeMount(){
    this.fetchData(this.$route.params.category)
  },
  computed:{
    ...mapState(['data'])
  },
  methods:{
    ...mapActions(['fetchData'])
  },
  beforeDestroy(){
    this.$store.state.data = {}
  }
  
}
</script>

<style>

</style>