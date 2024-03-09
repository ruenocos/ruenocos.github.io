<template>
  <div class="hoverable">
    <slot />
    <div class="hoverable-on-hover">
      <slot name="on-hover" />
    </div>
  </div>
</template>

<style scoped>
.hoverable-on-hover { @apply hidden }
.hoverable:hover > .hoverable-on-hover { @apply block; }
</style>
