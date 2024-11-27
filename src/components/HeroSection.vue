<template>
  <section id="home" class="hero section">
    <div class="hero-bg">
      <img src="/assets/img/header/header3.png" alt="Background Image" class="w-full h-auto object-cover" />
    </div>
    <div class="container text-center mt-10">
      <!-- Carousel wrapper with Bootstrap classes -->
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <!-- Carousel Inner -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/img/images/kayumanis-version/CinnamonStick-6cm.png" class="d-block w-100 rounded-lg" alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="/assets/img/images/kayumanis-version/CinnamonStick-8cm.png" class="d-block w-100 rounded-lg" alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="/assets/img/images/kayumanis-version/Cinnamon-KF.png" class="d-block w-100 rounded-lg" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="/assets/img/images/kayumanis-version/Cinnamon-KA/KB.png" class="d-block w-100 rounded-lg" alt="Image 3">
          </div>
        </div>
        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroSection',
};
</script>
<style scoped>
.hero {
  position: relative;
}

.hero-bg {
  margin-bottom: 20px; /* Tambahkan margin di bawah gambar background untuk memberikan ruang */
}

.hero-bg img {
  width: 100%;
  height: 900px; /* Menambah tinggi gambar hero */
  /* object-fit: cover; */
}

.carousel-inner {
  border-radius: 15px;
  overflow: hidden;
  margin-top: 20px; /* Geser carousel sedikit ke bawah */
}

.carousel-item img {
  object-fit: cover;
  height: 400px; /* Tinggi gambar carousel */
  border-radius: 15px;
}

button.carousel-control-prev,
button.carousel-control-next {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

button.carousel-control-prev {
  left: 10px;
}

button.carousel-control-next {
  right: 10px;
}

button.carousel-control-prev:hover,
button.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

