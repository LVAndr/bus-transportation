<script setup>
import InformationCard from "./InformationCard.vue";
import {ref} from "vue";
import {requireImage} from "../utils/index.js";

const folderPath = '../assets/img/advantages-cards-imgs/'
const advantagesList = ref([
  {
    title: 'Турбота про пасажира',
    text: 'Працюємо з 2016 року та оформили більше мільйона квитків на рейси по Україні та Європі',
    imgName: 'ukraine-icon.svg'
  },
  {
    title: 'Просто',
    text: 'Працюємо з 2016 року та оформили більше мільйона квитків на рейси по Україні та Європі',
    imgName: 'card-icon.svg'
  },
  {
    title: 'Доступно',
    text: 'Порівнюй ціни більше тисячі перевізників. Вартість квитка на Bus Trans для більшості рейсів є найнижчою\n',
    imgName: 'bus-icon.svg'
  },
])

</script>

<template>
<section class="advantages">
  <div class="advantages__container container">
    <h2 class="advantages__title title">Турбота про пасажира</h2>
    <div class="advantages__content">
      <information-card
          v-for="item in advantagesList"
          :card-text="item.text"
          :card-title="item.title"
          :card-img="requireImage(folderPath, item.imgName)"/>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.advantages{
  padding-top: 40px;
  padding-bottom: 20px;
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