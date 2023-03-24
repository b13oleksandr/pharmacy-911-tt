<template>
  <ui-product-card
    :title="props.product.title"
    :in-stock="props.product.inStock"
    :old-price="props.product.oldPrice"
    :price="props.product.price"
    :image="props.product.image"
    :in-cart="inCart(product)"
    @add-to-cart="onAddToCart"
    @remove-from-cart="onRemoveFromCart"
  />
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores/cart"
import type { IProduct } from "@/types"
import UiProductCard from "@/components/ui/UiProductCard.vue"

interface ICatalogProductCardProps {
  product: IProduct
}

const props = withDefaults(defineProps<ICatalogProductCardProps>(), {
  product: () => ({}),
})

const { addItem, inCart, removeItem } = useCartStore()

const onAddToCart = () => {
  addItem({
    product: props.product,
    qnt: 1
  })
}
const onRemoveFromCart = () => {
  removeItem(props.product)
}
</script>
