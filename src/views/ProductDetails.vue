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
import products_en from "../data/products-en.json";
import products_cn from "../data/products-cn.json";
import products_id from "../data/products-id.json";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.loadProductEn();
  },
  watch: {
    "$route.params.id": "loadProduct", // Pantau perubahan pada ID di URL
  },
  methods: {
    loadProductEn() {
      const productId = this.$route.params.id;
      this.product = products_en.find((p) => p.id === productId);
    },
    loadProductCn() {
      const productId = this.$route.params.id;
      this.product = products_cn.find((p) => p.id === productId);
    },
    loadProductId() {
      const productId = this.$route.params.id;
      this.product = products_id.find((p) => p.id === productId);
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
