<template>
  <div>
<div class="products">
      <h1 class="display-1">PRODUCTS</h1>
      <form class="d-flex" role="search">
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="container mt-4">
        <div class="row">
          <div v-for="product in filteredProducts" :key="product.ID" class="col-md-4">
            <div class="card mb-4">
              <img :src="product.IMAGE" class="card-img-top" :alt="product.NAME" />
              <div class="card-body">
                <h5 class="card-title">{{ product.NAME }}</h5>
                <p class="card-text">Amount: {{ product.PRICE }}</p>
                <p class="card-text">Category: {{ product.CATEGORY }}</p>
                <router-link id="btn" :to="{name: 'product', params: {ID: product.ID}}">View More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <SpinnerComp/>
     <CardComp :products="filteredProducts"/>
     <SingleComp :product="selectedProduct"/>
   </div>
  
     
</template>

<script>
 import SpinnerComp from '../components/SpinnerComp.vue';
 import CardComp from '../components/CardComp.vue';
 import SingleComp from '../components/SingleComp.vue';


 export default {
  components: {SpinnerComp ,CardComp, SingleComp},
  //  props: {
  //    product: Object
  //  },
   data() {
     return {
      searchQuery: '',
       selectedProduct: null,
     };
   },
  //  watch: {
  //    product: {
  //      immediate: true,
  //      handler(newVal) {
  //        this.selectedProduct = newVal;
  //      },
  //    },
  //  },
   
  //  props: {
  //    products: Array,
  //  },
   computed: {
     products() {
       return this.$store.state.products || [];
     },
     filteredProducts() {
      const query = this.searchQuery.toLowerCase();
       return this.products.filter(product =>
       product.NAME.toLowerCase().includes(query));
     },
   },
   mounted() {
     this.$store.dispatch('fetchProducts');
     this.$store.dispatch('fetchProduct');
   }
 };

</script>


<style scoped>

</style>