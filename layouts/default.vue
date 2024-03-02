<script setup lang="ts">
import TopBar from "~/components/layout/TopBar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div class="layout">
    <TopBar />
    <slot />
    <Footer />
  </div>
</template>

<style>
.layout {
  @apply flex flex-col w-screen px-8 lg:px-0 lg:w-screen-lg items-center;
}
</style>