<script setup lang="ts">
const props = defineProps<{
  firstLine: string,
  secondLine: string
}>();

const { firstLine, secondLine } = props;
</script>

<template>
  <div class="cta">
    <h2>{{ firstLine }}</h2>
    <div class="second-line-container">
      <div class="second-line" :data-text="secondLine">
        {{secondLine}}
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<style scoped>
.cta { @apply flex flex-col w-full py-32; }
.cta * { @apply text-7xl font-700; }

.second-line {
  @apply flex relative text-background;
  @apply text-7xl;

  letter-spacing: 2px;
}

.second-line::after {
  content: attr(data-text);

  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;
  font-size: 1em;

  letter-spacing: 2px;

  -webkit-text-stroke: 2px var(--color-primary);
}

.second-line-container { @apply flex; }

.line {
  @apply border-1px border-primary border-solid border-t-none border-l-none border-r-none;
  @apply ml-12 w-full self-center;

  margin-top: 1rem;
  animation: slide-out;
  animation-iteration-count: 1;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;

  &::before {
    content: '';
    @apply  absolute w-5px h-5px bg-primary;
    margin-top: -2px;
  }
}

@keyframes slide-out
{
  0% { width: 0; }
  100% { width: 100%; }
}
</style>