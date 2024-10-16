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
}
</style>