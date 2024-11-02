<template>
  <main class="main">

    <section id="home" class="hero section">
        <div class="hero-bg">
            <img src="/assets/img/rempah_background.jpg" alt="">
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
    <section id="features-details" class="features-details section light-background">

      <div class="container">

        <div class="row gy-4 justify-content-between features-item">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/features-1.jpg" class="img-fluid" alt="">
          </div>

          <div class="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Corporis temporibus maiores provident</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <a href="#" class="btn more-btn">Learn More</a>
            </div>
          </div>

        </div><!-- Features Item -->

        <div class="row gy-4 justify-content-between features-item">

          <div class="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">

            <div class="content">
              <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
              <p>
                Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares
              </p>
              <ul>
                <li><i class="bi bi-easel flex-shrink-0"></i> Et corporis ea eveniet ducimus.</li>
                <li><i class="bi bi-patch-check flex-shrink-0"></i> Exercitationem dolorem sapiente.</li>
                <li><i class="bi bi-brightness-high flex-shrink-0"></i> Veniam quia modi magnam.</li>
              </ul>
              <p></p>
              <a href="#" class="btn more-btn">Learn More</a>
            </div>

          </div>

          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/features-2.jpg" class="img-fluid" alt="">
          </div>

        </div><!-- Features Item -->

      </div>

    </section><!-- /Features Details Section -->
    <div class="container">
      <h1>{{ product.title }}</h1>
      <h3>Pengenalan {{ product.title }}</h3>
      <ul>
        <li v-for="(value, key) in product.intro" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </li>
      </ul>
      <h1>Manfaat {{ product.title }}</h1>
      <ul>
        <li v-for="(value, key) in product.benefit" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </li>
      </ul>
    </div>
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
        product: {},
      };
    },
    created() {
      this.loadProductEn();
    },
    watch: {
      "$route.params.id": "loadProduct",
    },
    methods: {
      loadProductEn() {
        const productId = this.$route.params.id;
        this.product = products_en.find((p) => p.id === productId);
      },
      loadProductCn() {
        const productId = this.$route.params.id;
        this.product = products_cn.find((p) => p.id === productId);
        console.log("China Product:", this.product);
      },
      loadProductId() {
        const productId = this.$route.params.id;
        this.product = products_id.find((p) => p.id === productId);
      },
    },
    
  };
</script>

<style scoped>
  /* Pastikan scoped untuk mengisolasi CSS ke komponen ini */
</style>