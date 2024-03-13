<template>
  <div>
<div class="products">
      <h1 class="display-1">PRODUCTS</h1>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="container mt-4">
        <div class="row">
          <div v-for="product in products" :key="product.ID" class="col-md-4">
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
     <CardComp :products="products"/>
     <SingleComp :product="product"/>
   </div>
  
     
</template>

<script>
 import SpinnerComp from '@/components/SpinnerComp.vue';
 import CardComp from '@/components/CardComp.vue';
 import SingleComp from '../components/SingleComp.vue';


 export default {
   props: {
     product: Object
   },
   data() {
     return {
       selectedProduct: null,
     };
   },
   watch: {
     product: {
       immediate: true,
       handler(newVal) {
         this.selectedProduct = newVal;
       },
     },
   },
   components: {SpinnerComp ,CardComp, SingleComp},
   props: {
     products: Array,
   },
   computed: {
     products() {
       return this.$store.state.products;
     },
     product() {
       return this.$store.state.product;
     },
   },
   mounted() {
     this.$store.dispatch('fetchProducts');
    //  this.$store.dispatch('fetchProduct');
   }
 };

</script>


<style scoped>

</style>