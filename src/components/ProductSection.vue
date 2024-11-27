<template>
  <section id="product" class="features section">
    <div class="container section-title" data-aos="fade-up">
      <h2 style="color: white;">Product</h2>
      <p style="color: white;">Our products are sourced directly from spice farmers in Indonesia</p>
    </div>

    <div class="container">
      <div class="row">
        <!-- Iterasi produk -->
        <div
          class="col-lg-3 col-md-4 col-sm-6 mb-4"
          v-for="product in products"
          :key="product.id"
        >
          <router-link
            :to="`/product/${product.id}`"
            class="card h-100 shadow-card"
          >
            <img
              class="card-img-top"
              :src="product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/300x200'"
              :alt="product.title"
            />
            <div class="card-body text-center">
              <h5 class="card-title text-success fw-bold">{{ product.title }}</h5>
              <p class="card-text text-muted">
                {{ product.short }}
              </p>
              <p class="card-text text-muted">
                {{ product.details }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import products from "../data/products-en.json";

export default {
  name: "ProductSection",
  data() {
    return {
      products,
    };
  },
};
</script>
<style scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit; 
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.shadow-card {
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}
</style>
