<script setup>
import ModalWindow from "./ModalWindow.vue";
import {ref} from "vue";
import ContactForm from "./ContactForm.vue";
import {openModal} from "../utils/index.js";
import SetButton from "./setButton.vue";

const folderPath = '../assets/img/contact-form-icons/';
const HeaderBtnFolderPath = '../assets/img/';
const supportContacts = ref([
  {
    phone: 380960000000,
    operatorIconName: 'kyivstar-icon.png',
    alt: 'kyivstar icon'
  },
  {
    phone: 380930000000,
    operatorIconName: 'lifecell-icon.png',
    alt: 'lifecell icon'
  },
  {
    phone: 380950000000,
    operatorIconName: 'vodafone-icon.png',
    alt: 'vodafone icon'
  },
])

const showModal = ref(false);
</script>

<template>
<header class="header">
  <div class="header__container container">
    <a href="/" class="logo">Bus trans</a>
    <div class="header__content header-content">
      <set-button
          @btn-click="showModal = openModal()"
          :icon-label=true
          color="transparent"
          label="Служба підтримки"
          :folder-path="HeaderBtnFolderPath"
          image="phone-icon.svg"
      />
      <a href="" class="header-content__link link">FAQ</a>
    </div>
    <modal-window
        @close="showModal = false"
        modal-id="contact-modal"
        :is-visible="showModal"
        :modal-title="'Служба підтримки'"
        :modal-text="'Час роботи служби підтримки: щоденно з 9:00 до 20:00'"
    >
      <template v-slot:contactForm>
        <contact-form
            :folder-path="folderPath"
            :contact-list="supportContacts"
        />
      </template>
    </modal-window>
  </div>
</header>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $text-color-light;
  padding-top: $header-padding;
  padding-bottom: $header-padding;

}
.logo{
  user-select: none;
  font-weight: 700;
  font-size: clamp(1.5rem, 0.714vw + 1.357rem, 2rem);
}
.header-content{
  display: flex;
  gap: 30px;
  align-items: center;
  &__link{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}

</style>