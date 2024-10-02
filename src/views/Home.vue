<script setup>
import HeroSection from "../components/HeroSection.vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import FooterContainer from "../components/FooterContainer.vue";
</script>

<template>
    <header-container/>
    <main class="main">
      <hero-section/>
    </main>
    <footer-container/>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.main{
  position: relative;
  color: $text-color-dark;
}
.hero{
  padding-top: 80px;
  position: absolute;
  top: -80px;
  left: 0;
  right: 0;
}
</style>