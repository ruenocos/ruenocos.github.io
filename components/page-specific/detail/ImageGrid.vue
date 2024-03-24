<template>
  <div class="image-grid">
    <div>
      <slot name="left" />
    </div>
    <div :class="data.offset ? 'offset' : ''">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.image-grid {
  @apply flex sm:flex-row flex-col justify-between;

  > div {
    @apply w-1/2 flex flex-col w-full;
  }

  > div:first-child {
    @apply sm:pr-3;
  }

  > div:last-child {
    @apply sm:pl-3;
  }

  > div.offset {
    @apply sm:pt-24;
  }

}
</style>