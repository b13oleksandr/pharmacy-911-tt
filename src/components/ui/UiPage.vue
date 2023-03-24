<template>
  <div class="page" :class="!noFixedHeight && 'page--fixed-height'">
    <ui-breadcrumbs
      v-if="breadcrumbs.length"
      :items="props.breadcrumbs"
      class="page__breadcrumbs"
    />

    <h1 v-if="props.title" class="page__title text-dark" v-text="title" />

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import UiBreadcrumbs from "@/components/ui/UiBreadcrumbs.vue"

export interface IProps {
  breadcrumbs?: Array<{ title: string, link: string }>
  title?: string
  noFixedHeight?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  breadcrumbs: () => [],
})
</script>

<style lang="scss" scoped>
.page {
  padding: 16px;
  &__breadcrumbs {
    margin-bottom: 16px;
  }
  &__title {
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 24px;
    color: var(--color-text);
  }
  &--fixed-height {
    height: calc(100vh - 60px);
  }
}
</style>