<template>
  <div class="product-card">
    <router-link to="/" class="product-card__img">
      <img :src="props.image" alt="">
    </router-link>
    <router-link to="/" class="product-card__title text-dark">
      {{ props.title }}
    </router-link>

    <div class="product-card__purchase">
      <div>
        <p
          v-if="props.oldPrice"
          class="product-card__old-price text-light"
          v-text="props.oldPrice + ' грн'"
        />
        <p
          :class="[oldPrice ? 'text-red' : 'text-pimary ']"
          class="product-card__price"
          v-text="props.price + ' грн'"
        />
      </div>

      <div class="product-card__cart-btn-wrap">
        <icon-cart-big-full v-if="inCart" @click="$emit('remove-from-cart')" class="product-card__cart-btn-full text-accent" />
        <icon-cart-big v-else @click="$emit('add-to-cart')" class="product-card__cart-btn text-accent" />
      </div>
    </div>

    <p
      v-if="inStock"
      class="product-card__in-stock text-success"
      v-text="'Є в наявності'"
    />
    <p
      v-else
      class="product-card__in-stock text-light"
      v-text="'Немає наявності'"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import IconCartBig from "@/components/icons/IconCartBig.vue"
import IconCartBigFull from "@/components/icons/IconCartBigFull.vue"

export interface IProps {
  title: string
  oldPrice?: number
  price?: number
  inStock: boolean
  image: string
  inCart?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  inCart: false
})
</script>

<style lang="scss" scoped>
.product-card {
  background: var(--color-card-bg);
  box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
  border-radius: 10px;
  padding: 10px 8px 16px;
  &__img {
    display: block;
    overflow: hidden;
    img {
      border-radius: 8px;
    }
  }
  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 8px;
    text-decoration: none;
    display: block;
    color: var(--color-text);
  }
  &__purchase {
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__old-price {
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 5px;
    text-decoration: line-through;
  }
  &__price {
    font-weight: 700;
  }
  &__in-stock {
    font-size: 12px;
    line-height: 120%;
  }
  &__cart-btn-full {
    cursor: pointer;
  }
  &__cart-btn {
    cursor: pointer;
    position: relative;
    left: -1.5px;
    top: -0.5px;
  }
  &__cart-btn-wrap {
    width: 44px;
    height: 42px;
    display: flex;
    align-items: flex-end;
  }
}
</style>