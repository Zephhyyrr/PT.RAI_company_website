<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center"
    >
      <router-link to="/" class="logo d-flex align-items-center me-auto">
        <!-- <img src="assets/img/logo.png" alt="QuickStart Logo" /> -->
        <h1 class="sitename">Rumpun Alam Indonesia</h1>
      </router-link>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ active: isActive('home') }"
              @click.prevent="scrollTo('home')"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="#"
              :class="{ active: isActive('about') }"
              @click.prevent="scrollTo('about')"
              >About</router-link
            >
          </li>
          <li class="dropdown">
            <router-link
              to="#"
              :class="{ active: isActive('product') }"
              @click.prevent="scrollTo('product')"
            >
              Product
              <i class="bi bi-chevron-down toggle-dropdown"></i>
            </router-link>
            <ul>
              <li v-for="value in products" :key="value.id">
                <router-link :to="{ path: '/product/' + value.id }">
                  {{ value.title }}
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="#"
              :class="{ active: isActive('organization') }"
              @click.prevent="scrollTo('organization')"
              >Organization</router-link
            >
          </li>
          <li>
            <router-link
              to="#"
              :class="{ active: isActive('contact') }"
              @click.prevent="scrollTo('contact')"
              >Contact</router-link
            >
          </li>
        </ul>
        <i
          class="mobile-nav-toggle d-xl-none bi bi-list"
          @click="toggleMobileMenu"
        ></i>
      </nav>
    </div>
  </header>
</template>

<script>
import products from "../data/products.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AppHeader",
  data() {
    return {
      products,
      activeSection: "home",
    };
  },
  mounted() {
    AOS.init();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTo(sectionId) {
      this.setActive(sectionId);
      this.$nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    handleScroll() {
      const sections = ["home", "about", "product","organization", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight) {
            this.activeSection = section;
          }
        }
      });
    },
    isActive(section) {
      return this.activeSection === section;
    },
    setActive(section) {
      this.activeSection = section;
    },
    toggleMobileMenu() {
      const navMenu = document.getElementById("navmenu");
      navMenu.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
/* Custom styles for Header */
</style>
