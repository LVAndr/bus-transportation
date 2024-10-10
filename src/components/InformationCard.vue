<script setup>
const props = defineProps({
  cardImg: {
    type: String,
    required: true
  },
  cardTitle: {
    type: String,
    required: true
  },
  cardText: {
    type: String,
    required: true
  },
  cardBackground: {
    type: String,
    required: false,
  }
})
</script>

<template>
<div
    class="information-card"
    :class="cardBackground"
>
  <div class="information-card__image" v-show="cardImg !== null || cardImg !== ''">
    <img width="50" height="auto" loading="lazy" :src="cardImg" alt="IMG">
  </div>
  <div class="information-card__info">
    <h3 class="information-card__title">{{cardTitle}}</h3>
    <p class="information-card__text">{{cardText}}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.information-card{
  height: 100%;
  letter-spacing: 0.03em;
  color: $card-color;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 27px 30px;
  border-radius: 12px;
  border: 1px solid $border-color;
  &.card-background{
    border: none;
    color: #fff;
    background-color: $card-background;
    box-shadow: $card-box-shadow;
  }
  &__image{
    max-width: 60px;
    width: 100%;
  }
  &__title{
    margin-bottom: 2px;
  }
  &__text{

  }
}
@media (max-width: 991.98px) {
  .information-card{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>