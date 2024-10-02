<script setup>

</script>

<template>
  <section class="hero">
    <div class="hero__container container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="hero__title-top">Квитки на автобус</span>
          <span class="hero__title-bottom" >маршрути по Україні та Європі в одному місці</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.hero{
  color: $text-color-light;
  min-height: 300px;
  background: $background-linear-gradient;
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__content{
    margin-top: 50px;
  }
  &__title{
    display: flex;
    flex-direction: column;
    &-bottom{
      font-size: 20px;
    }
  }
}
</style>