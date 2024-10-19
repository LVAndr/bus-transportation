<script setup>
import SetImage from "./SetImage.vue";

const props = defineProps({
  contactList: {
    type: Array,
    required: true,
  },
  folderPath: {
    type: String,
    required: false
  }
})
</script>

<template>
<div class="contacts">
  <div class="contacts__top contacts-top">
    <h3 class="contacts-top__title title">Телефони</h3>
    <ul class="contacts-top__list list-reset">
      <li class="contacts-top__list-item"
      v-for="item in contactList"
      >
        <a :href="`tel:+${item.phone}`" class="contacts-top__list-link contacts-top__link">
          <span class="contacts-top__link-icon">
            <set-image
                :img-name="item.operatorIconName"
                :folder-path="folderPath"
                :img-width="12"
                :img-height="12"
                :img-alt="item.alt"
            />
          </span>
          <span class="contacts-top__link-tel">
            +{{item.phone}}
          </span>
        </a>
      </li>
    </ul>
  </div>
  <div class="contacts__bottom contacts-bottom">
    <h3 class="contacts-bottom__title">Зворотній зв’язок</h3>
    <form action="#" class="contacts-bottom__form">
      <div class="form-control">
        <label for="user-name">Прізвище Ім'я</label>
        <input name="user-name" type="text">
      </div>

      <div class="form-control">
        <label for="user-phone">Телефон</label>
        <input name="user-phone" type="number">
      </div>

      <div class="form-control">
        <label for="user-comment">Коментар</label>
        <textarea name="user-comment" type="text" rows="3"></textarea>
      </div>

      <button class="btn-reset form__btn">Відправити</button>
    </form>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "../assets/styles/variables";
.contacts{
  &-top{
   &__title{
     font-size: 17px;
     margin-bottom: 10px;
   }
    &__list{
      &-item{
        font-size: 14px;
      }
      &-item:not(:last-child){
        margin-bottom: 5px;
      }
    }
    &__link{
      display: flex;
      align-items: center;
      &-icon{
        margin-right: 6px;
      }
      &-tel{
        font-variant-numeric: tabular-nums;
        transition: color .3s;
        &:hover{
          color: #009eff;
        }
      }
    }
  }
  &-bottom{
    margin-top: 20px;
    &__title{
      font-size: 17px;
      margin-bottom: 10px;
    }
    &__form{
      display: flex;
      flex-direction: column;
      .form-control{
        display: flex;
        flex-direction: column;
        margin-bottom: 12px;
      }
      label{
        margin-bottom: 5px;
        font-size: 14px;
        color: #939398;
      }
      input, textarea{
        width: 100%;
        outline: none;
        border: none;
        background-color: #efefef;
        color: inherit;
        letter-spacing: 0.01em;
        font-size: 16px;
        resize: none;
        padding: 14px 15px;
        border-radius: $card-border-radius;
      }
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }
      button{
        font-weight: 500;
        border-radius: $card-border-radius;
        background-color: $orange-color;
        padding: 14px 15px;
        color: $text-color-light;
      }
      .form__btn{
        width: 100%;
        margin: 12px auto 8px;
      }
    }
  }
}
</style>