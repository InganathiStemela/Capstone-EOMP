<template>
    <div>
      <div>
        <h2>Add User</h2>
        <input v-model="newUser.USERNAME" placeholder="Username" />
        <input v-model="newUser.EMAIL" placeholder="Email" />
        <input v-model="newUser.PASSWORD" placeholder="Password" type="password" />
        <button @click="registerUser">Register User</button>
      </div>
  
      <hr />
  
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.ID">
              <td>{{ user.ID }}</td>
              <td>{{ user.USERNAME }}</td>
              <td>{{ user.EMAIL }}</td>
              <td>
                <input v-model="updatedUsers[user.ID].USERNAME" placeholder="New Username" />
                <input v-model="updatedUsers[user.ID].EMAIL" placeholder="New Email" />
                <button @click="updateUser(user.ID)">UPDATE</button>
                <button @click="deleteUser(user.ID)">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <hr />
  
      <div>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct">
      <div>
        <label for="productName">NAME:</label>
        <input id="productName" v-model="newProduct.NAME" type="text" placeholder="Enter product name" required />
      </div>
      <div>
        <label for="productCategory">CATEGORY:</label>
        <select id="productCategory" v-model="newProduct.CATEGORY" required>
          <option value="">Select category</option>
          <option value="Cleanser">Cleanser</option>
          <option value="Serum/Wash">Serum/Wash</option>
          <option value="Balm">Balm</option>
          <option value="Face Mask/Cream">Face Mask/Cream</option>
        </select>
      </div>
      <div>
        <label for="productPrice">PRICE:</label>
        <input id="productPrice" v-model="newProduct.PRICE" type="number" step="0.01" placeholder="Enter price" required />
      </div>
      <div>
        <label for="productImage">IMAGE:</label>
        <input id="productImage" v-model="newProduct.IMAGE" type="url" placeholder="Enter image URL" required />
      </div>
      <button type="submit">ADD</button>
      <button type="submit">DELETE</button>
    </form>
        <AddProduct />
      </div>
  
      <hr />
  
    
      <div>
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.ID">
              <td>{{ product.ID }}</td>
              <td>{{ product.NAME }}</td>
              <td>{{ product.CATEGORY }}</td>
              <td>
                <button @click="updateProduct(product.ID)">UPDATE</button>
                <button @click="deleteProduct(product.ID)">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  

<script>
import axios from "axios";
import AddUser from "../components/AddUser.vue";
import AddProduct from "../components/AddProduct.vue";
import { capstoneUrl } from "../store";

export default {
  name: "AdminTable",
  components: { AddUser,
    AddProduct,
    capstoneUrl
},
  data() {
    return {
            updatedUsers: {},
      updatedProduct: {},
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.setUsers();
    this.fetchProducts();
  },
  methods: {
    async setUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        this.$store.commit("setUsers", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.$store.commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async deleteUser(ID) {
      const confirmed = confirm("Are you sure you want to delete this user?");
      if (confirmed) {
        try {
          await axios.delete(`http://localhost:3000/users/${ID}`);
          console.log("User deleted successfully!");
          this.fetchUsers();
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    },
    async deleteProduct(ID) {
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try {
          await axios.delete(`http://localhost:3000/products/${ID}`);
          console.log("Product deleted successfully!");
          this.fetchProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    },
    async updateUser(ID) {
      try {
        await axios.patch(`http://localhost:3000/users/${ID}`, this.updatedUsers); 
        console.log("User updated successfully!");
        this.fetchUsers();
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
    async updateProduct(ID) {
      try {
        await axios.patch(`http://localhost:3000/products/${ID}`, this.updatedProduct); 
        console.log("Product updated successfully!");
        this.fetchProducts();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
  },
};
</script>
