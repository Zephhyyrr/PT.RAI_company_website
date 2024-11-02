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
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    },
    initGlightbox() {
      GLightbox({
        selector: '.glightbox',
      });
    },
    initSwiper() {
  document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
    const configElement = swiperElement.querySelector(".swiper-config");

    if (configElement) { // Check if .swiper-config exists
      const config = JSON.parse(configElement.innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        this.initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    } else {
      console.warn("Swiper config element not found for:", swiperElement);
    }
  });
},

    initSwiperWithCustomPagination(swiperElement, config) {
      // Custom swiper initialization logic here if needed
      new Swiper(swiperElement, config);
    },
    handleHashScroll() {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    },
  },
  mounted() {
    this.aosInit();
    this.initGlightbox();
    this.initSwiper();
    this.handleHashScroll();

    window.addEventListener("load", this.handleHashScroll);
    window.addEventListener("load", this.initSwiper);
  },
};

</script>

<style></style>
