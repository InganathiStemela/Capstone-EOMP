<template>
  <div>
    <h1>USERS</h1>
    <table class="table">
      
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
            <button @click="updateUser(user)">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
    </button>
         
             <button @click="deleteUser(user.ID)">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>PRODUCTS</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>CATEGORY</th>
          <th>IMAGE</th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="product in products" :key="product.ID">
          <td>{{ product.ID }}</td>
          <td>{{ product.NAME }}</td>
          <td>{{ product.CATEGORY }}</td>
          <td><img :src="product.IMAGE" alt="product"></td>
          <td>{{ product.PRICE }}</td>
          <td>
      
    <button @click="updateProduct(product)">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
    </button>
    <button @click="deleteProduct(product.ID)">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

import { capstoneUrl } from "../store/index.js";

export default {
  name: "AdminTable",
 components: { capstoneUrl },
  computed: {
    users() {
      return this.$store.state.users
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch('fetchProducts');
    // this.$store.dispatch('UpdateProduct');
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "http://localhost:3000/users"
        );
        this.$store.commit("setUsers", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async updateUser(user) {
      try {
        await axios.patch(`http://localhost:3000/users/${user.ID}`, user);
        console.log("User updated successfully!");
        this.fetchUsers();
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
async deleteUser(ID) {
  const confirmed = confirm("Are you sure you want to delete this user?");
  if (confirmed) {
    try {
      await this.$store.delete(`http://localhost:3000/users/${user.ID}`);
      console.log("User deleted successfully!");
      this.fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  this.$router.push("/admin");
},
async updateProduct(product) {
      try {
        await axios.patch(`http://localhost:3000/products/${product.ID}`, product);
        console.log("Product updated successfully!");
        this.fetchProducts();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
    async deleteProduct(ID) {
    const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try   {
          await this.$store.delete(`http://localhost:3000/users/${products.ID}`);
          console.log("Product deleted successfully!");
          this.fetchProducts();
        } catch (error) {
        console.error("Error deleting product:", error);
        }
      }
      this.$router.push("/admin");
    },
  },
  }

</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: transparent; 
}

.table th, .table td {
  border: 1px solid #ddd; 
  padding: 8px;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}
.table tbody {
  background-color: transparent;
}

.table tbody tr:nth-child(even) {
  background-color: #f2f2f2; 
}

.table tbody tr:hover {
  background-color: #ddd; 
}

.table img {
  width: 100px;
  height: auto; 
}
h1 {
  text-shadow: 2px 2px green;
  text-decoration: underline;
  color: black;
}
@media screen and (max-width: 600px) {
  .table {
    overflow-x: auto;
    display: block;
    white-space: nowrap;
  }
  .table th,
  .table td {
    white-space: nowrap;
  }
}
</style>