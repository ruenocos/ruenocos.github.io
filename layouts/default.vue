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
  @apply flex flex-col w-screen px-8 lg:px-0 lg:w-1000px items-center;
}

body { @apply overflow-x-hidden; }
</style>