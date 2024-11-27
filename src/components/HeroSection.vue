<template>
    <section id="home" class="hero section">
      <div class="hero-bg">
        <img src="/assets/img/header/header3.png" alt="Background Image" />
      </div>
      <div class="container text-center">
        <v-carousel style="height: 400px;">
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
      </div>
    </section>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    name: 'HeroSection',
    mounted() {
      AOS.init();
    },
  };
  </script>
  
  <style scoped>
  .hero {
    position: relative;
  }
  
  .hero-bg img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .v-carousel {
    max-width: 100%;
    margin-top: 20px;
  }
  </style>
  