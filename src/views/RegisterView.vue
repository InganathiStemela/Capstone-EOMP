<template>
    <div class="users-table vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 class="display-1 text-center">
          <span class="underline">SIGN UP</span>
        </h1>
        <form class="p-3 rounded" @submit.prevent="postUser">
          <div class="mb-3 row">
            <div class="col">
              <input v-model="USERNAME" type="text" class="form-control" placeholder="First Name" required>
            </div>
          </div>
          <div class="mb-3">
            <input v-model="EMAIL" type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="mb-3">
            <input v-model="PASSWORD" type="password" class="form-control" placeholder="Password" required>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" v-model="saveAccount">
            <label class="form-check-label">Save account for future logins</label>
          </div>
          <p class="text-center">Already have an account? <router-link to="/login">Login</router-link></p>
          <button type="submit" class="btn btn-primary d-block mx-auto" :disabled="submitting">
            {{ submitting ? 'Creating Account...' : 'Create an account' }}
          </button>
        </form>
      </div>
    </div>
  </template>

<script>
import { createStore } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      USERNAME: '',
      EMAIL: '',
      PASSWORD: '',
      saveAccount: false,
      submitting: false,
    };
  },
  methods: {
    async postUser() {
  try {
    this.submitting = true;
    const response = await axios.post('http://localhost:6300/users/register', {
      username: this.USERNAME,
      email: this.EMAIL,
      password: this.PASSWORD,
      saveAccount: this.saveAccount,
    });
  } catch (e) {
    console.error('Registration failed:', error)
  } finally {
    this.submitting = false;
  }
    }
  }
}
</script>

  <style scoped>
  .underline {
    border-bottom: 2px solid black;
    padding-bottom: 5px;
    display: inline-block;
  }
  </style>
  