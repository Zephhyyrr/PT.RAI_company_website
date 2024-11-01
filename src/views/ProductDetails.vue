<template>
  <main class="main">
    <!-- ini tampilan sementara -->
    <HeroSection />
    <div class="container">
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
    </div>
  </main>
</template>

<script>
import allProducts from "../data/products.json";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.loadProduct();
  },
  watch: {
    "$route.params.id": "loadProduct",
  },
  methods: {
    loadProduct() {
      const productId = this.$route.params.id;
      this.product = allProducts.find((p) => p.id === productId);
    },
  },
  components: {
    HeroSection
  }
};
</script>

<style scoped>
/* Pastikan scoped untuk mengisolasi CSS ke komponen ini */
</style>
