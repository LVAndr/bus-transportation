<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: 'Button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    required: 'normal',
  },
  icon: {
    type: String,
    default: false
  },
  width:{
    type: String,
    default: 'full'
  }
})
const emits = defineEmits(['btn-click']);
const clickOnButton = ()=>{
    emits("btn-click")
}
</script>

<template>
<button
    @click="clickOnButton"
    :class="['btn-reset', 'btn', `btn__${color}`,
    {'btn__icon': icon}, {'btn__small': size === 'small'},
    `btn__${width === 'middle' ? 'middle' : 'full'}`
    ]"
>
  <template v-if="icon">
    <img src="../assets/img/close-icon.svg" alt="button icon">
  </template>
  <template v-else>{{label}}</template>
</button>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.btn {
  display: block;
  text-align: center;
  margin: 10px auto;
  min-width: 200px;
  height: 64px;
  font-weight: 600;
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