<template>
  <div class="cart">
    <h1 class="cart-heading">Your Cart</h1>
    <router-link class="nav-link" to="/products"><button class="back-button">Add Other Product</button></router-link>
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
          <td>R{{ formatAmount(product.PRICE) }}</td>
          <td>
            <button @click="removeItem(index)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="empty-cart-text">Nothing in your cart</p>
    <p class="subtotal">Subtotal: R{{ calculateSubtotal().toFixed(0) }}</p>
    <button class="pay-button" @click="order">Order</button>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
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
    calculateSubtotal() {
      return this.cartItems.reduce((total, product) => total + (product.PRICE * product.QUANTITY), 0);
    },
    formatAmount(PRICE) {
      return parseFloat(PRICE).toFixed(1);
    }
  }
};
</script>