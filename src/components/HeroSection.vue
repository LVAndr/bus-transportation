<script setup>

import InformerCard from "./InformerCard.vue";
import {ref} from "vue";
import ModalWindow from "./ModalWindow.vue";

const informerContent = ref({
  title: 'Робота сервісу в період війни',
  description: 'Інформація стосовно роботи Bus Trans в період війни'
})
const showModal = ref(false);
</script>

<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__content">
        <h1 class="hero__title title">
          <span class="hero__title-top">Квитки на автобус</span>
          <span class="hero__title-bottom" >маршрути по Україні та Європі в одному місці</span>
        </h1>
      </div>
      <informer-card
          @click="showModal = true"
          :informer-title="informerContent.title"
          :informer-description="informerContent.description"
      />
      <modal-window
          v-if="showModal"
          :class="showModal ? 'open' : ''"
          @close="showModal = false"
          :modal-id="'header-modal-informer'"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.hero{
  color: $text-color-light;
  min-height: 300px;
  background: $background-linear-gradient;
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__content{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  &__title{
    text-align: center;
    display: flex;
    flex-direction: column;
    &-bottom{
      font-size: $title-bottom-font-size;
    }
  }
}
</style>