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
<section class="information-links">

  <div class="information-links__container container">
  <nav class="information-links__content">
    <a v-for="item in informationLinks" :href="item.link">
      <information-card
          :card-background="'card-background'"
          :card-text="item.text"
          :card-title="item.title"
          :card-img="requireImage(folderPath, item.imgName)"
      />
    </a>
  </nav>
</div>
</section>
</template>

<style scoped lang="scss">
.information-links{
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