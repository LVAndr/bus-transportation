<script setup>
import HeroSection from "../components/HeroSection.vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import FooterContainer from "../components/FooterContainer.vue";
import TripCardsSection from "../components/TripsCardsSection.vue";
import AnswersQuestionsSection from "../components/AnswersQuestionsSection.vue";
import AdvantagesSection from "../components/AdvantagesSection.vue";
import InformationLinksSection from "../components/InformationLinksSection.vue";
</script>

<template>
    <header-container/>
    <main class="main">
      <hero-section/>
      <advantages-section/>
      <trip-cards-section/>
      <answers-questions-section/>
      <information-links-section/>
    </main>
    <footer-container/>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";

.main{
  color: $text-color-dark;
}
.hero{
  padding-top: 80px;
  //position: absolute;
  //top: -80px;
  //left: 0;
  //right: 0;
}
</style>