<script setup>

</script>

<template>
<header class="header">
  <div class="header__container container">
    <a href="/" class="logo">Bus tickets</a>
    <div class="header__content header-content">
      <a href="" class="header-content__link link">
        <span class="header-content__icon">
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 11 17"><path fill="currentColor" d="M.79 14.648V2.68q0-.89.57-1.438.57-.546 1.507-.547h5.649q.921 0 1.484.547.57.547.57 1.438v11.96q0 .9-.57 1.438-.563.547-1.484.547H2.867q-.937 0-1.508-.547-.57-.54-.57-1.43m1.327-.671h7.125V3.352H2.117zm3.57 1.875a.64.64 0 0 0 .47-.196.65.65 0 0 0 .195-.476.64.64 0 0 0-.196-.47.64.64 0 0 0-.468-.194.653.653 0 0 0-.664.664q0 .28.187.476.195.196.476.196M4.228 2.07q0 .134.085.211a.3.3 0 0 0 .211.078h2.32a.28.28 0 0 0 .204-.078.27.27 0 0 0 .086-.21.28.28 0 0 0-.086-.22.26.26 0 0 0-.203-.085h-2.32a.29.29 0 0 0-.212.086.28.28 0 0 0-.085.218"></path></svg>
        </span>
        <span>Служба підтримки</span>
      </a>
      <a href="" class="header-content__link link">FAQ</a>
    </div>
  </div>
</header>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.header__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $text-color-light;
  padding-top: $header-padding;
  padding-bottom: $header-padding;

}
.logo{
  font-weight: 700;
  font-size: clamp(1.5rem, 0.714vw + 1.357rem, 2rem);
}
.header-content{
  display: flex;
  gap: 30px;
  align-items: center;
  &__link{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &__icon{
    margin-right: 6px;
    width: 14px;
    height: auto;
    fill: $text-color-light;
  }
}
</style>