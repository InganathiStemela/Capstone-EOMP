<template>
    <nav class="navbar navbar-expand-lg sticky-top bg-transparent">
  <div class="container-fluid">
    <router-link to="/">
        <img class="img-fluid" src="https://i.postimg.cc/j2LTWsFT/Black-Beige-Minimalist-Elegant-Monogram-Initials-Logo.png" width="50px" height="50px" alt="logo">
      </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/products">PRODUCTS</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/checkout">CHECKOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">ADMIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register">REGISTER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">LOGIN<i class="ri-login-circle-fill"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>