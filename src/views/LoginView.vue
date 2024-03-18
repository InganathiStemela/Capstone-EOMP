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

<!-- <script>
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
        const response = await axios.post('/login', {
          EMAIL: this.EMAIL,
          PASSWORD: this.PASSWORD
        });
        const verifyToken = response.data.verifyToken;

        localhost.setItem('verifyToken', verifyToken);

        console.log('Login successful');
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loginError = 'Invalid email or password';
        } else {
          this.loginError = 'An error occurred while logging in';
          console.error('Login failed:', error);
        }
      }
    }
  }
}
</script> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      EMAIL: '',
      PASSWORD: '',
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/users/login', {
          EMAIL: this.EMAIL,
          PASSWORD: this.PASSWORD
        });
        const token = response.data.token;
        document.cookie = `token=${token}; path=/`;
        alert('Login successful!');
        console.log(response.data);
        console.log("Email:", this.EMAIL);
            console.log("Password:", this.PASSWORD);
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred during login. Please try again later.');
      }
      this.$router.push("/");
    }
    
  }
};
</script>



  <style scoped>
  /* .login-form {
    background-color: white;
  } */
  </style>