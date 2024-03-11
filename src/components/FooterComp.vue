<template>
    <div class="container-fluid fixed-bottom">
      <div id="app"></div>
      <di
      v class="row">
        <div class="col-12 text-center">
        </div>
      </di>
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
  .fixed-bottom {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  .social-link {
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
    font-size: 20px;
  }
  .fa-facebook {
    background-image: "https://i.postimg.cc/C1bGMXWJ/facebook.jpg"
  }
  .fa-linkedin {
    background-image: "https://i.postimg.cc/htxPYnxC/linked.jpg"
  }
  .fa-instagram {
    background-image: "https://i.postimg.cc/ZKPJPHhg/insta.jpg"
  }
  </style>









