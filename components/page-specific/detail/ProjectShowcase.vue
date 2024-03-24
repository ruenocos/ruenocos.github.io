<script setup lang="ts">
  const data = defineProps<{
    imageUrl: string
  }>();
</script>

<template>
<div class="project-showcase">
  <Background />
  <Border>
    <img class="project-showcase-image" :src="data.imageUrl" />
  </Border>
</div>
</template>

<style scoped>
  .project-showcase {
    @apply pb-20;
  }

  .project-showcase-image {
    @apply w-full h-66vh bg-cover bg-center;
  }

  .bordered {
    --border-color: var(--color-primary);

    img {
      @apply w-full h-auto;
    }
  }
</style>