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
  // export default {
  //   computed: {
  //     product() {
  //       return this.$store.state.product;
  //     },
  //   },
  //   mounted() {
  //   const ID = this.$route.params.ID;
  //   this.$store.dispatch("fetchProduct", ID);
  //   console.log(this.product, ID);
  // },
  // };
  export default {
  // computed: {
  //   product() {
  //     return this.$store.state.product;
  //   },
  // },
  // watch: {
  //   '$route.params.ID'(newID) {
  //     this.$store.dispatch("fetchProduct", newID);
  //   }
  // },
  // mounted() {
  //   const ID = this.$route.params.ID;
  //   this.$store.dispatch("fetchProduct", ID);
  // },

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