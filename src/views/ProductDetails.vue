<template>
  <main class="main">
    <!-- Features Details Section -->
    <section class="features-details section light-background">
      <div class="container"  style="margin-top: 100px;">
        <div class="row gy-4 justify-content-center">
          <!-- Carousel for Images -->
          <div class="col-lg-8" data-aos="fade-up">
            <v-carousel height="400">
              <v-carousel-item
                v-for="(image, index) in product.images"
                :key="index"
              >
                <img :src="image" class="img-fluid img-feature" alt="Feature Image" />
              </v-carousel-item>
            </v-carousel>
          </div>

          <!-- Feature Details -->
          <div class="col-lg-8" data-aos="fade-up">
            <div
              v-for="(featureData, key) in featureSections"
              :key="key"
              class="feature-item text-center mb-5"
            >
              <div class="content mt-4">
                <h3>{{ formatTitle(key) }}</h3>
                <p v-if="typeof featureData === 'string'">{{ featureData }}</p>
                <ul v-else>
                  <li v-for="(value, subKey) in featureData" :key="subKey">
                    <strong>{{ formatTitle(subKey) }}:</strong> {{ value }}
                  </li>
                </ul>
              </div>
            </div>
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
      // Memfilter hanya data fitur yang relevan
      return Object.keys(this.product).reduce((sections, key) => {
        if (
          key !== "id" &&
          key !== "images" &&
          key !== "title" &&
          key !== "closing" &&
          key !== "short" &&
          key !== "video"
        ) {
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
    }
  },
  watch: {
    "$route.params.id": function () {
      this.loadProductEn();
    }
  }
};
</script>
<style scoped>
.features-details {
  padding: 4rem 0;
}
.img-feature {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
.feature-item {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 2rem;
}
.feature-item:last-child {
  border-bottom: none;
}
.content {
  padding: 1rem;
  border-radius: 8px;
}
.white-container {
  background-color: #ffffff !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.section {
  text-align: center;
}
.light-background {
  background-color: #f9f9f9;
}
</style>

