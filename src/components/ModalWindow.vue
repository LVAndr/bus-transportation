<script setup>

import SetButton from "./setButton.vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  },
  modalId: {
    type: String,
    required: true
  },
  modalTitle: {
    type: String,
    required: false
  },
  modalText: {
    type: String,
    required: false
  }
})
const emits = defineEmits(['close']);

function closeModal() {
  emits('close');
  document.body.classList.remove('no-scroll');
}
</script>

<template>
<div
    v-if="isVisible"
    :class="isVisible ? 'open' : ''"
    class="modal"
    @click.self="closeModal"
>
  <div
      class="modal__box"
      :class="{'contact-modal': $slots.contactForm}"
  >
    <set-button class="modal__btn" color="dark" icon="true" @btn-click="closeModal"/>
    <h2
        v-if="modalTitle"
        class="modal__title title"
        :class="{'contact-modal__title': $slots.contactForm}"
    >
      {{modalTitle}}
    </h2>
    <p
        v-if="modalText"
        class="modal__text"
        :class="{'contact-modal__description': $slots.contactForm}"
    >
      {{modalText}}
    </p>

    <slot name="contactForm"></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: $modal-background-color;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  transition: visibility .8s ease, opacity .8s ease;
  &__box {
    position: relative;
    margin: 35px 20px;
    color: $text-color-dark;
    max-width: 500px;
    padding: 36px 34px 38px;
    background-color: $background-color-light;
    border-radius: $card-border-radius;
    box-shadow: $light-box-shadow;
    z-index: 1;
  }
  &__btn{
    position: absolute;
    top: 12px;
    right: 12px;
  }
  &__title{
    font-size: $modal-title-font-size;
    font-weight: 400;
    margin-bottom: 16px;
  }
  &.open{
    visibility: visible;
    opacity: 1;
  }
}
.contact-modal{
  max-width: 390px;
  &__title{
    font-size: 26px;
  }
  &__description{
    font-size: 14px;
    margin-bottom: 16px;
  }
}
</style>