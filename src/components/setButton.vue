<script setup>
import closeIcon from '../assets/img/close-icon.svg'
import SetImage from "./SetImage.vue";
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'normal',
  },
  icon: {
    type: Boolean,
    default: false
  },
  image: {
    type: [String, Function],
    default: closeIcon
  },
  folderPath: {
    type: String,
    required: false
  },
  width:{
    type: String,
    default: 'full'
  },
  tag: {
    type: String,
    default: 'button',
  },
  url:{
    type: String,
    default: '#'
  },
  disabled: {
    type: Boolean,
    required: false,
  },
})
const emits = defineEmits(['btn-click']);
const clickOnButton = ()=>{
  if (props.tag === 'button') {
    emits("btn-click")
  }
}
</script>

<template>
<component
    :is="tag"
    :href="tag === 'a' ? url : null"
    @click="clickOnButton"
    :class="['btn-reset', 'btn', `btn__${color}`,
    {'btn__icon': icon}, {'btn__small': size === 'small'},
    `btn__${width === 'middle' ? 'middle' : 'full'}`
    ]"
>
  <template v-if="icon">
    <set-image :folder-path="folderPath" :img-name="image" :img-height="8" :img-width="8" img-alt="button icon"/>
  </template>
  <template v-else>{{label}}</template>
</component>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
a{
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
  display: block;
}
.btn {
  text-align: center;
  margin: 10px auto;
  min-width: 200px;
  height: 64px;
  font-weight: 600;
  line-height: 1;
  border-radius: $card-border-radius;
  color: $text-color-light;
  padding: 14px 15px;
  box-shadow: $light-box-shadow;
  &__full{
    width: 100%;
  }
  &__middle{
    max-width: 274px;
    width: 100%;
  }
  &__primary {
    background-color: $orange-color;
    background-image: linear-gradient(85deg, #ff8100 9%, #f69102 50%, #ff8100);
    transition: background-image 0.4s ease;
    &:hover {
      animation: gradientAnimation .4s ease;
    }
    &:active {
      background-image: linear-gradient(85deg, #f47c02 9%, #ed8d04 50%, #f47c02);
    }
  }
  &__small{
    height: 46px;
  }
  &__dark{
    background-color: #2c2c2c;
    transition: opacity .3s;
  }
  &__icon{
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-width: auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-image: none;
    box-shadow: none;
    & img{
      width: 8px;
      height: 8px;
    }
    &:hover{
      opacity: .85;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-image: linear-gradient(85deg, #ff8100 0%, #f69102 1%, #ff8100 100%);
    }
    10% {
      background-image: linear-gradient(85deg, #ff8100 0%, #f69102 5%, #ff8100 100%);
    }
    20% {
      background-image: linear-gradient(85deg, #ff8100 0%, #f69102 20%, #ff8100 100%);
    }
    30% {
      background-image: linear-gradient(85deg, #ff8100 2%, #f69102 30%, #ff8100 100%);
    }
    40% {
      background-image: linear-gradient(85deg, #ff8100 4%, #f69102 40%, #ff8100 100%);
    }
    50% {
      background-image: linear-gradient(85deg, #ff8100 6%, #f69102 50%, #ff8100 100%);
    }
    600% {
      background-image: linear-gradient(85deg, #ff8100 9%, #f69102 60%, #ff8100 100%);
    }
    70% {
      background-image: linear-gradient(85deg, #ff8100 9%, #f69102 70%, #ff8100 100%);
    }
    80% {
      background-image: linear-gradient(85deg, #ff8100 9%, #f69102 80%, #ff8100 100%);
    }
    90% {
      background-image: linear-gradient(85deg, #ff8100 9%, #f69102 90%, #ff8100 100%);
    }
    100% {
      background-image: linear-gradient(85deg, #ff8100 9%, #f69102 100%, #ff8100 100%);
    }
  }
}
@media (max-width: 767.98px) {
 .btn{
   height: 60px;
 }
}
</style>