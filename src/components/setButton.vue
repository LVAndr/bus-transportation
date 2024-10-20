<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  }
})
</script>

<template>
<button class="btn-reset btn__primary">{{title}}</button>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.btn__primary{
  min-width: 200px;
  font-weight: 500;
  border-radius: $card-border-radius;
  background-color: $orange-color;
  background-image: linear-gradient(85deg, #ff8100 9%, #f69102 50%, #ff8100);
  padding: 14px 15px;
  color: $text-color-light;
  box-shadow: $light-box-shadow;
  transition: background-image 0.4s ease;
}
.btn__primary:active{
  background-image: linear-gradient(85deg, #f47c02 9%, #ed8d04 50%, #f47c02);
}
.btn__primary:hover {
  animation: gradientAnimation .4s ease;
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
</style>