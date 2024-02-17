<template>
  <div
    class="tile"
    :class="{ 'is-transparent': isTransparent }"
    :style="{
      backgroundColor: backgroundColor,
      color: textColor,
      maxHeight: maxHeight,
    }"
    @mouseover="toggleHoverState(true)"
    @mouseleave="toggleHoverState(false)"
  >
    <div class="tile-header" v-if="iconClass || svgPath || title">
      <!-- Conditionally render an icon or an svg -->
      <font-awesome-icon
        v-if="iconClass"
        id="icon"
        :icon="iconClass"
        :style="{
          fontSize: iconSize,
          color: iconHovered ? onHoverIconColor : iconColor,
        }"
      />
      <img
        v-else-if="svgPath"
        :src="svgPath"
        id="image"
        :style="{ width: iconSize, height: iconSize, fill: iconColor }"
        alt="SVG Icon"
      />
      <span v-else class="tile-title" :style="{ fontSize: titleFontSize }">
        {{ title }}
      </span>
    </div>
    <div class="tile-content">
      <h3
        :style="{
          color: iconHovered ? onHoverIconColor : iconColor,
        }"
        v-if="h3Content"
      >
        {{ h3Content }}
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    iconClass: String,
    svgPath: String,
    h3Content: String,
    iconSize: {
      type: String,
      default: "64px",
    },
    backgroundColor: {
      type: String,
      default: "var(--primary-color)",
    },
    textColor: {
      type: String,
      default: "var(--text-color)",
    },
    titleFontSize: {
      type: String,
      default: "48px",
    },
    isTransparent: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: String,
      default: "none",
    },
    iconColor: {
      type: String,
      default: "var(--primary-color)",
    },
    onHoverIconColor: {
      type: String,
      default: "var(--accent-color)",
    },
  },
  data() {
    return {
      iconHovered: false,
    };
  },
  methods: {
    toggleHoverState(isHovered: boolean) {
      this.iconHovered = isHovered;
    },
  },
};
</script>
<style scoped>
.tile {
  display: flex;
  flex-direction: row;
  padding: 24px;
  margin-bottom: 24px; /* space between rows */
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}

#icon,
h3 {
  transition: color 0.4s;
}

.tile-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.tile-title {
  font-weight: bold;
  flex: 1;
}

.is-transparent {
  background-color: transparent !important;
  box-shadow: none !important;
  .tile-title {
    color: var(--primary-color);
  }
  .tile-content {
    color: var(--primary-color);
  }
}

#image {
  transform: scale(3);
  filter: invert(100%) invert(5%) sepia(5%) saturate(191%) hue-rotate(315deg)
    brightness(97%) contrast(80%);
}

h3 {
  font-size: 26px;
}

.tile-content {
  flex: 2;
  word-break: break-word;
  padding: 1em;
}

.tile-hovered ::v-deep h3 {
  color: var(--hover-color) !important;
}
</style>
