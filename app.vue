<script lang="ts">
import Subscription from "./src/components/Subscription.vue";
import HeroImage from "./src/components/Hero.vue";
import Navbar from "./src/components/Navbar.vue";
import About from "./src/components/About.vue";
import PsquaredFooter from "./src/components/Footer.vue";

export default {
  components: {
    Subscription,
    HeroImage,
    Navbar,
    About,
    PsquaredFooter,
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
    <div class="tiles">
      <div class="tile">
        <About />
      </div>
      <div class="tile">
        <Subscription />
      </div>
    </div>
    <PsquaredFooter />
  </div>
</template>

<style>
body,
ul {
  margin: 0;
  padding: 0;
  background-color: #222;
}
/* Hide scrollbar for Chrome, Safari, and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.tiles {
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;
  display: flex;
}
.tile {
  background-color: #999;
  color: #333;
  margin: 50px auto 50px; /* Added margin-bottom */
  text-align: center;
  width: 1040px;
  max-width: 100%;
  /* max-height: 40vh; */
  overflow: auto;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 50px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif; /* Changed font */
}
</style>
