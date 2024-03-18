<template>
    <div class="checkout">
      <h2>Checkout</h2>
      <form @submit.prevent="submitForm">
        <label>USERNAME:</label>
        <input type="text" v-model="formData.name" required>
  
        <label>EMAIL:</label>
        <input type="email" v-model="formData.email" required>
  
        <label>ADDRESS:</label>
        <textarea v-model="formData.address" required></textarea>
  
        <label>CARD NUMBER:</label>
        <input type="text" v-model="formData.cardNumber" required>
  
        <label>EXPIRATION DATE:</label>
        <input type="text" v-model="formData.expirationDate" placeholder="MM/YYYY" required>
  
        <label>CVV:</label>
        <input type="text" v-model="formData.cvv" maxlength="3" required>
  
        <button type="submit">Checkout</button>
      </form>
      <p v-if="submitted">Thank you for your order!</p>
      <p v-if="error">Error: {{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          address: '',
          cardNumber: '',
          expirationDate: '',
          cvv: '',
        },
        submitted: false,
        error: false,
        errorMessage: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('/checkout', this.formData);
          console.log(response.data);
          this.submitted = true;
        } catch (error) {
          console.error('Error:', error);
          this.error = true;
          this.errorMessage = error.message || 'An error occurred during checkout.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    padding: 20px;
    justify-content: center;
  }

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkout-btn {
  background-color: white;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: green;
}
  
  </style>
  