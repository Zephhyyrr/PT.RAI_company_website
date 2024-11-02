<template>
    <section id="home" class="hero section">
        <div class="hero-bg">
            <img src="assets/img/rempah_background.jpg" alt="">
        </div>
        <div class="container text-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1 data-aos="fade-up">Welcome to <span>Rumpun Alam Indonesia</span></h1>
                <p data-aos="fade-up" data-aos-delay="100">Perusahaan Exportir Rempah-Rempah dari Indonesia<br></p>
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                    <!-- <a href="#about" class="btn-get-started">Get Started</a> -->
                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                        class="glightbox btn-watch-video d-flex align-items-center">
                        <i class="bi bi-play-circle"></i><span>Watch Our Video</span>
                    </a>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qMlgIQxdHO0?si=kq3DyP8VyWk8w5i-"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <!-- <img src="assets/img/hero-services-img.webp" class="img-fluid hero-img" alt="" data-aos="zoom-out"
                    data-aos-delay="300"> -->
            </div>
        </div>
    </section>
</template>

<script>
    import AOS from "aos";
    import "aos/dist/aos.css";

    export default {
        name: "HeroSection",
        mounted() {
            AOS.init();
        },
    };
</script>

<style scoped>
    /* addstyl */
</style>