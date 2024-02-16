<template>
  <div class="outer">
    <h2>Our Apps</h2>
    <Tile
      :svg-path="'/images/white_transparent.png'"
      :title="'What\'s Next?'"
      :icon-size="'140px'"
    >
      <div class="top-questions">
        <p>Feeling indecisive?</p>
        <p>Looking for adventure?</p>
      </div>
      <p style="text-align: left">
        “What’s Next?” is your go-to for spur-of-the-moment suggestions. At the
        tap of a button, our AI takes into account your location and personal
        preferences to curate a list of activities and live events happening
        around you.
      </p>
      <p style="text-align: left">
        Whether it's a cozy book café corner, a vibrant street art exhibition,
        or a live concert just a block away, our app harnesses the power of GPT
        to ensure you're only a question away from your next memorable
        experience. So whenever you find yourself pondering, "What's next?" —
        we've got the answer.
      </p>
      <h3>Coming soon!</h3>
      <div class="store-icons">
        <img src="/images/google-play-badge.png" alt="" />
        <img id="app-store-icon" src="/images/ios-badge.svg" alt="" />
      </div>
    </Tile>
  </div>
</template>

<script lang="ts">
import Tile from "./Tile.vue";
export default {
  components: {
    Tile,
  },
};
</script>

<style scoped>
h2 {
  color: var(--accent-color);
  font-size: 36px;
  color: var(--primary-color);
}
h3 {
  font-size: 26px;
}

.outer {
  margin: 92px 0;
}

.top-questions {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.top-questions p {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 0px;
}

.store-icons img {
  width: 240px;
  /* margin-top: 8px; */
}

.store-icons {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 18px;
  filter: grayscale(100%);
  opacity: 0.4;
}

#app-store-icon {
  width: 194px;
}
</style>
