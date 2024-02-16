<template>
  <div class="outer">
    <h2>Our Apps</h2>
    <Tile
      :svg-path="'/images/white_transparent.png'"
      :title="'What\'s Next?'"
      :icon-size="'128px'"
    >
      <p>asfasdfasdfasdfaffs</p>
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
</style>
