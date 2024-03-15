<script>
import axios from "axios";
import AddProduct from "../components/AddProduct.vue";
import { capstoneUrl } from "../store";

export default {
  name: "AdminTable",
  components: { AddProduct, capstoneUrl},
  data() {
    return {
      updatedProduct: {},
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("/products");
        this.$store.commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async deleteProduct(ID) {
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        try {
          await axios.delete(`/products/${ID}`);
          console.log("Product deleted successfully!");
          this.fetchProducts();
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    },
    async updateProduct(ID) {
      try {
        await axios.patch(`/products/${ID}`, this.updatedProduct); 
        console.log("Product updated successfully!");
        this.fetchProducts();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    },
  },
};
</script>
