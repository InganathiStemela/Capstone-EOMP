<template>
  <div>
<div class="products">
      <h1 class="display-1">PRODUCTS</h1>
      <form class="d-flex" role="search">
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <select v-model="selectedCategory" class="form-select me-2" aria-label="Category">
          <option value="">All Categories</option>
          <option value="cleanser">Cleanser</option>
          <option value="serum/wash">Serum/Wash</option>
          <option value="balm">Balm</option>
          <option value="face mask/cream">Face Mask/Cream</option>
        </select>
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
   data() {
     return {
      searchQuery: '',
      selectedCategory: '',
       selectedProduct: null,
     };
   },
   computed: {
     products() {
       return this.$store.state.products || [];
     },
  filteredProducts() {
      let filtered = this.products;
      const query = this.searchQuery.toLowerCase();
      const category = this.selectedCategory.toLowerCase();

      if (query) {
        filtered = filtered.filter(product => product.NAME.toLowerCase().includes(query));
      }
      if (category) {
        filtered = filtered.filter(product => product.CATEGORY.toLowerCase() === category);
      }
      return filtered;
    },
    uniqueCategories() {
      const categories = new Set();
      this.products.forEach(product => categories.add(product.CATEGORY));
      return Array.from(categories);
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