<script setup lang="ts">
import { ref, nextTick } from "vue";

interface SectionRefs {
  [key: string]: Ref<HTMLElement | undefined>;
}

const about = ref<HTMLElement>();
const services = ref<HTMLElement>();
const apps = ref<HTMLElement>();

const sectionRefs: SectionRefs = {
  about,
  services,
  apps,
};

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <header>
    <nav>
      <div class="nav-container">
        <div class="logo">
          <a href="#">psquared</a>
        </div>
        <ul class="menu-items">
          <li>
            <a href="#" @click="scrollToSection('about')">About</a>
          </li>
          <li>
            <a href="#" @click="scrollToSection('services')">Services</a>
          </li>
          <li>
            <a href="#" @click="scrollToSection('apps')">What's Next?</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

header {
  background-color: var(--text-color);
  padding: 20px 0;
  text-align: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 0 20px;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
}

.logo a {
  color: var(--primary-color);
  font-family: "Neue Regrade";
  font-size: 1.6em;
  text-decoration: none; /* Ensure no underline for logo */
  @media (max-width: 500px) {
    font-size: 1.2em;
  }
}

nav .menu-items {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav .menu-items li {
  margin-right: 30px;
  @media (max-width: 500px) {
    margin-right: 12px;
    font-size: 12px;
  }
}

nav .menu-items li:last-child {
  margin-right: 0;
}

nav .menu-items li a {
  text-decoration: none;
  color: var(--primary-color);
  font-family: "Neue Regrade";
  font-weight: medium;
  font-size: 1.1em;
  position: relative;
  transition: color 0.3s ease;
  letter-spacing: 1.8px;
}

nav .menu-items li a:hover {
  color: #ffd700; /* Hover color */
}

nav .menu-items li a:hover::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  /* background-color: #fff; Underline color */
}

nav .menu-items li a:hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  /* background-color: #222; Background color for hover effect */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav .menu-items li a:hover::before,
nav .menu-items li a:hover::after {
  transform-origin: right;
}

nav .menu-items li a:hover::after {
  transform-origin: left;
  transition-delay: 0.1s;
}
</style>
