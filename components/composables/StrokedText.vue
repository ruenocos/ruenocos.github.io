<script setup lang="ts">
let { text } = defineProps<{
  text: string
}>();
</script>

<template>
  <span class="stroked" :data-text="text">
    {{ text }}
  </span>
</template>

<style scoped>
.stroked {
  @apply inline-block relative text-background;

  z-index: 0;
  letter-spacing: 2px;
}

.stroked::after {
  content: attr(data-text);

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;
  font-size: 1em;

  letter-spacing: 2px;

  -webkit-text-stroke: 2px var(--color-primary);
}
</style>