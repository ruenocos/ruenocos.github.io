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
  @apply w-full h-80vh flex justify-center my-10vh;
}
.large-project-card > * { @apply w-1/2; }

.card-info {
  @apply flex flex-col self-center pr-16;
  span { @apply font-preset-subtitle text-secondary pb-3; }
}
.card-image-container {
  @apply flex justify-end;
}

.card-image {
  --border-color: var(--color-primary);
  background-size: cover;
  @apply h-full md:w-6/7 w-full;
}
</style>