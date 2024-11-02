<template>
    <section id="product" class="features section">

        <div class="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
                            <img :src="product.image" :alt="product.title" class="img-fluid mt-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- /Features Section -->
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