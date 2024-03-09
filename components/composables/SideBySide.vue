<script setup lang="ts">

</script>

<template>
  <div class="side-by-side">
    <slot />
  </div>
</template>

<style>
  .side-by-side { @apply flex flex-col sm:flex-row justify-between min-w-2/3; }
  .side-by-side > * { @apply sm:max-w-1/2; }
</style>