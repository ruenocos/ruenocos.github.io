<script setup lang="ts">
const data = defineProps<{
  text?: string
  image?: string
}>()
</script>

<template>
  <Border class="grid-item">
    <div class="text-container" v-if="data.text">
      {{ data.text }}
    </div>
    <img class="image" :src="data.image" />
  </Border>
</template>

<style scoped>
  .grid-item {
    --border-color: var(--color-primary);
    @apply my-4;

    .text-container {
      @apply w-full h-full px-8 py-12 text-center;

      --grid-color: color-mix(in srgb, var(--color-tetriary), #0000 70%);
      background-size: 1.75rem 1.75rem;
      background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    }

    img {
      @apply w-full;
    }
  }
</style>