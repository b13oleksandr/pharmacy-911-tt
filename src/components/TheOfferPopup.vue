<template>
  <div class="offer-popup">
    <div class="offer-popup__logo-wrap">
      <the-header-logo />
    </div>
    <p class="offer-popup__desc text-pimary">
      Соцмережа постачальників та покупців для покупки товарів та обміну відгуками:
    </p>

    <ul class="offer-popup__list text-pimary">
      <li>1 000 000+ доступних товарів в каталозі</li>
      <li>пошук серед товарів у наявності</li>
      <li>перевірені постачальники товарів в Україні.</li>
    </ul>

    <p class="text-pimary">Залиште ваш відгук</p>
    <router-link to="#" class="text-accent">https://forms.gle/CKuK2yKpvPXbTLVQ9</router-link>

    <ui-btn label="Ок" @click="$emit('ok')" class="offer-popup__button" />
  </div>
</template>

<script lang="ts" setup>
import TheHeaderLogo from "@/components/TheHeader/TheHeaderLogo.vue"
import UiBtn from "@/components/ui/UiBtn.vue";
</script>

<style lang="scss" scoped>
.offer-popup {
  font-size: 14px;
  line-height: 140%;
  &__logo-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  &__desc {
    margin-bottom: 8px;
  }
  &__list {
    padding-left: 16px;
    margin-bottom: 8px;
  }
  &__button {
    margin-top: 24px;
  }
}
</style>