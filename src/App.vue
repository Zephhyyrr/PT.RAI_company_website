<template>
  <AppHeader />
  <main class="main">
    <HeroSection />
    <FeatureSection />
    <AboutSection />
    <ProductSection />
    <ContactSection />
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import FeatureSection from "./components/FeatureSection.vue"; // Perbaikan nama file
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProductSection from "./components/ProductSection.vue"
import ContactSection from "./components/ContactSection.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    HeroSection,
    FeatureSection,
    AboutSection,
    ProductSection,
    ContactSection,
  },
};
</script>

<style>
/* Kode CSS di sini jika diperlukan */
</style>
