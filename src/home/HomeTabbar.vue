<template>
<div class="tabbar">
  <div class="tabbar__button" @click="$emit('catalog')">
    <icon-catalog />
    <span class="tabbar__button-text">Каталог</span>
  </div>

  <div
    class="tabbar__separator"
  />

  <div class="tabbar__button" @click="$emit('accaunt')">
    <icon-user />
    <span class="tabbar__button-text">Кабінет</span>
  </div>
</div>
</template>

<script lang="ts" setup>
import IconCatalog from "@/components/icons/IconCatalog.vue"
import IconUser from "@/components/icons/IconUser.vue"
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
  border-radius: 60px;
  padding: 0 20px;
  height: 46px;
  background: var(--color-card-bg);
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;
    color: var(--color-text);
  }
  &__button-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    margin-left: 4px;
  }
  &__separator {
    height: 30px;
    border-right: 1px solid #E5EAEF;
  }
}
</style>