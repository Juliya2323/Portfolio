<template lang="pug">
.wrapper 
  the-layout
    landing-page
</template>

<script setup>
import TheLayout from "./components/layout/TheLayout.vue";
import LandingPage from "./components/pages/LandingPage.vue";
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1800px) {
    max-width: 1280px;
  }

  @media (max-width: 1600px) {
    max-width: 1000px;
  }

  @media (max-width: 1250px) {
    max-width: 850px;
  }

  @media (max-width: 925px) {
    max-width: 94%;
  }
}
</style>
