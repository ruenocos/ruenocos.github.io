<script setup lang="ts">

</script>

<template>
  <div class="bordered">
    <slot />
    <span class="points left"></span>
    <span class="points right"></span>
  </div>
</template>

<style scoped>
.bordered {
  @apply border-2px relative;
  --square-size: 2.5;
  border-color: var(--border-color);

  .points {
    @apply absolute left-0 right-0 top-0 bottom-0;
  }

  .points.left::before, .points.left::after {
    left: calc(var(--square-size) / 4 * -.5rem);
  }

  .points.right::before, .points.right::after {
    right: calc(var(--square-size) / 4 * -.5rem);
  }

  .points::before {
    @apply block w-2 h-2 absolute;
    content: '';
    top: calc(var(--square-size) / 4 * -.5rem);
    background-color: var(--border-color);
  }

  .points::after {
    @apply block w-2 h-2 absolute;
    content: '';
    bottom: calc(var(--square-size) / 4 * -.5rem);
    background-color: var(--border-color);
  }

}
</style>