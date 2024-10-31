<!-- Ini yang tadinya di app -->
<template>
  <main class="main">
    <HeroSection />
    <FeatureSection />
    <AboutSection />
    <ClientSection />
  </main>
</template>

<script>
import FeatureSection from "../components/FeatureSection.vue";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ClientSection from "../components/ClientSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    FeatureSection,
    AboutSection,
    ClientSection,
  },
};
</script>

<style>
/* Kode CSS di sini jika diperlukan */
</style>
