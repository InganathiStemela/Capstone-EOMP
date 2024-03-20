<template>
  <div class="cart">
    <h1 class="cart-heading">Your Cart</h1>
    <button class="back-button" @click="goBack">Back</button>
    <table v-if="cartItems.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>IMAGE</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cartItems" :key="index">
          <td>{{ product.ID }}</td>
          <td>{{ product.NAME }}</td>
          <td><img :src="product.IMAGE" :alt="product.NAME" /></td>
          <td>{{ product.QUANTITY }}</td>
          <td>{{ product.PRICE }}</td>
          <td>
            <button @click="removeItem(index)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="empty-cart-text">Nothing in your cart</p>
    <p class="subtotal">Subtotal: {{ calculateSubtotal() }}</p>
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
    async addToCart(cartItems) {
    try {
      await this.$store.dispatch('addToCart', cartItems);
      console.log('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  },
    removeItem(index) {
      this.$store.commit('removeFromCart', index);
    },
    goBack() {
    },
    calculateSubtotal() {
      return this.cartItems.reduce((total, cartItems) => total + cartItems.amount, 0);
    }
  }
};
</script>

<style scoped>
.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.cart-table th {
  background-color: #f2f2f2;
}

.remove-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.remove-button i {
  color: green;
}

.empty-cart-text {
  font-style: italic;
}

.subtotal {
  font-weight: bold;
}
</style>
