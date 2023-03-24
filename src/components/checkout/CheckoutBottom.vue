<template>
<div class="checkout-bottom">
  <div class="checkout-bottom__total">
    <p class="checkout-bottom__total-text">
      Всього до сплати:&nbsp;
    </p>
    <p
      class="checkout-bottom__total-value"
      v-text="totalPrice + ' грн'"
    />
  </div>
  <p class="checkout-bottom__count text-light">
    В кошику {{ count }} {{ plural(count, 'товар', 'товари', 'товарів') }}
  </p>

  <ui-btn label="Підтверджую замовлення" @click="$emit('accept')" />
</div>
</template>

<script lang="ts" setup>
import plural from 'plural-ru'
import UiBtn from "@/components/ui/UiBtn.vue"

interface IProps {
  totalPrice: number
  count: number
}
defineProps<IProps>()
</script>

<style lang="scss" scoped>
.checkout-bottom {
  background: var(--color-card-bg);;
  box-shadow: 0px -4px 15px rgba(22, 25, 31, 0.1);
  padding: 16px;
  &__total {
    display: flex;
    margin-bottom: 5px;
    align-items: flex-end;
  }
  &__total-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-text);
  }
  &__total-value {
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
  }
  &__count {
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    margin-bottom: 16px;
  }
}
</style>