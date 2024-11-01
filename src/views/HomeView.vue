<!-- Ini yang tadinya di app -->
<template>
  <main class="main">
    <HeroSection id="home"/>
    <AboutSection id="about"/>
    <ProductSection id="product" />
    <OrganizationSection id="organization"/>
    <ContactSection id="contact"/>
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProductSection from "../components/ProductSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import OrganizationSection from "@/components/OrganizationSection.vue";
export default {
  name: "HomeView",
  components: {
    HeroSection,
    AboutSection,
    ProductSection,
    OrganizationSection,
    ContactSection,
  },
};
</script>

<style>
/* Kode CSS di sini jika diperlukan */
</style>
