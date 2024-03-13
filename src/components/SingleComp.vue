<template>
    <div>
      <div v-if="product">
        <img :src="product.IMAGE" alt="">
        <h3>{{ product.NAME }}</h3>
        <h4>{{ product.PRICE }}</h4>
        <p>Category: {{ product.CATEGORY }}</p>
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
    mounted() {
    const ID = +this.$route.params.ID;
    this.$store.dispatch("fetchProduct", ID);
    console.log(this.product, ID);
  },
  };
  </script>