import { createStore } from 'vuex'
import axios from 'axios'
let capstoneUrl = "https://capstone-eomp-6qsh.onrender.com/";


export default createStore({
  state: {
    products: [],
    product:[],
    cartItems: [],
    users: [],
    token: null,
    loginError: null,
    registrationError: null,
    // isAdmin: false
  },
  getters: {
    allProducts: state => state.products,
    allusers: state => state.users,
    getSingleProduct: state => state.product,
    isLoggedIn: state => !!state.token,
    // isAdmin: state => state.isAdmin,
    cartItems(state) {
      return state.cartItems;
    }
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
    updateUser(state, ID)  {
      const index = state.users.findIndex(user => user.ID === editedUser.ID);
      if (index !== -1) {
        state.users.splice(index, 1, editedUser);
      }
    },
      submitForm(state) {
        state.users.push();
      },
      removeFromCart(state, index) {
        state.cartItems.splice(index, 1);
      },
      addToCart(state, product) {
        state.cartItems.push(product);
      },
      // setIsAdmin(state, isAdmin) {
      //   state.isAdmin = isAdmin;
      // },
      clearCart(state) {
        state.cartItems = [];
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
    // async addToCart(context, cartItems) {
    //   try {
    //     const response = await axios.post(`/addtocart`, cartItems);
    //     context.commit("addToCart", response.data);
    //     console.log("Product added to cart successfully!");
    //   } catch (error) {
    //     console.error("Error adding to cart", error);
    //     throw error;
    //   }
    // },
    addToCart({commit}, product) {
      commit('addToCart', product)
    },
  async removeFromCart({ commit }) {
    try {
      await axios.delete(`${capstoneUrl}/addToCart`, product);
      commit('removeFromCart', index);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw error; 
    }
  },
  async checkout({ state, commit }) {
    try {
      const order = {
        products: state.cartItems,
      };
      const response = await axios.post('/checkout', order);
      commit('clearCart');
      console.log('Order placed successfully:', response.data);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  }
},
  modules: {
  }
}
)
