<template>
  <section id="contact" class="contact section light-background">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>
        Contact us here
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i class="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p class="text-justify">Jl. Raya Nanggalo No. 28 A, Kp. Olo, Nanggalo District, Padang City, West Sumatera, 25173 - Indonesia </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div
            class="info-item d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="bi bi-whatsapp"></i>
            <h3>Chat on WhatsApp</h3>
            <p>
              <a href="https://wa.me/6282374635328" target="_blank"
                >+6282374635328 (Alno Ramalino)</a
              >
            </p>
            <p>
              <a href="https://wa.me/6281275341600" target="_blank"
                >+62628125341600 (Anjas)</a
              >
            </p>
          </div>
        </div>
        <!-- End Info Item -->

        <div class="col-lg-3 col-md-6">
          <a
            href="https://www.instagram.com/pt.rumpunalamindonesia/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            style="text-decoration: none; color: inherit"
          >
            <div
              class="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="600"
              style="cursor: pointer"
            >
              <i class="bi bi-instagram"></i>
              <h3>Follow Our Instagram</h3>
              <p>
                pt.rumpunalamindonesia</p>
            </div>
          </a>
        </div>
      </div>

      <div class="row gy-4 mt-1">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.33308816538693!2d100.36415625984897!3d-0.8969739504729131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1730645933044!5m2!1sid!2sid"
            frameborder="0"
            style="border: 0; width: 100%; height: 400px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <!-- End Google Maps -->

        <div class="col-lg-6">
          <form
            action="forms/contact.php"
            method="post"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <textarea
                  class="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>

                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
