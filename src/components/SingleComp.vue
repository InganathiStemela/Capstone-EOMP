<template>
    <div>
      <div class="card">
        <img :src="$route.query.IMAGE" alt="">
        <h3>{{ $route.query.NAME }}</h3>
        <h4>{{ $route.query.PRICE }}</h4>
        <p>Category: {{ $route.query.CATEGORY }}</p>
    
        <button @click="addToCart(product)">Add to Cart</button>
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
    this.fetchCartProducts(this.$route.params.ID);
  },
  methods: {
    fetchCartProducts(ID) {
      this.$store.dispatch('fetchCartProducts', ID);
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
      alert('Added to cart');
    }
  }
};
  </script>

  <style scoped>
.card{
  width: 20%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 20%;
    border-radius: 8px;
    border:2px solid green;
}
</style>