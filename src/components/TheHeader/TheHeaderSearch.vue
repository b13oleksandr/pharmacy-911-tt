<template>
  <div class="header-search">
    <input type="text" class="header-search__input" placeholder="Пошук">
    <icon-search />
  </div>
</template>

<script lang="ts" setup>
import IconSearch from "@/components/icons/IconSearch.vue"
</script>

<style lang="scss" scoped>
.header-search {
  flex: 1;
  display: flex;
  padding: 0 16px;
  height: 44px;
  border: 1px solid var(--color-light);;
  border-radius: 30px;
  align-items: center;
  background: var(--color-input);
  color: var(--color-light);
  &__input {
    padding-right: 14px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: var(--color-input);
    color: var(--color-light);
    &::placeholder {
      font-size: 14px;
      line-height: 19px;
      color: var(--color-light);
    }
  }
}
</style>