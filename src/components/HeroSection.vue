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
          <div v-for="(item, index) in items" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <a :href="item.href" target="_blank" class="d-block w-100">
              <!-- Check if it's a YouTube link -->
              <template v-if="item.href">
                <!-- Embed YouTube video -->
                <iframe
                  :src="'https://www.youtube.com/embed/' + getYouTubeVideoId(item.href)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="d-block w-100"
                  style="height: 400px; border-radius: 15px;"
                ></iframe>
              </template>
              <!-- If it's an image, display it -->
              <template v-else>
                <img :src="item.src" class="d-block w-100 rounded-lg" :alt="'Image ' + (index + 1)" />
              </template>
            </a>
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
  data() {
    return {
      // Array combining images and YouTube links
      items: [
        { src: '/assets/img/images/kayumanis-version/CinnamonStick-8cm.png' }, // Image 2
        { src: '/assets/img/images/kayumanis-version/Cinnamon-2.png' }, // Image 1
        { src: '/assets/img/images/kayumanis-version/Cinnamon-KF.png' },      // Image 3
        { src: '/assets/img/images/kayumanis-version/Cinnamon-KA/KB.png' },    // Image 4
        { href: 'https://youtube.com/shorts/D0ukIEVJ5BQ?si=0zLi_6n0bOSETb2j' }, // YouTube link 1
        { href: 'https://youtube.com/shorts/hvtvDwcObiE?si=L5pZVeVQoksDrXRs' }  // YouTube link 2
      ]
    };
  },
  methods: {
  getYouTubeVideoId(url) {
    const shortUrlMatch = url.match(/(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    if (shortUrlMatch) {
      return shortUrlMatch[1]; 
    }
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/)([a-zA-Z0-9_-]{11}))/);
    return videoIdMatch && videoIdMatch[1];
  }
}
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
