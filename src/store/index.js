import { createStore } from 'vuex'
import axios from 'axios'
let capstoneUrl = "https://capstone-eomp-6qsh.onrender.com/";


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
    setMsg(state, Msg){
      state.Msg = Msg
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
        const { result } = await (await axios.get(`${capstoneUrl}products/${ID}`)).data;
        context.commit("setProduct", result[0]);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
  },
  modules: {
  }
})
