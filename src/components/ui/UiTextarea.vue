<template>
  <div class="text-field">
    <div class="text-field__label-wrap">
      <label
        for=""
        v-text="props.label"
        class="text-field__label"
      />
      <span v-if="props.required" class="text-red"> *</span>
    </div>
    <textarea :value="modelValue" :placeholder="props.placeholder" class="text-field__input" @input="$emit('update:model-value', $event.target.value)" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

interface IProps {
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
}

const props = withDefaults(defineProps<IProps>(), {})
</script>

<style lang="scss" scoped>
.text-field {
  &__label-wrap {
    margin-bottom: 8px;
  }
  &__label {
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: var(--color-text);
  }
  &__input {
    padding: 12px 16px;
    height: 120px;
    background: var(--color-input);
    border: 1px solid var(--color-input-border);
    border-radius: 8px;
    width: 100%;
    outline: none;
    color: var(--color-text);

    &::placeholder {
      font-size: 14px;
      line-height: 150%;
      color: #8592AA;
      font-family: sans-serif;
    }
  }
}
</style>