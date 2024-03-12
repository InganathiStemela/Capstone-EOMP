<template>
    <div class="login-form d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4" style="width: 350px;">
        <h2 class="mb-4">Login</h2>
        <form @submit.prevent="login" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="email" class="form-label">EMAIL</label>
            <input type="email" v-model="EMAIL" class="form-control" id="email" placeholder="Email" required>
            <div class="invalid-feedback">Please provide a valid email.</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">PASSWORD</label>
            <input type="password" v-model="PASSWORD" class="form-control" id="password" placeholder="Password" required>
            <div class="invalid-feedback">Please provide your password.</div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <p v-if="loginError" class="mt-3 error-message">{{ loginError }}</p>
        <p class="mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
      </div>
    </div>
  </template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      EMAIL: '',
      PASSWORD: '',
      loginError: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:6300/users/register', {
          email: this.EMAIL,
          password: this.PASSWORD,
        });
        console.log(response.data);
      } catch (e) {
        console.error('Login failed:', error);
        this.loginError = 'Invalid email or password. Please try again.';
      }
    },
  },
};
</script>


  <style scoped>
  /* .login-form {
    background-color: white;
  } */
  </style>