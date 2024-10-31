<!-- src/components/Header.vue -->
<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center"
    >
      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo.png" alt="" />
        <h1 class="sitename">QuickStart</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/#hero" class="active">Home</router-link></li>
          <li><router-link to="/#about">About</router-link></li>
          <li><router-link to="/#features">Product</router-link></li>
          <li><router-link to="/#services">Contact</router-link></li>
          <li class="dropdown">
            <router-link to=""
              ><span>Products</span>
              <i class="bi bi-chevron-down toggle-dropdown"></i
            ></router-link>
            <ul>
              <li v-for="value in products" :key="value.id">
                <router-link :to="{ path: '/product/' + value.id }">
                  {{ value.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>
</template>

<script>
import products from "../data/products.json";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css";

export default {
  name: "AppHeader",
  data() {
    return {
      products,
    };
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
};
</script>

<style scoped>
/* Gaya khusus untuk Header */
</style>
