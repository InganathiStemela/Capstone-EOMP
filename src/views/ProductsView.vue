<template>

<div>
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
   },
   mounted() {
     this.$store.dispatch('fetchProduct');
   },
 };

</script>


<style scoped>

</style>