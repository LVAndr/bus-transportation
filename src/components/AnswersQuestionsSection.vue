<script setup>
import {ref} from "vue";
import SetButton from "./setButton.vue";

const faqObj = ref([
  {
    question: "Як купити квиток на автобус?",
    answer: "Квитки можна придбати на нашому сайті, в мобільному додатку або безпосередньо в касах на автовокзалах.",
    isOpen: false
  },
  {
    question: "Чи можна повернути квиток і отримати відшкодування?",
    answer: "Так, ви можете повернути квиток не пізніше, ніж за 24 години до часу відправлення автобуса. У такому випадку повернення буде повне.",
    isOpen: false
  },
  {
    question: "Чи є знижки для дітей та студентів?",
    answer: "Так, діти та студенти можуть отримати знижки. Дітям до 12 років надається знижка 50%, а студентам – 10% при пред'явленні відповідного посвідчення.",
    isOpen: false
  },
  {
    question: "Який багаж можна взяти з собою?",
    answer: "Кожен пасажир може перевозити до 30 кг багажу безкоштовно. За додатковий багаж стягується окрема плата.",
    isOpen: false
  },
  {
    question: "Чи надаєте ви міжнародні рейси?",
    answer: "Так, ми здійснюємо міжнародні перевезення в країни Європи, зокрема до Польщі, Німеччини, Чехії та інших.",
    isOpen: false
  }
]);
</script>

<template>
<section class="answers-questions">
  <div class="answers-questions-container container">
    <h2 class="title answers-questions__title">
      Питання та відповіді
    </h2>
    <div class="answers-questions__content">
      <ul class="answers-questions__list list-reset">
        <li
            v-for="(faq, id) in faqObj"
            :key="id"
            class="answers-questions__list-item answers-questions__item"
            :class="{'active': faq.isOpen}"
            @click="faq.isOpen = !faq.isOpen"
        >
          <div class="answers-questions__top">
            <h3 class="answers-questions__item-question">{{faq.question}}</h3>
            <button
                class="answers-questions__item-btn btn-reset"
            >
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                   viewBox="0 0 24 24" width="12" height="12">
                <path d="M22.586,5.929l-9.879,9.879a1.021,1.021,0,0,1-1.414,0L1.42,5.934.006,7.348l9.873,9.874a3.075,3.075,0,0,0,4.243,0L24,7.343Z"/>
              </svg>
            </button>
          </div>
          <div class="answers-questions__medium">
            <p class="answers-questions__item-answer">{{faq.answer}}</p>
          </div>
          <div class="answer-questions__bottom">
            <hr>
          </div>
        </li>
      </ul>
      <div class="answers-questions__link">
        <set-button tag="a" class="answers-questions__btn" label="Дивитись всі" width="middle"/>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.answers-questions{
  margin: 40px auto;
  padding-top: 1px;
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title{
    text-align: center;
    margin-bottom: 15px;
  }
  &__top{
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }
  &__top>&__item-question{
    color: inherit;
    transition: color .3s ease;
  }
  &__top:hover>&__item-question{
    color: #009eff;
  }
  &__medium{
    height: 0;
    overflow: hidden;
    transition: .3s height ease;
  }
  &__item{
    padding: 10px 0;
    &-question{
      font-size: $question-font-size;
      font-weight: 400;
      padding-right: 15px;
      padding-bottom: 10px;
    }
    &-answer{
      font-size: $answer-font-size;
      padding: 5px;
      margin-bottom: 15px;
    }
    &-btn{
      padding: 8px;
    }
    &-btn>svg{
      fill: $text-color-dark;
      width: 18px;
      height: auto;
      transition: all .3s ease;
    }
  }
  &__item:not(:last-child){
    margin-bottom: 10px;
  }
  &__item.active{
    .answers-questions__item-btn>svg{
      rotate: 180deg;
      fill: #009eff;
    }
    .answers-questions__medium{
      height: 100%;
    }
  }
  &__link{
    margin-top: 35px;
  }
}
@media (hover: none) {
  .answers-questions{
    &__top:hover>&__item-question{
      color: inherit;
    }
  }
}
@media (max-width: 479.98px) {
  .answers-questions{
    &__top:active>&__item-question{
      color: #009eff;
    }
  }
}
</style>