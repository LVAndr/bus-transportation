<script setup>
import {ref} from "vue";
import InformationCard from "./InformationCard.vue";
import {requireImage} from "../utils/index.js";

const folderPath = '../assets/img/information-links-cards-imgs/'
const informationLinks = ref([
  {
    title: 'Розклад',
    text: 'Усі заплановані рейси за маршрутом на вибрану дату.',
    imgName: 'calendar-icon.svg',
    link: '/'
  },
  {
    title: 'Автостанції',
    text: 'Інформація про автостанції України та Європи: адреси, номери телефонів, сайт та послуги.',
    imgName: 'location-icon.svg',
    link: '/'
  },
  {
    title: 'Табло автостанцій',
    text: 'Можете стежити за статусом рейсу: часом відправлення, прибуття та затримки.',
    imgName: 'list-icon.svg',
    link: '/'
  }
])
</script>

<template>
<section class="quick-links">
  <div class="quick-links__container container">
  <nav class="quick-links__content">

      <information-card
          v-for="item in informationLinks"
          :url="item.link"
          tag="a"
          color="blue"
          :card-text="item.text"
          :card-title="item.title"
          :card-img="requireImage(folderPath, item.imgName)"
      />
  </nav>
</div>
</section>
</template>

<style scoped lang="scss">
.quick-links{
  padding-top: 10px;
  padding-bottom: 10px;
  &__content{
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>