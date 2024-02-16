<template>
  <div class="outer">
    <h2>Privacy Policy</h2>
    <Tile>
      <!-- <ContentRendererMarkdown :value="htmlContent" v-if="htmlContent" /> -->
      {{ htmlContent }}
    </Tile>
  </div>
</template>

<script setup lang="ts">
import Tile from "../src/components/Tile.vue";
import markdownParser from "@nuxt/content/transformers/markdown";

const { data: htmlContent, error } = await useAsyncData(
  "htmlContent",
  () =>
    $fetch(`/api/privacy`, {
      method: "POST",
      baseURL: "https://whats-next.app",
    }),
  {}
);
</script>

<style scoped>
h2 {
  color: var(--accent-color);
  font-size: 36px;
  color: var(--primary-color);
}

.outer {
  margin: 92px 0;
}
</style>
