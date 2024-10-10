<script setup>

</script>

<template>
<section class="description">
  <div class="description__container container">
    <div class="description__hero-img">
      <div class="img1 img">
        <img width="600" height="auto"  src="../assets/img/bus-transportation.jpg" alt="bus transportation image">
      </div>
    </div>
    <div class="description__text-content">
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
@import "src/assets/styles/variables";
.description{
  padding-top: 40px;
  padding-bottom: 40px;
  &__container{
    display:  flex;
    align-items: center;
    gap: 80px;
    overflow: hidden;
  }
  &__hero-img{
    display: flex;
    justify-content: center;
    flex: 0 1 50%;
    padding: 15px;
    max-width: 600px;
    width: 100%;
    height: 100%;
  }
  &__hero-img>.img{
    img{
      width: 100%;
      display: inline-block;
      border-radius: 18px;
      box-shadow: $image-box-shadow;
    }
  }
  &__text-content{
    max-width: 700px;
    width: 100%;
    display: block;
  }
  &__title{
    margin-bottom: 40px;
  }
  &__text{
    font-size: $description-font-size;
  }
}
@media (max-width: 991.98px) {
 .description{
   &__container{
     gap: 50px;
   }
   &__title{
     margin-bottom: 20px;
   }
 }
}
@media (max-width: 767.98px) {
  .description{
    &__container{
      flex-direction: column;
      gap: 40px;
    }
    &__hero-img{
      order: 1;
      max-width: 350px;
    }
    &__title{
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 479.98px) {
  .description{
    &__container{
      gap: 20px;
    }
  }

}
</style>