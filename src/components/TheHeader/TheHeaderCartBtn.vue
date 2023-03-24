<template>
  <div class="header-cart">
    <ui-btn-round flat>
      <IconCart />
    </ui-btn-round>

    <div v-if="count" class="header-cart__counter" v-text="count" />
  </div>
</template>

<script lang="ts" setup>
import UiBtnRound from "@/components/ui/UiBtnRound.vue"
import IconCart from "@/components/icons/IconCart.vue"

interface IProps {
  count?: number
}
defineProps<IProps>()
</script>

<style lang="scss" scoped>
.header-cart {
  position: relative;
  &__counter {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #F6D20B;
    border: 2px solid #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>
