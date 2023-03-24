<template>
  <button
    class="btn"
    :class="[
      `bg-${props.color}`,
      props.flat && 'btn-round--flat'
    ]"
    v-text="label"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

export interface IProps {
  color?: string
  flat?: boolean
  label: string
}

const props = withDefaults(defineProps<IProps>(), {
  color: 'accent',
  flat: false
})
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 22px;
  width: 100%;
  height: 44px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 15px rgba(22, 25, 31, 0.1));
  color: var(--color-button-text);
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  &--flat {
    filter: none;
  }
}
</style>
