<template>
  <ui-page no-fixed-height :breadcrumbs="[{ title: 'Кошик', link: '' }]" title="Оформлення замовлення" class="page-checkout">
    <template v-if="count">
      <div class="page-checkout__section">
        <p class="page-checkout__section-title">
          Контактні дані
        </p>

        <ui-text-field
          v-model="name"
          label="Ім’я"
          placeholder="Введіть ваше ім’я"
          class="page-checkout__field"
          required
          :error="!!errors.name"
          :error-message="errors.name"
        />

        <ui-text-field
          v-model="lastName"
          label="Прізвище"
          placeholder="Введіть ваше прізвище"
          class="page-checkout__field"
          required
          :error="!!errors.lastName"
          :error-message="errors.lastName"
        />

        <ui-text-field
          v-model="phone"
          label="Номер телефону"
          placeholder="Введіть ваш номер телефону"
          class="page-checkout__field"
          required
          phone
        />

        <ui-text-field
          v-model="email"
          label="Email"
          placeholder="Введіть ваш email"
          class="page-checkout__field"
        />

        <ui-textarea
          v-model="comment"
          label="Коментар"
          placeholder="Напишіть свій коментар до замовлення"
          class=""
        />
      </div>

      <div class="page-checkout__section">
        <p class="page-checkout__section-title">
          Ваше замовлення
        </p>
        <checkout-cart class="page-checkout__cart" :items="groupedByProvider" />
      </div>

      <checkout-bottom
        :total-price="totalPrice"
        :count="count"
        class="page-checkout__bottom"
        @accept="onAccept"
      />

      <ui-popup v-model="validationPopup">
        Помилка валідації
      </ui-popup>
    </template>

    <div class="page-checkout__empty" v-else>
      Кошик пустий
    </div>
  </ui-page>
</template>

<script lang="ts" setup>
import UiPage from "@/components/ui/UiPage.vue"
import UiTextField from "@/components/ui/UiTextField.vue"
import UiTextarea from "@/components/ui/UiTextarea.vue"
import CheckoutBottom from "@/components/checkout/CheckoutBottom.vue"
import UiPopup from "@/components/ui/UiPopup.vue"

import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart"
import { storeToRefs } from "pinia"
import CheckoutCart from "@/components/checkout/CheckoutCart.vue";

const router = useRouter()
const { totalPrice, count, groupedByProvider } = storeToRefs(useCartStore())

const validationPopup = ref(false)
const email = ref('')
const comment = ref('')

const { errors, validate } = useForm({
  validationSchema: {
    name: yup.string()
      .required("Обов'язкове поле")
      .min(20, 'Довжина має бути не менше 20 символів')
      .matches(/([а-яА-Я]+|і+|ы+)/ , 'Введіть кирилицю'),
    lastName: yup.string()
      .required('Обов\'язкове поле')
      .min(20, 'Довжина має бути не менше 20 символів')
      .matches(/([а-яА-Я]+|і+|ы+)/ , 'Введіть кирилицю'),
    phone: yup.string().required("Обов'язкове поле"),
  }
})

const { value: name } = useField<string>('name', undefined)
const { value: lastName } = useField<string>('lastName', undefined)
const { value: phone } = useField<{ phone: string, code: string }>('phone', undefined, { initialValue: '+380 '})

const onAccept = async () => {
  const { valid } = await validate()

  console.log(valid)

  if (!valid) {
    validationPopup.value = true
    return
  }

  router.push({ path: '/' })
}
</script>

<style lang="scss" scoped>
.page-checkout {
  background: var(--color-background);
  padding-bottom: 150px;
  min-height: 100vh;
  &__section-title {
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 16px;
    color: var(--color-text);
  }
  &__field {
    margin-bottom: 16px;
  }
  &__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    max-width: var(--v-max-app-width);
  }
  &__cart {
    margin-top: 24px;
  }
  &__empty {
    color: var(--color-text);
  }
  &__section {
    margin-bottom: 24px;
  }
}
</style>