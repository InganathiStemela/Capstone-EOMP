<template>
  <div>
    <NavbarComp/>
    <router-view/>
    <FooterComp/>
    <SpinnerComp/>

  </div>

  
</template>
<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
export default {
  components: {NavbarComp,
    FooterComp,
    SpinnerComp
  }
}
</script>

<style>
body {
  background-image: url(https://i.postimg.cc/ncH4TprZ/2.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
