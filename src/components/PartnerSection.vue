<template>
  <section id="organization" class="clients section light-background">
    <div class="container" data-aos="fade-up" style="margin-top: 50px;">
      <div class="row gy-4 justify-content-center">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="col-xl-2 col-md-3 col-6 client-logo"
        >
          <img :src="client.imgSrc" class="img-fluid" :alt="client.altText" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnerSection",
  data() {
    return {
      clients: [
        { imgSrc: "assets/img/partner/meratus.png", altText: "Meratus Group" },
        { imgSrc: "assets/img/partner/fsa.png", altText: "Client 2" },
        { imgSrc: "assets/img/partner/sucofindo.png", altText: "Client 3" },
      ],
    };
  },
};
</script>

<style scoped>
.client-logo img {
  max-width: 100%;
  height: auto;
}

.row {
  display: flex;
  justify-content: center; 
}

.client-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 640px) {
  .client-logo img {
    padding: 20px;
  }
}
</style>
