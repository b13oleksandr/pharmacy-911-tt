<template>
  <div class="home-banner">
    <div class="home-banner__img-wrap">
      <img src="@/assets/images/hubber.svg" alt="">
    </div>
    <div class="home-banner__text">
      Опис товару на його характеристики розміщено платформою HUBBER
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.home-banner {
  display: flex;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--color-card-bg);
  &__text {
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    flex: 1;
    color: var(--color-text)
  }
  &__img-wrap {
    margin-right: 10px;
  }
}
</style>