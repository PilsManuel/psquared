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
  width: 100vw;
  height: auto;
  object-fit: cover;
  background-color: #222;
}
</style>
