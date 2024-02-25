<script lang="ts">
import Subscription from "../src/components/Subscription.vue";
import HeroImage from "../src/components/Hero.vue";
import Navbar from "../src/components/Navbar.vue";
import About from "../src/components/About.vue";
import PsquaredFooter from "../src/components/Footer.vue";
import Tile from "../src/components/Tile.vue";
import Services from "../src/components/Services.vue";
import Apps from "../src/components/Apps.vue";

export default {
  components: {
    Subscription,
    HeroImage,
    Navbar,
    About,
    PsquaredFooter,
    Tile,
    Services,
    Apps,
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
    <div class="content">
      <div class="wrapper" id="about-inner">
        <Tile id="about" :title="'Who are we?'"><About /></Tile>
        <Services id="services" />
        <Apps id="apps" />

        <Tile :title="'Subscribe'"> <Subscription /> </Tile>
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
}
::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.content {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  width: 1040px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
}
.wrapper {
  margin: 0 24px;
  margin-bottom: 64px;
  @media (max-width: 360px) {
    margin: 0 8px;
  }
}

#about ::v-deep .tile {
  background-color: aliceblue;
}
</style>
