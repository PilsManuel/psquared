<script lang="ts">
export default {
  props: {},
  methods: {},
};
</script>

<template>
  <div ref="about" class="about-wrapper">
    <p class="title">About psquared</p>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.title {
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px; /* Adjusted margin-bottom */
}

p {
  max-width: 80%;
  margin: 0 auto;
  line-height: 1.6;
}

p:last-child {
  margin-bottom: 0;
}

::selection {
  background-color: #ffd700;
  color: #333;
}
</style>
