<script lang="ts">
export default {
  methods: {
    // scrollToSection(refName) {
    //   // does not work yet as component based refs
    //   this.$nextTick(() => {
    //     const element = this.$refs[refName];
    //     if (element) {
    //       element.scrollIntoView({ behavior: "smooth" });
    //     }
    //   });
    // },
  },
};
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
            <a href="#" @click="scrollToSection('Next')">What's Next?</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

header {
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 0 20px;
}

.logo a {
  color: #fff;
  font-family: "Poppins", "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.6em;
  text-decoration: none; /* Ensure no underline for logo */
}

nav .menu-items {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav .menu-items li {
  margin-right: 30px;
}

nav .menu-items li:last-child {
  margin-right: 0;
}

nav .menu-items li a {
  text-decoration: none;
  color: #fff;
  font-family: "Poppins", "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  position: relative;
  transition: color 0.3s ease;
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
  background-color: #fff; /* Underline color */
}

nav .menu-items li a:hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #222; /* Background color for hover effect */
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
