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
            updatedUser: {},
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
        await axios.patch(`http://localhost:3000/users/${ID}`, this.updatedUser); 
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
