<script lang="ts">
import Subscription from "./src/components/Subscription.vue";
import HeroImage from "./src/components/Hero.vue";
import Navbar from "./src/components/Navbar.vue";
import About from "./src/components/About.vue";

export default {
  components: {
    Subscription,
    HeroImage,
    Navbar,
    About,
  },
  data() {
    return {
      altText: "Hero Image",
    };
  },
};
</script>

<template>
  <div ref="home" class="body">
    <Navbar />
    <HeroImage alt="Hero Image" />
    <About />
    <Subscription />
  </div>
</template>

<style>
body,
ul {
  margin: 0;
  padding: 0;
  background-color: #222;
}
</style>
