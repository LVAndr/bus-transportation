<script setup>
import {ref} from "vue";
import InformationCard from "./InformationCard.vue";

const informationLinks = ref([
  {
    title: 'Розклад',
    text: 'Усі заплановані рейси за маршрутом на вибрану дату.',
    imgName: '',
    link: '/'
  },
  {
    title: 'Автостанції',
    text: 'Інформація про автостанції України та Європи: адреси, номери телефонів, сайт та послуги',
    imgName: '',
    link: '/'
  },
  {
    title: 'Табло автостанцій',
    text: 'Можете стежити за статусом рейсу: часом відправлення, прибуття та затримки.',
    imgName: '',
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
          :card-img="item.imgName"
      />
    </a>
  </nav>
</div>
</section>
</template>

<style scoped lang="scss">
.information-links{
  padding-top: 40px;
  padding-bottom: 20px;
  &__content{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
}
</style>