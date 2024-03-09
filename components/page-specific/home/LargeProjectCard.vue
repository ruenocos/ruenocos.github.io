<script setup lang="ts">
const props = defineProps<{
  title: string,
  imageUrl: string,
  to: string
}>();

const { title, imageUrl, to } = props;
</script>

<template>
  <div class="large-project-card">
      <NuxtLink :to="to" class="card-info">
        <span>Showcase</span>
        <h3>{{ title }}</h3>
      </NuxtLink>
    <NuxtLink :to="to" class="card-image-container">
      <Border class="card-image" :style="{backgroundImage: `url(${imageUrl})`}" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.large-project-card {
  @apply w-full sm:h-80vh flex flex-col-reverse sm:flex-row justify-center sm:my-10vh lt-sm:mb-16;
}
.large-project-card > * { @apply sm:w-1/2; }

.card-info {
  @apply flex flex-col self-center pr-16;
  span { @apply font-preset-subtitle lt-sm:font-preset-mobile-subtitle text-secondary pb-3; }
}

.card-image-container {
  @apply flex justify-end sm:h-full lt-sm:w-80vw lt-sm:h-80vw lt-sm:pb-8 self-center;
}

.card-image {
  --border-color: var(--color-primary);
  background-size: cover;
  @apply h-full md:w-6/7 w-full;
}
</style>