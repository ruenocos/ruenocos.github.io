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
  @apply flex justify-between pb-32;

  div {
    @apply py-8 w-1/2;
  }

  h3 {
    @apply w-1/2 mr-12;
  }
}
</style>