<template>
  <footer class="footer">
    <hr />
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="privacy-section">© 2024 psquared</h3>
        <nuxt-link
          to="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          >Privacy Policy</nuxt-link
        >
        |
        <nuxt-link to="/terms" target="_blank" rel="noopener noreferrer"
          >Terms and Conditions</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: var(--text-color);
  color: #fff;
  font-family: "Poppins", sans-serif;
  align-items: center;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 24px 24px 24px;
}

.footer-section {
  align-items: center;
  justify-content: center;
}

.footer-section h3 {
  color: #fff;
  margin-bottom: 16px;
}

.footer-section a {
  color: #fff;
  margin-bottom: 5px;
  transition: color 0.3s ease;
  font-size: 16px;
}

.footer-section a:hover {
  color: #ffd700;
}

.footer-copy {
  text-align: center;
  border-top: 1px solid #333;
  padding-top: 20px;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}
</style>
