<template>
  <div @click="goBack">
    <nuxt-link to="/" class="back-button">
      <font-awesome-icon
        id="back-arrow"
        :icon="['fas', 'arrow-left']"
      ></font-awesome-icon>
      <p>Back</p>
    </nuxt-link>
  </div>

  <div class="outer">
    <div class="inner">
      <h2>Terms and Conditions</h2>
      <Tile>
        <div v-html="htmlContent"></div>
      </Tile>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Tile from "../src/components/Tile.vue";
import { marked } from "marked";
import { nextTick } from "vue";

let htmlContent = "loading...";
let loading = true;
const goBack = () => {
  window.history.back();
};

await useAsyncData(
  "markdownContent",
  async () => {
    try {
      const response = await $fetch(`/api/terms`, {
        method: "POST",
        baseURL: "http://www.whats-next.app",
        body: { lang: "en" },
      });
      htmlContent = marked(response);
      await nextTick();
      loading = false;
      return response;
    } catch (e) {
      console.error("Error fetching privacy policy:", e);
      return null;
    }
  },
  {}
);
</script>

<style scoped>
h2 {
  color: var(--accent-color);
  font-size: 36px;
  color: var(--primary-color);
  text-align: left;
}

.outer {
  margin: 46px auto;

  width: 1040px;
  max-width: 100%;
}

.inner {
  margin: 0 24px;
}

.back-button {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 24px 0 0px 24px;
  text-decoration: none;
  width: fit-content;

  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: var(--accent-color);
}

#back-arrow {
  margin-right: 8px;
  margin-top: -2px;
}
</style>
