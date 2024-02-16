<template>
  <footer class="footer">
    <hr />
    <div class="footer-container">
      <div class="footer-section">
        <h3>Frequent Updates</h3>
        <a href="https://twitter.com/Graffino" target="_blank">Twitter</a>
        <a href="https://github.com/Graffino" target="_blank">Github</a>
        <a href="https://linkedin.com/company/Graffino" target="_blank"
          >LinkedIn</a
        >
        <a href="https://medium.com/@Graffino" target="_blank">Medium</a>
        <a href="https://instagram.com/GraffinoWeb" target="_blank"
          >Instagram</a
        >
      </div>
      <!-- Additional sections can be added here -->
      <div class="footer-section footer-right">
        <h3 class="privacy-section">© 2024 psquared</h3>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
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
  align-items: end;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 0 24px 24px 24px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section.footer-right {
  align-items: flex-end;
}

.footer-section h3 {
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
}

.footer-section a {
  color: #fff;
  margin-bottom: 5px;
  transition: color 0.3s ease;
  font-size: 12px;
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
