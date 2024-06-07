<template>
  <div class="footer">
    <div class="footer-text">
      <div class="footer-text-item">Created with Nuxt by</div>
      <div class="footer-text-item">Philipp Klein</div>
    </div>
    <div class="footer-text">
      <div class="footer-text-item">Contact</div>
      <div class="footer-text-item"><a href="mailto:klein.philipp@posteo.at">
            <i class="bi bi-envelope"></i> klein.philipp@posteo.at</a></div>
    </div>
    <div class="footer-text">
      <div class="footer-text-item">last updated: 06/2024</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

.footer {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-top: 0.5px solid $primary;
  padding: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.footer-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
}
</style>