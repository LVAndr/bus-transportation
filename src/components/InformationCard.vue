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
  },
  color: {
    type: String,
    default: 'rounded'
  },
  tag:{
    type: String,
    default: 'div'
  },
  url:{
    type: String,
    default: '#'
  }
})
</script>

<template>
<component
    :is="tag"
    :href="tag === 'a' ? url : null"
    class="information-card"
    :class="['information-card', `information-card__${color}`, cardBackground]"
>
  <div class="information-card__image" v-show="cardImg !== null || cardImg !== ''">
    <img width="50" height="auto" loading="lazy" :src="cardImg" alt="IMG">
  </div>
  <div class="information-card__info">
    <h3 class="information-card__title">{{cardTitle}}</h3>
    <p class="information-card__text">{{cardText}}</p>
  </div>
</component>
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
  &__rounded{
    background-color: transparent;
    border: 1px solid $border-color;
  }
  &__transparent{
    background-color: transparent;
    border-radius: 0;
  }
  &__blue{
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