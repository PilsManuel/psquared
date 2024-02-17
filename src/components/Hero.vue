<script lang="ts">
export default {
  props: {
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<template>
  <div class="img-wrapper">
    <img class="hero-image" src="/images/hero_image.jpg" :alt="alt" />
  </div>
</template>

<style scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #222;
  transition: transform 0.5s ease;
}
@media (min-width: 1050px) {
  .hero-image {
    max-height: 40vh;
  }
}
@media (max-width: 800px) {
  .hero-image {
    transform: scale(1.3);
    object-position: center;
  }
}

@media (max-width: 600px) {
  .hero-image {
    transform: scale(1.6);
    object-position: center;
  }
}
</style>
