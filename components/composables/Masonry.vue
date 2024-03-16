<template>
  <div class="masonry">
    <slot />
  </div>
</template>

<style>
  .masonry {
    @apply md:column-count-2 column-count-1;
    column-gap: 6rem;
    row-gap: 2rem;
  }

  .masonry > * {
    width: 100%;
    display: inline-block;
    break-inside: avoid-column;
  }
</style>