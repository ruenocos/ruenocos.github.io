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
      <Border class="card-image">
        <img :src="imageUrl" />
      </Border>
    </NuxtLink>
  </div>
</template>

<style scoped>
.large-project-card {
  @apply w-full sm:h-80vh flex flex-col-reverse sm:flex-row sm:justify-center sm:my-10vh lt-sm:mb-16;
}
.large-project-card > * { @apply sm:w-1/2; }

.card-info {
  @apply flex flex-col sm:self-center pr-16;
  span { @apply font-preset-subtitle lt-sm:font-preset-mobile-subtitle text-secondary pb-3; }
}

.card-image-container {
  @apply flex justify-end lt-sm:w-full lt-sm:pb-8 self-center;
}

.card-image {
  --border-color: var(--color-primary);
  @apply h-full md:w-6/7 w-full bg-cover bg-center;

  img {
    @apply w-full h-auto lt-sm:max-h-80vw object-cover;
  }
}
</style>