<template>
  <div class="outer">
    <h2>Our Services</h2>
    <div class="tile-grid">
      <Tile
        :icon-class="'fa-puzzle-piece'"
        :background-color="'var(--text-color)'"
        :text-color="'var(--primary-color)'"
        :max-height="'166px'"
        :h3-content="'LLM Solutions'"
      />
      <Tile
        :background-color="'var(--text-color)'"
        :text-color="'var(--primary-color)'"
        :icon-class="'fa-desktop'"
        :max-height="'166px'"
        :h3-content="'Website'"
      >
      </Tile>
      <Tile
        :background-color="'var(--text-color)'"
        :text-color="'var(--primary-color)'"
        :icon-class="'fa-code'"
        :max-height="'166px'"
        :h3-content="'Software Development'"
      >
      </Tile>
      <Tile
        :background-color="'var(--text-color)'"
        :text-color="'var(--primary-color)'"
        :icon-class="'fa-mobile-alt'"
        :max-height="'166px'"
        :h3-content="'App Development'"
      >
      </Tile>
    </div>
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

.tile-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(320px, 1fr)
  ); /* responsive grid */
  grid-gap: 24px; /* space between tiles */
  margin: 0 auto; /* centering the grid */
}

.tile {
  margin-bottom: 24px; /* space between rows */
}

.outer {
  margin: 92px 0;
}
</style>
