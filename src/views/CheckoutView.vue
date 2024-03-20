<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="cartItems.length > 0">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cartItems" :key="index">
            <td>{{ product.ID }}</td>
            <td>{{ product.NAME }}</td>
            <td>{{ product.IMAGE }}</td>
            <td>{{ product.QUANTITY }}</td>
            <td>{{ product.PRICE }}</td>
            <td>
              <button @click="removeItem(index)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Total: {{ calculateTotal() }}</p>
      <button @click="checkout">Checkout</button>
    </div>
    <p v-else>No items in the cart</p>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeFromCart', index);
    },
    calculateTotal() {
      return this.cartItems.reduce((total, product) => total + product.PRICE * product.QUANTITY, 0);
    },
    async checkout() {
      try {
        const order = {
          product: this.cartItems.map(product => ({
            id: product.ID,
            name: product.NAME,
            image: product.IMAGE,
            quantity: product.QUANTITY,
            price: product.PRICE
          })),
          total: this.calculateTotal()
        };

        const response = await this.$axios.post('/checkout', order);
        if (response.status === 200) {
          this.$store.dispatch('clearCart');
          alert('Checkout successful! Cart cleared.');
        } else {
          alert('Checkout failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error during checkout:', error);
        alert('An error occurred during checkout. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  cursor: pointer;
}
</style>

  