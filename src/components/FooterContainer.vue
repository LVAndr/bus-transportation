<script setup>
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
      <small>Bus Tickets &copy {{yearNow}}</small>
      <small>Сайт розроблено <a href="" lang="en">Vadim Liulko</a></small>
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

}
.logo{
  font-weight: 700;
  font-size: clamp(1.5rem, 0.714vw + 1.357rem, 2rem);
}

</style>