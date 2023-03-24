<template>
  <div>
    <img src="@/assets/images/logo.svg" alt="Logo" class="logo-light-theme">
    <img src="@/assets/images/logo-dark-theme.svg" alt="Logo" class="logo-dark-theme">
  </div>
</template>

<style lang="scss">
.logo-dark-theme {
  display: none;
}
@media (prefers-color-scheme: dark) {
  .logo-dark-theme {
    display: block;
  }
  .logo-light-theme {
    display: none;
  }
}
</style>