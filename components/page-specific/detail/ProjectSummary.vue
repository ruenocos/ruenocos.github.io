<script setup lang="ts">
const data = defineProps<{
  client: {
    label: string,
    image: string | undefined
  }
  roles: string[]
}>();

console.log(data);
</script>

<template>
<div class="project-summary">
  <div class="project-client">
    <span class="label">
      Client
    </span>
    <div class="client-image" v-if="data.client.image" :style="{ backgroundImage: `url(${data.client.image})` }">

    </div>
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
    <div>
      Button
    </div>
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
  @apply bg-center bg-cover min-h-10 w-30;
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
</style>