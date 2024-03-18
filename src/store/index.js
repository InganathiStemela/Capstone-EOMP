import { createStore } from 'vuex'
import axios from 'axios'
let capstoneUrl = "https://capstone-eomp-6qsh.onrender.com/";


export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    token: null,
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
    setUsers(state, users){
      state.users = users;
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    removeUser(state, ID) {
      state.users = state.users.filter(user => user.ID !== ID);
    },
    updateUser(state, ID) {
        state.users = state.users.filter(user => user.ID !== ID);
      },
      submitForm(state) {
        state.users.push();
      },
      addToCart(state, newItem) {
        state.cart.push(newItem);
      }
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
    async fetchUsers(context) {
      try {
        const {data} = await axios.get(`${capstoneUrl}users`)
        context.commit("setUsers", data.results)
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching users:", error); 
      }
    },
    async addUser(context, newUser) {
      try {
        const response = await axios.post(`${capstoneUrl}users/register`, newUser);
        context.commit("addUser", response.data);
        console.log("User added successfully!");
      } catch (error) {
        console.error("Error adding user:", error);
        throw error;
      }
    },
    async deleteUser(context, ID) {
      try {
        await axios.delete(`${capstoneUrl}users/${ID}`);
        context.commit("removeUser", ID);
        console.log("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async updateUser(context, ID) {
      try {
        await axios.patch(`${capstoneUrl}users/${ID}`);
        console.log("User updated successfully!");
        context.dispatch('fetchUsers');
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  },
  async deleteProduct(context, ID) {
    try {
      await axios.delete(`${capstoneUrl}products/${ID}`);
      context.commit("removeProduct", ID);
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
  async addToCart({ commit }, newItem) {
    try {
      commit('addToCart', newItem);
      return { success: true, message: 'Item added to cart successfully' };
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  },
  modules: {
  }
}
)
