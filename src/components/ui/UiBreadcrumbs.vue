<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__items">
      <icon-arrow-left class="breadcrumbs__home" @click="$router.push({ path: '/' })" />
      <div
        v-for="(item, i) of innerItems"
        :key="i"
        :class="{ 'pr-4':  i === innerItems.length - 1 }"
        class="breadcrumbs__item"
      >
        <router-link
          v-if="item.link"
          :to="i === innerItems.length - 1 ? '' : item.link"
          :class="i === innerItems.length - 1 ? 'text-dark' : 'text-light'"
          class="text-small whitespace-nowrap"
        >
          {{ item.title }}
        </router-link>
        <span v-else v-text="item.title" class="text-light" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue"
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue"

export interface IProps {
  items: Array<{ title: string, link: string }>
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
})

const innerItems = computed(() => [
  // { title: 'Головна', link: '/' },
  ...props.items
])
</script>

<style lang="scss" scoped>
.breadcrumbs {
  overflow: auto;

  &__home {
    margin-right: 8px;
  }

  &__items {
    display: flex;
    align-items: center;
    max-width: 100%;
  }

  &__item {
    display: flex;
    align-items: center;
  }
}
</style>
