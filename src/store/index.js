import { createStore } from 'vuex'
import axios from 'axios'
let capstoneUrl = "http://localhost:6300/";


export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products =products
    },
    setProduct(state, product){
      state.product = product
    },
  },
  actions: {
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${capstoneUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },
    async fetchProduct(context, ID) {
      try {
        const { data } = await axios.get(`${capstoneUrl}products/${ID}`);
        context.commit("setProduct", data.result[0]);
        console.log(data.result);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

  },
  modules: {
  }
})
