<script setup lang="ts">

</script>

<template>
  <div class="side-by-side">
    <slot />
  </div>
</template>

<style>
  .side-by-side { @apply flex justify-between min-w-2/3; }
  .side-by-side > * { @apply max-w-1/2; }
</style>