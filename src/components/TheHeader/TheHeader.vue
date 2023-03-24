<template>
  <header class="header" :class="{ 'header--center': isSimpleHeader }">
    <TheHeaderLogo @click="onLogo" />
    <TheHeaderSearch v-if="!isSimpleHeader" class="header__search" />
    <TheHeaderCartBtn v-if="!isSimpleHeader" :count="count" @click="onCart" />
  </header>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart"
import { storeToRefs } from "pinia"
import TheHeaderSearch from "@/components/TheHeader/TheHeaderSearch.vue"
import TheHeaderCartBtn from "@/components/TheHeader/TheHeaderCartBtn.vue"
import TheHeaderLogo from "@/components/TheHeader/TheHeaderLogo.vue"

const router = useRouter()
const route = useRoute()
const { count } = storeToRefs(useCartStore())
const onCart = () => {
  router.push({ path: 'checkout' })
}

const onLogo = () => {
  router.push({ path: '/' })
}

const isSimpleHeader = computed(() => {
  return route.path === '/checkout'
})
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 4px 15px rgba(22, 25, 31, 0.1);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 18px 0 16px;
  background: var(--color-card-bg);
  &__search {
    margin: 0 8px;
  }
  &--center {
    justify-content: center;
  }
}
</style>