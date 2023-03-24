<template>
  <div v-if="props.modelValue" class="popup">
    <div class="popup__backdrop" @click="onBackdrop" />
    <div class="popup__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

export interface IProps {
  modelValue: boolean
}

const props = defineProps<IProps>()
const emit = defineEmits(['update:model-value'])
const onBackdrop = () => {
  emit('update:model-value', false)
}
</script>

<style lang="scss" scoped>
.popup {
  padding: 16px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(52, 52, 66, 0.7);
  }
  &__content {
    background: var(--color-card-bg);
    box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
    border-radius: 16px;
    max-height: 100%;
    padding: 24px 16px;
    width: 100%;
    max-width: var(--v-max-app-width);
  }
}
</style>