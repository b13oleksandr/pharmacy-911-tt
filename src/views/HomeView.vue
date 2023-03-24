<template>
  <ui-page class="home-page">
    <div v-if="productsLoading" class="home-page__product-preloader-wrap">
      <ui-preloader />
    </div>
    <catalog-product-carousel
      v-else
      title="Найчастіше купують"
      :products="products"
    />

    <home-banner class="home-page__banner" />

    <home-tabbar class="home-page__tabbar" @catalog="onShowPopup" @accaunt="onShowPopup" />

    <ui-popup v-model="showPopup">
      <TheOfferPopup @ok="showPopup = false" />
    </ui-popup>
  </ui-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { catalogService } from "@/services/catalog"
import CatalogProductCarousel from "@/components/catalog/CatalogProductCarousel.vue"
import UiPage from "@/components/ui/UiPage.vue"
import HomeBanner from "@/home/HomeBanner.vue"
import HomeTabbar from "@/home/HomeTabbar.vue"
import UiPopup from "@/components/ui/UiPopup.vue"
import TheOfferPopup from "@/components/TheOfferPopup.vue"
import UiPreloader from "@/components/ui/UiPreloader.vue";

const showPopup = ref(false)
const { fetchProducts } = catalogService()

const products = ref([])
const productsLoading = ref(false)
const onShowPopup = () => {
  showPopup.value = true
}

onMounted(async () => {
  productsLoading.value = true
  // @ts-ignore
  products.value = await fetchProducts()
  productsLoading.value = false
})

</script>


<style lang="scss" scoped>
.home-page {
  padding-bottom: 80px;
  background-image: url("@/assets/images/bg.png");
  @media (prefers-color-scheme: dark) {
    background-image: url("@/assets/images/bg-dark-theme.png");
    background-color: #525271;
  }
  &__banner {
    margin-top: 16px;
  }
  &__tabbar {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
  &__product-preloader-wrap {
    display: flex;
    padding: 120px 0;
    justify-content: center;
  }
}
</style>