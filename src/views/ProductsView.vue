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
                <button @click="fetchProduct(product.ID)" class="btn btn-danger" id="btn">View more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingleComp v-if="selectedProduct" :product="selectedProduct" @close="selectedProduct = null" />
    </div>
</template>

<script>
import SingleComp from '@/components/SingleComp.vue';
import axios from 'axios';

// export default {
//   components: { SingleComp },

//   props: {
//     product: Object
//   },

//   data() {
//     return {
//       selectedProduct: null,
//     };
//   },

//   computed: {
//     products() {
//       return this.$store.state.products;
//     },
//     product() {
//       return this.$store.state.product;
//     },
//   },

//   methods: {
//     async fetchProduct(ID) {
//       try {
//         const { data } = await axios.get(`${capstoneUrl}products/${ID}`);
//         context.commit("setProduct", data.result[0]);
//         console.log(data.result);
//       } catch (e) {
//         context.commit("setMsg", "An error occurred.");
//       }
//     },
//   },

//   mounted() {
//     this.$store.dispatch('fetchProducts');
//     this.$store.dispatch('fetchProduct');
//   },
// }
export default {
  components: { SingleComp },

  computed: {
    products() {
      return this.$store.state.products;
    }
  },

  data() {
    return {
      selectedProduct: null
    };
  },

  methods: {
    async fetchProduct(ID) {
      try {
        const { data } = await axios.get(`${capstoneUrl}products/${ID}`);
        this.selectedProduct = data.result[0];
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },

    showProductDetails(product) {
      this.fetchProduct(product.ID);
    }
  },

  mounted() {
    this.$store.dispatch('fetchProducts');
  }
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