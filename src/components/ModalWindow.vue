<script setup>
import {ref} from "vue";

const props = defineProps({
  modalId: {
    type: String,
    required: true
  },
  modalTitle: {
    type: String,
    required: false,
    default: 'Modal Title',
  },
  modalText: {
    type: String,
    required: false,
    default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum minima omnis quae quam quia sunt!',
  }
})
const emits = defineEmits(['close']);

function closeModal() {
  emits('close');
}
</script>

<template>
<div
    class="modal"
    @click.self="closeModal"
>
  <div class="modal__box">
    <button class="btn-reset modal__btn" @click="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="20" height="20">
        <path
            fill="#fff" d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z"/>
      </svg>
    </button>
    <h2 class="modal__title title">{{modalTitle}}</h2>
    <p class="modal__text">{{modalText}}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis commodi dolor dolores facilis libero minus perspiciatis placeat quasi quia quos, ratione repellat repellendus sint velit veniam, vero? Asperiores atque consectetur, error ex incidunt magni, nemo qui sapiente sint, tempora unde vero vitae! Ad adipisci alias error, hic nostrum perferendis quam sint unde vel! Alias dolorem earum sit unde veritatis voluptatibus. Ab alias id, illum libero natus perferendis sint! Architecto beatae cupiditate ducimus ea, exercitationem hic laborum maiores mollitia, odit officia officiis, pariatur porro sunt! Aliquid, animi beatae blanditiis delectus, dicta dolorem est exercitationem explicabo inventore, iusto maiores mollitia nam non odit officia perspiciatis quas quidem reprehenderit similique veritatis. Autem debitis, dolorem ducimus laboriosam nihil vitae. Ab accusantium at commodi consectetur cum, dolore ducimus error in iusto laborum minima nam numquam quas quasi quo reiciendis sed. Ab alias consequatur cum dolore facilis, illo nesciunt numquam perferendis porro qui quos reiciendis similique? Alias aliquam, animi, atque aut consequuntur culpa dicta dignissimos distinctio dolorum ducimus enim eveniet exercitationem expedita facere fuga id ipsa laboriosam minima molestiae nostrum nulla officia officiis omnis pariatur provident quam rem repudiandae similique sit tempora unde velit vero vitae. Accusantium assumenda corporis cum doloremque eum incidunt inventore ipsum iste iure, labore molestias mollitia perferendis quae quo similique, totam voluptatem, voluptatum. Delectus dicta dolorem maxime officiis pariatur quas. Ad adipisci asperiores at consequatur debitis deleniti deserunt dignissimos dolore error et explicabo id ipsam iste, itaque labore laudantium numquam praesentium provident quas reprehenderit sint tempora, unde voluptas voluptate voluptates? Accusamus aliquid architecto at blanditiis culpa delectus doloribus ducimus eaque error fugiat, fugit impedit in molestiae nemo officiis optio quaerat quidem reiciendis sed unde. Accusamus ad adipisci dolorem dolorum illo magni maxime nemo perspiciatis voluptas? Aliquam architecto asperiores beatae consequatur corporis delectus deleniti dicta distinctio dolorem doloribus dolorum et eveniet ex fugit harum id, inventore ipsum itaque iusto laboriosam, magnam modi natus omnis pariatur porro rem repudiandae sequi sunt vero, voluptate! Consectetur ea enim incidunt, libero maiores molestiae neque nisi rem saepe soluta voluptas voluptatem. Adipisci ex quae quo! Ducimus earum enim, illo in minima mollitia omnis tempora totam voluptatum! Debitis distinctio dolor ducimus est, expedita in ipsa, labore nesciunt, nulla officia quam quo rem repudiandae sint voluptatibus? Cum, obcaecati, velit. Blanditiis corporis cupiditate deleniti eaque eius eveniet maxime neque quo ratione voluptatum. A, ad asperiores eos et fugiat hic illum incidunt ipsum natus nisi quae, quasi quisquam, tenetur ullam veritatis!</p>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: $modal-background-color;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  transition: visibility .8s, opacity .8s;
  &__box {
    position: relative;
    margin: 35px 20px;
    color: $text-color-dark;
    max-width: 500px;
    padding: 36px 34px 38px;
    background-color: $background-color-light;
    border-radius: $card-border-radius;
    box-shadow: $light-box-shadow;
    z-index: 1;
  }
  &__btn{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 6px;
    border-radius: 50%;
    background-color: #2c2c2c;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    transition: opacity .3s;
  }
  &__btn:hover{
    opacity: .85;
  }
  &__title{
    font-weight: 400;
  }
}
.modal.open{
  visibility: visible;
  opacity: 1;
}
</style>