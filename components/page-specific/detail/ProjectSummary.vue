<script setup lang="ts">
const data = defineProps<{
  client: {
    label: string,
    image: string | undefined
  }
  roles: string[],
  url: string
}>();

console.log(data);
</script>

<template>
<div class="project-summary">
  <div class="project-client">
    <span class="label">
      Client
    </span>
    <img class="client-image" v-if="data.client.image" :src="data.client.image" />
    <span v-else>
      {{ data.client.label }}
    </span>
  </div>
  <div class="project-roles">
    <span class="label">
      Roles
    </span>
    <span class="role" :key="role" v-for="role in roles">
      <div class="role-dot" />
      {{ role }}
    </span>
  </div>
  <div class="project-description">
    <div class="project-challenge">
      <span class="label">
        The challenge
      </span>
      <slot />
    </div>
    <NuxtLink target="_blank" :to="data.url">
      <Border class="view-button">
        View website
      </Border>
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>
.project-summary {
  @apply flex justify-between lt-md:flex-col;
}

.project-summary > * {
  @apply px-4 flex flex-col lt-md:pb-8;
}

.client-image {
  @apply min-h-10 w-30;
}

.role {
  @apply flex items-center;
}

.role-dot {
  @apply w-2 h-2 mr-2 bg-secondary rounded-xl;
}

.project-description {
  @apply w-1/2 lt-md:w-unset;
}

.project-challenge {
  @apply flex flex-col;
}

.label {
  @apply font-preset-subtitle text-tertiary pb-6;
}

.view-button {
  --border-color: var(--color-primary);
  @apply inline-block p-3 mt-4 font-preset-button font-preset-mobile-button;
}
</style>