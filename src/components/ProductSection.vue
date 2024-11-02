<template>
    <section id="product" class="features section">
        <div class="container section-title" data-aos="fade-up">
            <h2>Produk</h2>
            <p>Produk kami bersumber langsung dari petani rempah-rempah di Indonesia</p>
        </div>

        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5 d-flex align-items-center">
                    <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                        <li v-for="(product, index) in products" :key="product.id" class="nav-item">
                            <a class="nav-link" style="background-color: white;" :class="{ 'active show': index === 0 }"
                                data-bs-toggle="tab" :data-bs-target="`#features-tab-${index + 1}`">
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
                        <div v-for="(product, index) in products" :key="product.id" class="tab-pane fade"
                            :class="{ 'active show': index === 0 }" :id="`features-tab-${index + 1}`">
                            
                            <!-- Carousel -->
                            <div :id="`mediaCarousel-${product.id}`" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div v-for="(media, mediaIndex) in product.media" :key="mediaIndex" 
                                        class="carousel-item" :class="{ 'active': mediaIndex === 0 }">
                                        
                                        <!-- Check if media is an image -->
                                        <template v-if="media.type === 'image'">
                                            <img :src="media.src" :alt="product.title" class="d-block w-100">
                                        </template>
                                        
                                        <!-- Check if media is a video -->
                                        <template v-else-if="media.type === 'video'">
                                            <video class="d-block w-100" controls>
                                                <source :src="media.src" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        </template>
                                    </div>
                                </div>

                                <!-- Carousel controls -->
                                <button class="carousel-control-prev" type="button" :data-bs-target="`#mediaCarousel-${product.id}`" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" :data-bs-target="`#mediaCarousel-${product.id}`" data-bs-slide="next">
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
import products from "@/data/products-en.json";

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
    .services .service-item {
        background-color: var(--surface-color);
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
        height: 100%;
        padding: 30px;
        transition: 0.3s;
        border-radius: 10px;
        display: flex;
    }
</style>
