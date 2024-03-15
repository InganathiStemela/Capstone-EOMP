<template>
    <div>
      <div>
        <img :src="$route.query.IMAGE" alt="">
        <h3>{{ $route.query.NAME }}</h3>
        <h4>{{ $route.query.PRICE }}</h4>
        <p>Category: {{ $route.query.CATEGORY }}</p>
    
     
      </div>
    </div>
  </template>
  
  <script>
  export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  watch: {
    product(newValue) {
      console.log('Product changed:', newValue);
    },
    '$route.params.ID'(newID) {
      console.log('New ID:', newID);
      this.$store.dispatch("fetchProduct", newID);
    }
  },
  mounted() {
    const ID = this.$route.params.ID;
    console.log('Initial ID:', ID);
    this.$store.dispatch("fetchProduct", ID);
  },
};
  </script>