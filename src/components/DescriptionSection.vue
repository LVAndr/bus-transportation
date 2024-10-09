<script setup>

</script>

<template>
<section class="description">
  <div class="description__container container">
    <div class="description__hero-img">
      <img src="../assets/img/bus-transportation.jpg" alt="bus transportation image">
    </div>
    <div class="description__text">
      <h2 class="description__title title">Bus Trans</h2>
      <p class="description__text">
        - це гарантоване заброньоване місце в автобусі, свобода вибору маршруту та часу відправлення, надійне
        страхування та зручне керування своєю поїздкою через сайт. Ми пропонуємо вигідні тарифи, комфортні умови
        подорожі з сучасними автобусами, а також оперативну підтримку клієнтів на всіх етапах вашої подорожі. Обирайте
        нас для безпечних та приємних поїздок, і ви зможете насолоджуватися поїздкою, не турбуючись про дрібниці!
      </p>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.description{
  padding-top: 40px;
  padding-bottom: 40px;
  &__container{
    display:  flex;
    align-items: center;
    gap: 80px;
  }
  &__hero-img{
    display: inline-flex;
    align-items: center;
    max-width: 560px;
    width: 100%;
    height: 420px;
    overflow: hidden;
  }
  &__hero-img>img{
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
  &__title{
    margin-bottom: 40px;
  }
}
</style>