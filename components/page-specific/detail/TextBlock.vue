<script setup lang="ts">
  const { title } = defineProps<{
    title: string
  }>()
</script>

<template>
<div class="text-block">
  <h3>
    {{ title }}
  </h3>
  <div>
    <slot />
  </div>
</div>
</template>

<style scoped>
.text-block {
  @apply flex sm:justify-between pb-32 flex-col sm:flex-row;

  div {
    @apply sm:py-8 sm:w-1/2;
  }

  h3 {
    @apply sm:w-1/2 sm:mr-12 py-4;
  }
}
</style>