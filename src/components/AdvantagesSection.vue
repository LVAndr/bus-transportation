<script setup>
import InformationCard from "./InformationCard.vue";


</script>

<template>
<section class="advantages">
  <div class="advantages__container container">
    <h2 class="advantages__title title">Турбота про пасажира</h2>
    <div class="advantages__content">
      <information-card
          :card-img="'bus-icon.svg'"
          :card-title="'Надійно'"
          :card-text="'Працюємо з 2016 року та оформили більше мільйона квитків на рейси по Україні та Європі'"
      />
      <information-card
          :card-img="'ukraine-icon.svg'"
          :card-title="'Надійно'"
          :card-text="'Працюємо з 2016 року та оформили більше мільйона квитків на рейси по Україні та Європі'"
      />
      <information-card
          :card-img="'card-icon.svg'"
          :card-title="'Надійно'"
          :card-text="'Працюємо з 2016 року та оформили більше мільйона квитків на рейси по Україні та Європі'"
      />
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.advantages{
  padding-top: 40px;
  padding-bottom: 40px;
  &__container{

  }
  &__title{
    text-align: center;
  }
  &__content{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
}
</style>