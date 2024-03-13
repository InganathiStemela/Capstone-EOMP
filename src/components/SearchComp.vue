<template>
    <form class="d-flex" role="search" @submit.prevent="search">
      <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      search() {
        console.log('Searching for:', this.searchQuery);
        this.searchQuery = '';
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  