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
      <ul>
        <li>
          <a href="#" @click="scrollToSection('about')">About</a>
        </li>
        <li>
          <a href="#" @click="scrollToSection('Next')">What's Next?</a>
        </li>
      </ul>
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

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin-right: 100px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-family: "Poppins", "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.4em;
  position: relative;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #ffd700; /* Change to desired hover color */
}

nav ul li a:hover::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff; /* Change to desired underline color */
}

nav ul li a:hover::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #222; /* Change to desired underline color */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav ul li a:hover::before,
nav ul li a:hover::after {
  transform-origin: right;
}

nav ul li a:hover::after {
  transform-origin: left;
  transition-delay: 0.1s;
}
</style>
