<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="'/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>

  <div class="container-">
    <RouterView></RouterView>
  </div>
</template>

<style>
  html {
    font-size: 16px;
    font-family: 'Gill Sans', sans-serif;
  }

  nav {
    width: 100%;
    height: 45px;
    background: lightblue; 
    margin: 0 auto;
    text-align: center;
    padding-top: 25px;
  }

  nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: black;
    font-weight: 900;
    font-size: 16px;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .container h1 {
    text-align: center;
    font-size: 48px;
    max-width: 700px;
    margin: 40px auto 40px;
  }

  .container h3 {
    width: 700px;
    margin: 20px auto 20px;
  }

  .container p {
    width: 700px;
    font-size: 18px;
    margin: 20px auto 20px;
  }

  .container img {
    display: block;
    max-width: 700px;
    width: 100%;
    margin: 20px auto 20px;
  }

</style>
