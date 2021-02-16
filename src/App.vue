<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template> 
<script>
import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';
export default {
  components:{
    Header,
    Home,
    Footer
  }
}
</script>

<style>
</style>
