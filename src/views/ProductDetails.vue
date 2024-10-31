<template>
  <main class="main">
    <h1>{{ product.title }}</h1>
    <h3>Pengenalan {{ product.title }}</h3>
    <ul>
      <li v-for="(value, key) in product.intro" :key="key">
        <strong>{{ key }}:</strong> {{ value }}
      </li>
    </ul>
    <h1>Manfaat {{ product.title }}</h1>
    <ul>
      <li v-for="(value, key) in product.benefit" :key="key">
        <strong>{{ key }}:</strong> {{ value }}
      </li>
    </ul>
  </main>
</template>

<script>
import allProducts from "../data/products.json";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
    };
  },
  created() {
    const productId = this.$route.params.id; // ambil ID dari URL
    this.product = allProducts.find((p) => p.id === productId);
  },
};
</script>

<style>
/* Kode CSS di sini jika diperlukan */
</style>
