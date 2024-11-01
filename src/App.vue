<template>
  <!-- Si header masih disini, soalnya tiap halaman masih pake header kan? -->
  <AppHeader />
  <div id="app">
    <!-- App tadi kupindahin ke views/HomeView.vue -->
    <!-- ini pake router view, soalnya dia bakal ganti ganti nantinya -->
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style></style>
