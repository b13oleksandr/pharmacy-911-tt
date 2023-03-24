<template>
  <div class="cart-item">
    <div class="cart-item__header">
      <div class="cart-item__provider-title">Постачальник:</div>
      <div class="cart-item__provider-value text-accent" v-text="item[0].product.provider" />
    </div>

    <div class="cart-item__body">
      <div v-for="subItem of item" :key="subItem.product.id" class="cart-item__row">
        <img :src="subItem.product.image" alt="" class="cart-item__image">
        <div>
          <p class="cart-item__title" v-text="subItem.product.title" />
          <div class="cart-item__prices">
            <p class="cart-item__price" v-text="subItem.product.price + ' грн'" />
            <p class="cart-item__old-price text-light" v-text="subItem.qnt + ' шт'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface IProps {
  item: Array<any>
}
defineProps<IProps>()
</script>

<style lang="scss" scoped>
.cart-item {
  background: var(--color-card-bg);
  box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
  border-radius: 24px;
  &__provider-title {
    margin-right: 4px;
    color: var(--color-text);
  }
  &__provider-title,
  &__provider-value {
    margin-right: 4px;
    font-weight: 800;
    font-size: 14px;
    line-height: 120%;
  }
  &__header {
    padding: 16px 24px;
    display: flex;
    align-items: center;
  }
  &__body {

  }
  &__image {
    border: 1px solid var(--color-input-border);
    border-radius: 8px;
    max-width: 60px;
    margin-right: 8px;
  }
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 8px;
    color: var(--color-text);
  }
  &__prices {
    display: flex;
    align-items: center;
  }
  &__price {
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    margin-right: 24px;
    color: var(--color-text)
  }
  &__old-price {
    font-size: 14px;
    line-height: 120%;
  }
  &__row {
    display: flex;
    padding: 16px;
    align-items: flex-start;
    border-top: 1px solid var(--color-input-border);
  }
}
</style>