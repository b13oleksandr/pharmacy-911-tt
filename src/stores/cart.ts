import { ref, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import type { ICartItem } from "@/types"

export const useCartStore = defineStore('cart', () => {
  const items = ref<ICartItem[]>([])

  const count = computed(() => items.value.length)
  const totalPrice = computed(() => items.value.reduce((acc: number, item: ICartItem) => {
    acc += item.product.price || 0
    return acc
  }, 0))

  const groupedByProvider = computed(() => {
    const providers: any = {}

    items.value.forEach(item => {
      if (!item.product.provider) {
        return
      }

      if (!providers[item.product.provider]) {
        providers[item.product.provider] = []
      }

      providers[item.product.provider].push(item)
    })

    return providers
  })

  const addItem = (item: ICartItem) => {
    items.value.push(item)
  }

  const removeItem = (product: any) => {
    items.value = items.value.filter(item => item.product.id !== product.id)
  }

  const inCart = (product: any) => {
    return !!items.value.find(item => item.product.id === product.id)
  }

  return {
    items: readonly(items),
    addItem,
    count,
    inCart,
    removeItem,
    totalPrice,
    groupedByProvider
  }
})
