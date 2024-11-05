<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center"
    >
      <router-link to="/" class="logo d-flex align-items-center me-auto">
        <img src="assets/img/logo/favicon.png" alt="Rumpun Alam Indonesia Logo" class="img-fluid" />
        <h1 class="sitename">Rumpun Alam Indonesia</h1>
      </router-link>

      <nav id="navmenu" class="navmenu fs-5">
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
import products from "../data/products-en.json";
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

    this.setActiveSectionOnRoute();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route() {
      this.setActiveSectionOnRoute();
    },
  },
  methods: {
    scrollTo(sectionId) {
      if (this.$route.path.includes("/product/")) {
        // Redirect to home page and scroll after navigation
        this.$router.push("/").then(() => {
          this.setActive(sectionId);
          this.$nextTick(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          });
        });
      } else {
        // Just scroll on the current page
        this.setActive(sectionId);
        this.$nextTick(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    },
    handleScroll() {
      const sections = ["home", "about", "product", "organization", "contact"];

      if (window.scrollY === 0) {
        this.activeSection = "home";
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight) {
            this.activeSection = section;
          }
        }
      });
      // Close mobile menu on scroll
      if (document.body.classList.contains("mobile-nav-active")) {
        this.toggleMobileMenu();
      }
    },
    isActive(section) {
      return this.activeSection === section;
    },
    setActive(section) {
      this.activeSection = section;
    },
    setActiveSectionOnRoute() {
      // Set 'product' as activeSection if route path matches a product detail page
      if (this.$route.path.includes("/product/")) {
        this.activeSection = "product";
      }
    },
    toggleMobileMenu() {
      document.body.classList.toggle("mobile-nav-active");

      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    },
  },
};
</script>


<style scoped>
</style>
