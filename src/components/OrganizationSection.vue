<template>
  <section id="organization" class="testimonials section light-background">
    <div class="container section-title" data-aos="fade-up">
      <h2>Team Member</h2>
      <p>Our Team Member at PT. Rumpun Alam Indonesia</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper init-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(organization, index) in organizations" :key="index">
            <div class="testimonial-item" :data-index="index">
              <div class="stars">
                <!-- <i class="bi bi-star-fill" v-for="star in 5" :key="star"></i> -->
              </div>
              <div class="profile pb-2">
                <img :src="organization.image" class="testimonial-img" alt="">
                <h3>{{ organization.name }}</h3>
                <h4>{{ organization.position }}</h4>
              </div>
              <!-- <p>{{ organization.text }}</p> -->
            </div>
          </div><!-- End testimonial item -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'OrganizationSection',
  data() {
    return {
      organizations: [
        {
          index:"1",
          // text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
          image: "assets/img/testimonials/testimonials-1.jpg",
          name: "Alno Ramalino",
          position: "Ceo"
        },
        {
          // text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
          image: "assets/img/testimonials/testimonials-2.jpg",
          name: "Anjas Nurheri",
          position: "Managing Director"
        },
        {
          // text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
          image: "assets/img/testimonials/testimonials-4.jpg",
          name: "Mufrizal Piliang",
          position: "COO (Chieft Operating Officer)"
        },
        {
          // text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
          image: "assets/img/testimonials/testimonials-5.jpg",
          name: "Defni",
          position: "Managing IT Developer"
        },
        {
          // text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
          image: "assets/img/testimonials/testimonials-5.jpg",
          name: "Firman Ardiansyah",
          position: "Staff IT Desk"
        },
        {
          // text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
          image: "assets/img/testimonials/testimonials-5.jpg",
          name: "Aisyah avini",
          position: "Staff Media Sosial & Kreatif"
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperConfig = {
        loop: true, // Set to true to enable looping
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false, // Continue autoplay after interaction
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
        },
      };

      // Initialize Swiper after DOM has updated
      new Swiper('.init-swiper', swiperConfig);
    });
  }
}
</script>

<style>
/* Add your styles here */
</style>
