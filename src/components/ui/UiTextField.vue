<template>
  <div class="text-field">
    <div class="text-field-wrap">
      <div class="text-field__label-wrap">
        <label
          for=""
          v-text="label"
          class="text-field__label"
        />
        <span v-if="required" class="text-red"> *</span>
      </div>
      <input
        v-if="phone"
        v-maska
        data-maska="+380 ## ###-##-##"
        :placeholder="placeholder"
        :value="modelValue"
        :class="error && 'text-field--error'"
        class="text-field__input"
        type="text"
        @input="$emit('update:model-value', $event.target.value)"
      />
      <input
        v-else
        :placeholder="placeholder"
        :value="modelValue"
        :class="error && 'text-field--error'"
        class="text-field__input"
        type="text"
        @input="$emit('update:model-value', $event.target.value)"
      />
    </div>
    <div
      v-if="error && errorMessage"
      class="text-red"
      >
        {{ errorMessage }}
      </div>
    </div>
</template>


<script lang="ts" setup>
import { vMaska } from "maska"

interface IProps {
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  phone?: boolean
}
withDefaults(defineProps<IProps>(), {
  modelValue: ''
})
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
    padding: 0 16px;
    height: 45px;
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
    }
  }
  &--error {
    border: 1px solid var(--color-red);;
    color: var(--color-red);
  }
}
</style>