<script setup lang="ts">
  const data = defineProps<{
    imageUrl: string
  }>();
</script>

<template>
<div class="project-showcase">
  <Background />
  <div class="project-showcase-image" :style="{ backgroundImage: `url(${data.imageUrl})` }" />
</div>
</template>

<style scoped>
  .project-showcase {
    @apply pb-20;
  }

  .project-showcase-image {
    @apply w-full h-66vh bg-cover bg-center;
  }
</style>