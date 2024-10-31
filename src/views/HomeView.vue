<!-- Ini yang tadinya di app -->
<template>
  <main class="main">
    <HeroSection />
    <FeatureSection />
    <AboutSection />
    <ProductSection />
    <ContactSection />
  </main>
</template>

<script>
import FeatureSection from "../components/FeatureSection.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProductSection from "./components/ProductSection.vue";
import ClientSection from "../components/ClientSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    FeatureSection,
    AboutSection,
    ProductSection,
    ClientSection,
  },
};
</script>

<style>
/* Kode CSS di sini jika diperlukan */
</style>
