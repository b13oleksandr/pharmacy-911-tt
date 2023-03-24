<template>
  <div class="checkout-cart">
    <div class="checkout-cart__item" v-for="(provider, i) of items" :key="i">
      <checkout-cart-item :item="provider" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import CheckoutCartItem from "@/components/checkout/CheckoutCartItem.vue"

interface IProps {
  items: object
}
defineProps<IProps>()
</script>

<style lang="scss" scoped>
.checkout-cart {
  &__item {
    margin-bottom: 16px;
  }
}
</style>