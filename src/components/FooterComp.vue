<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            NATURALGLOW &copy;
            <span>{{ currYear }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  <style scoped>
  .container-fluid {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  </style>









