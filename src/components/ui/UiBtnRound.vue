<template>
  <button
    class="btn-round"
    :class="[
      `bg-${props.color}`,
      props.flat && 'btn-round--flat',
      props.small && 'btn-round--small'
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

export interface IProps {
  color?: string
  flat?: boolean
  small?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  color: 'accent'
})
</script>

<style lang="scss" scoped>
.btn-round {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 15px rgba(22, 25, 31, 0.1));
  color: var(--color-button-text);
  &--flat {
    filter: none;
  }
  &--small {
    width: 38px;
    height: 38px;
  }
}
</style>
