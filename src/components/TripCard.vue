<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'violet'
  }
})
</script>

<template>
<div
    class="trip-card"
    :class="color"
>
  <div class="trip-card__top trip-top">
    <div class="trip-top__img"></div>
    <h3 class="trip-top__title">Східні регіони</h3>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.trip-card{
  width: 100%;
  min-height: 200px;
  color: $text-color-light;
  border-radius: 10px;
  padding: 20px 30px;
}
.violet{
  background: linear-gradient(315deg, #764ba2, #667eea);
}
.green{
  background: linear-gradient(0deg,#31deae,#72afd3)
}
.rose{
  background: linear-gradient(135deg, #fe9a8b, #fd868c 40.85%, #f9748f 73.15%, #f78ca0);
}
.dark{
  background: linear-gradient(59deg, #485563, #29323c);
}
.blue{
  background: linear-gradient(315deg, #007cc9, #00a0ff);
}
.orange{
  background: linear-gradient(158deg, #ffb522, #ff8100);
}
</style>