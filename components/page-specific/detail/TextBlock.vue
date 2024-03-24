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
  @apply flex justify-between;

  div {
    @apply py-8;
  }

  * {
    @apply max-w-1/2;
  }
}
</style>