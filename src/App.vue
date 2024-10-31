<template>
  <AppHeader />
  <main class="main">
    <HeroSection />
    <FeatureSection />
    <AboutSection />
    <ClientSection />
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import FeatureSection from "./components/FeatureSection.vue"; // Perbaikan nama file
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ClientSection from './components/ClientSection.vue';

export default {
  name: "App",
  components: {
    AppHeader,
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
