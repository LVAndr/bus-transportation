<script setup>

import TripCard from "./TripCard.vue";
</script>

<template>
<section class="trips__section trips">
  <div class="trips__container container">
    <h2 class="trips__title title">
      Подорожуйте по Україні та Європі просто і вигідно
    </h2>
    <div class="trips__cards">
      <trip-card/>
      <trip-card/>
      <trip-card/>
      <trip-card/>
      <trip-card/>
      <trip-card/>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.trips{
  margin: 50px auto;
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__title{
    color: $text-color-dark;
  }
  &__cards{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 30px;
    margin-top: 40px;
  }
}
@media (max-width: 991.98px) {
  .trips{
    &__cards{
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (max-width: 575.98px) {
  .trips{
    &__cards{
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>