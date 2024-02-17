<script setup lang="ts">

</script>

<template>
<div class="borealis-container">
  <slot />
  <div class="borealis"></div>
</div>
</template>

<style scoped>
.borealis-container {
  @apply h-7xl relative;
}

.borealis {
  @apply sticky;

  left: 0;
  right: 0;

  bottom: 0;
  top: 0;

  min-height: 100vh;
  width: 100vw;

  background-image: url("~/assets/elements/Background_gradient.png");
  object-fit: cover;
}
</style>