<template>
    <div class="products">
      <h1 class="display-1">PRODUCTS</h1>
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
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';
import CardComp from '@/components/CardComp.vue';

export default {
    components: {
    SpinnerComp,
    CardComp,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },


  mounted() {
    this.$store.dispatch('fetchProducts');
  },
}

</script>


<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.5); 
}
.card-img-top {
  width: 100%; 
}

#btn{
  background-color: green;
  border-color: black;
}
.btn-hover:hover {
  background-color: black; 
  color: green;
}
</style>