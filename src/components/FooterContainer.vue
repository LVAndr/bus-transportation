<script setup>
import SetImage from "./SetImage.vue";

const folderPath = '../assets/img/'

const yearNow = new Date().getFullYear();
</script>

<template>
<footer class="footer">
  <div class="footer__top footer-top">
    <div class="footer-top__container container">
      <a href="/" class="logo">Bus trans</a>
    </div>
  </div>
  <div class="footer__bottom footer-bottom">
    <div class="footer-bottom__container container">
      <small class="footer-bottom__copy">Bus Tickets &copy {{yearNow}}</small>
      <div class="footer-bottom__payment">
        <div class="footer-bottom__payment-img">
          <set-image :folder-path="folderPath" img-name="visa-icon.svg" img-width="auto" img-height="auto" img-alt="visa payment icon"/>
        </div>
        <div class="footer-bottom__payment-img">
          <set-image :folder-path="folderPath" img-name="masterCard-icon.svg" img-width="auto" img-height="auto" img-alt="master card payment icon"/>
        </div>
      </div>
      <small class="footer-bottom__developer">Сайт розроблено <a href="" lang="en">Vadim Liulko</a></small>
    </div>
  </div>
</footer>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.footer{
  color: $text-color-light;
  &__top{
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: $background-footer-top;
  }
  &__bottom {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: $background-footer-bottom;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-bottom__payment{
    display: flex;
    gap: 16px;
    align-items: center;
  }

}
.logo{
  font-weight: 700;
  font-size: clamp(1.5rem, 0.714vw + 1.357rem, 2rem);
}

</style>