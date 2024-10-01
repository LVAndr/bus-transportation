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

.main{
  position: relative;
}
.hero{
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;
}
</style>