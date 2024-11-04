<template>
    <section id="product" class="features section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Produk</h2>
        <p>Our products are sourced directly from spice farmers in Indonesia</p>
      </div>
  
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center">
            <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
              <li
                v-for="(product, index) in products"
                :key="product.id"
                class="nav-item"
                :class="{ selected: selectedProductId === product.id }"
                @click="selectProduct(product.id)"
              >
                <a
                  class="nav-link"
                  style="background-color: white"
                  :class="{ 'active show': selectedProductId === product.id }"
                  data-bs-toggle="tab"
                  :data-bs-target="`#features-tab-${index + 1}`"
                >
                  <div>
                    <h4>{{ product.title }}</h4>
                    <p>{{ product.description }}</p>
                  </div>
                </a>
              </li>
            </ul>
        
          </div>
  
          <div class="col-lg-6">
            <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div
                v-for="(product, index) in products"
                :key="product.id"
                class="tab-pane"
                :class="{ 'active show': selectedProductId === product.id }"
                :id="`features-tab-${index + 1}`"
              >
                <div
                  :id="`mediaCarousel-${product.id}`"
                  class="carousel slide"
                  data-bs-ride="carousel"
                  @slid="pauseVideo(product.id)"
                >
                  <div class="carousel-inner">
                    <div
                      v-for="(image, imageIndex) in product.images"
                      :key="`image-${imageIndex}`"
                      class="carousel-item"
                      :class="{ active: imageIndex === 0 }"
                    >
                      <img :src="image" :alt="product.title" class="d-block w-100" />
                    </div>
  
                    <div
                      v-for="(video, videoIndex) in product.video"
                      :key="`video-${videoIndex}`"
                      class="carousel-item"
                      :class="{ active: product.images.length === 0 && videoIndex === 0 }"
                    >
                      <video :id="`video-${product.id}-${videoIndex}`" class="d-block w-100" controls>
                        <source :src="video" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
  
                  <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="`#mediaCarousel-${product.id}`"
                    data-bs-slide="prev"
                    @click="moveCarousel(product.id, -1)"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    :data-bs-target="`#mediaCarousel-${product.id}`"
                    data-bs-slide="next"
                    @click="moveCarousel(product.id, 1)"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
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
        selectedProductId: products.length > 0 ? products[0].id : null,
      };
    },
    methods: {
      selectProduct(productId) {
        this.selectedProductId = productId;
      },
      moveCarousel(productId, direction) {
        const carouselElement = document.querySelector(`#mediaCarousel-${productId}`);
        // eslint-disable-next-line no-undef
        const carouselInstance = new bootstrap.Carousel(carouselElement);
        
        this.pauseVideo(productId);
        
        if (direction === 1) {
          carouselInstance.next();
        } else {
          carouselInstance.prev();
        }
      },
      pauseVideo(productId) {
        const videoElements = document.querySelectorAll(`#mediaCarousel-${productId} video`);
        videoElements.forEach(video => {
          video.pause();
        });
      },
    },
    mounted() {
      console.log(this.products);
    },
  };
  </script>
  
  <style scoped>
  .nav-item.selected {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-control-prev {
    left: 10px;
  }
  
  .carousel-control-next {
    right: 10px;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-control-prev-icon:after,
  .carousel-control-next-icon:after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background-color: #fff; 
  }
  
  .carousel-control-prev-icon:after {
    transform: rotate(45deg); 
  }
  
  .carousel-control-next-icon:after {
    transform: rotate(-45deg); 
  }
  </style>
  