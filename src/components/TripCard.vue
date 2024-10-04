<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'violet'
  },
  region: {
    type: String,
    required: false,
    default: 'Східні регіони'
  }
})
</script>

<template>
<div
    class="trip-card"
    :class="color"
>
  <div class="trip-card__top trip-top">
    <div class="trip-top__img">
      <img src="../assets/img/vest-region.webp" alt="">
    </div>
    <h3 class="trip-top__title">{{region}}</h3>
  </div>
  <div class="trip-card__bottom trip-bottom">
    <ul class="trip-bottom__list list-reset">
      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
        <hr class="trip-bottom__item-hr">
      </li>
      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
        <hr class="trip-bottom__item-hr">
      </li>

      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
        <hr class="trip-bottom__item-hr">
      </li>
      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
        <hr class="trip-bottom__item-hr">
      </li>

      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
      </li>
      <li class="trip-bottom__item">
        <div>
          <span class="trip-bottom__item-departure">Київ</span>
          -
          <span class="trip-bottom__item-destination">Харків</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.trip-card{
  width: 100%;
  color: $text-color-light;
  border-radius: 10px;
  padding: 20px 30px;

  &__top{
    display: flex;
    align-items: center;
    margin: 10px auto;
  }
  &__bottom{
    margin-top: 15px;
  }
  .trip-top{
    &__title{
      margin-left: 25px;
    }
  }
  .trip-bottom{
    &__list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    &__item:not(:last-child){
      margin-bottom: 10px;
    }
    &__item{
      padding: 5px 0;
      position: relative;
      cursor: pointer;
    }
    &__item-hr{
      margin: 5px 0;
      border: none;
      height: 1px;
      background-color: #ffffff;
      position: absolute;
      top: 22px;
      right: 0;
      left: 0;
      z-index: 2;
    }
  }
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