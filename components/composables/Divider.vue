<script setup lang="ts">
const props = defineProps<{
  slug: string | undefined,
  firstLine: string,
  secondLine: string
}>();

const { slug, firstLine, secondLine } = props;
</script>

<template>
  <div class="cta">
    <span class="slug" v-if="slug">{{ slug }}</span>
    <h2>{{ firstLine }}</h2>
    <div class="second-line-container">
      <StrokedText :text="secondLine" />
      <div class="line" />
    </div>
  </div>
</template>

<style scoped>
.cta .slug { @apply text-secondary font-preset-subtitle sm:font-preset-mobile-subtitle pb-2; }

.cta { @apply flex flex-col w-full py-16 sm:py-32; }
.cta * { @apply text-4xl sm:text-7xl font-700; }

.second-line-container { @apply flex pt-2; }

.line {
  @apply border-2px border-primary border-solid border-t-none border-l-none border-r-none;
  @apply ml-12 w-full self-center;

  animation: slide-out;
  animation-iteration-count: 1;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;

  &::before {
    content: '';
    @apply  absolute w-7px h-7px bg-primary;
    margin-top: -2px;
  }
}

@keyframes slide-out
{
  0% { width: 0; }
  100% { width: 100%; }
}
</style>