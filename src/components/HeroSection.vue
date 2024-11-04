<template>
    <section id="home" class="hero section">
        <div class="hero-bg ">
            <img src="assets/img/rempah_background.jpg" alt="">
        </div>
        <div class="container text-center">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1 data-aos="fade-up">Welcome to <span>Rumpun Alam Indonesia</span></h1>
                <p data-aos="fade-up" data-aos-delay="100">Perusahaan Exportir Rempah-Rempah dari Indonesia<br></p>
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                </div>
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