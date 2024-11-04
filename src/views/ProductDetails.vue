<template>
  <main class="main">

    <section id="product" class="hero section">
      <div class="hero-bg">
        <img :src="product.images[0]" alt="">
      </div>
      <div class="container text-center">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">Our Product <span>{{ product.title }}</span></h1>
          <p data-aos="fade-up" data-aos-delay="100">Perusahaan Exportir Rempah-Rempah dari Indonesia<br></p>
        </div>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/qMlgIQxdHO0?si=kq3DyP8VyWk8w5i-"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
        <!-- <img src="assets/img/hero-services-img.webp" class="img-fluid hero-img" alt="" data-aos="zoom-out"
                    data-aos-delay="300"> -->
      </div>
    </section>
    <!-- ini tampilan sementara -->

    <!-- Features Details Section -->
    <section
      v-for="(featureData, key, index) in featureSections"
      :key="key"
      :class="['features-details', 'section', index % 2 === 0 ? 'light-background' : '']"
    >
      <div class="container">
        <div class="row gy-4 justify-content-between features-item">
          <div
            :class="['col-lg-5', 'd-flex', 'align-items-center', index % 2 === 0 ? 'order-2 order-lg-1' : 'order-1 order-lg-2']"
            data-aos="fade-up"
            :data-aos-delay="index * 100 + 100"
          >
            <div :class="['content', index % 2 === 0 ? '' : 'white-container']">
              <h3>{{ formatTitle(key) }}</h3>
              <p v-if="typeof featureData === 'string'">{{ featureData }}</p>
              <ul v-else>
                <li v-for="(value, subKey) in featureData" :key="subKey">
                  <strong>{{ formatTitle(subKey) }}:</strong> {{ value }}
                </li>
              </ul>
            </div>
          </div>
          <div
            :class="['col-lg-6', index % 2 === 0 ? 'order-1 order-lg-2' : 'order-2 order-lg-1']"
            data-aos="fade-up"
            :data-aos-delay="index * 100 + 200"
          >
            <img :src="product.images[index % product.images.length]" class="img-fluid img-feature" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="features-details section light-background">
      <div class="container">
        <div class="row gy-4 justify-content-between features-item">
          <div class="content">
            <!-- <h3>{{ formatTitle(key) }}</h3> -->
            <p>{{ product.closing }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import products_en from "../data/products-en.json";
import products_cn from "../data/products-cn.json";
import products_id from "../data/products-id.json";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.loadProductEn();
  },
  computed: {
    featureSections() {
      // Filter featureSections agar hanya mencakup data tanpa title dan closing
      return Object.keys(this.product).reduce((sections, key) => {
        if (key !== 'id' && key !== 'images' && key !== 'title' && key !== 'closing' && key != 'video') {
          sections[key] = this.product[key];
        }
        return sections;
      }, {});
    }
  },
  methods: {
    loadProductEn() {
      const productId = this.$route.params.id;
      this.product = products_en.find((p) => p.id === productId);
    },
    loadProductCn() {
      const productId = this.$route.params.id;
      this.product = products_cn.find((p) => p.id === productId);
    },
    loadProductId() {
      const productId = this.$route.params.id;
      this.product = products_id.find((p) => p.id === productId);
    },
    formatTitle(key) {
      return key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
    },
    isMultiItem(featureData) {
      return typeof featureData === 'object' && Object.keys(featureData).length > 1;
    }
  }, 
  // kalau parameter berubah, ulang laod lagi 
  watch: {
    '$route.params.id': function() {
      this.loadProductEn();
    },
  },
};
</script>
<style scoped>
  .img-feature{
    width: 100%;
    height: auto;
  }
  .white-container{
    background-color: #ffffff !important;
  }
</style>