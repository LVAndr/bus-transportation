<script setup>

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
    <button class="btn-reset modal__btn" @click="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
           x="0px" y="0px" viewBox="0 0 512.021 512.021"
           xml:space="preserve" width="512" height="512">
<g>
	<path
      fill="#fff" d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
</g>
</svg>

    </button>
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
    padding: 0;
    border-radius: 50%;
    background-color: #2c2c2c;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    transition: opacity .3s;
    svg{
      width: 8px;
      height: 8px;
    }
  }
  &__btn:hover{
    opacity: .85;
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