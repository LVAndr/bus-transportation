<script setup>
const props = defineProps({
  informerTitle: {
    type: String
  },
  informerDescription: {
    type: String
  }
})
</script>

<template>
<div v-if="informerDescription || informerTitle" class="informer-card">
<h3 class="informer-card__title">
  {{informerTitle}}
</h3>
  <div class="informer-card__description">
    {{informerDescription}}
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.informer-card{
  margin: 25px auto;
  width: 100%;
  padding: 22px 30px 26px;
  border-radius: $card-border-radius;
  border-left: 5px solid $orange-color;
  background-color: $background-color-light-opacity;
  box-shadow: $card-box-shadow;
  cursor: pointer;
}
</style>