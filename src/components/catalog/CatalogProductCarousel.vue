<template>
  <div class="product-carousel">
    <div class="product-carousel__header">
      <p
        v-if="props.title"
        class="product-carousel__title"
        v-text="props.title"
      />

      <div
        class="product-carousel__nav"
      >
        <ui-btn-round color="card" small @click="onPrevSlide">
          <icon-chevron-left />
        </ui-btn-round>
        <ui-btn-round color="card" small @click="onNextSlide">
          <icon-chevron-right />
        </ui-btn-round>
      </div>
    </div>

    <div>
      <swiper
        v-show="firstCarousel"
        :slidesPerView="2"
        :grid="{ rows: 2 }"
        :spaceBetween="16"
        :pagination="{ clickable: true }"
        :modules="[Grid, Pagination]"
        class="product-carousel__slider"
        @swiper="onSwiper1"
      >
        <swiper-slide v-for="product of products" :key="product.id">
          <catalog-product-card :product="product" class="product-carousel__product-card" />
        </swiper-slide>
      </swiper>

      <swiper
        v-show="!firstCarousel"
        :slidesPerView="2"
        :spaceBetween="16"
        :pagination="{ clickable: true }"
        :modules="[Pagination]"
        class="product-carousel__slider"
        @swiper="onSwiper2"
      >
        <swiper-slide v-for="product of products" :key="product.id">
          <catalog-product-card :product="product" class="product-carousel__product-card" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue"
import UiBtnRound from "@/components/ui/UiBtnRound.vue"
import IconChevronLeft from "@/components/icons/IconChevronLeft.vue"
import IconChevronRight from "@/components/icons/IconChevronRight.vue"
import CatalogProductCard from "@/components/catalog/CatalogProductCard.vue"
import type { IProduct } from "@/types"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Grid, Pagination } from 'swiper'

export interface IProps {
  title?: string,
  products: IProduct[]
}

const props = withDefaults(defineProps<IProps>(), {
  title: '',
})

const carousel1 = ref<any>({})
const carousel2 = ref<any>({})
const onPrevSlide = () => {
  carousel1.value.slidePrev()
  carousel2.value.slidePrev()
}
const onNextSlide = () => {
  //@ts-ignore
  carousel1.value.slideNext()
  //@ts-ignore
  carousel2.value.slideNext()
}

const onSwiper1 = (sw: any) => {
  carousel1.value = sw
}
const onSwiper2 = (sw: any) => {
  carousel2.value = sw
}

const firstCarousel = ref(true)
onMounted(() => {
  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      firstCarousel.value = entry.contentRect.height >= 844;
    })
  });

  const screen = document.querySelector('body');
  if (screen) {
    myObserver.observe(screen);
  }
})
</script>

<style lang="scss">
.product-carousel {
  .swiper-grid-column > .swiper-wrapper{
    flex-direction: unset !important;
  }
  .swiper-slide {
    margin-top: 0!important;
    height: 100%;
  }
  .swiper-pagination {
    top: unset;
    bottom: 0;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--color-accent);
  }

  &__header {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    display: flex;
    gap: 4px;
  }
  &__title {
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    color: var(--color-text);
  }
  &__product-card {
    margin-bottom: 16px;
    height: 100%;
  }
  &__slider {
    padding-bottom: 24px;
  }
}
</style>