<script setup lang="ts">

</script>

<template>
<div class="borealis-placer">
  <div class="borealis-container">
    <div class="borealis"></div>
  </div>
</div>
</template>

<style scoped>

.borealis-container {
  @apply z--20 absolute;
  left: 0;
  right: 0;

  margin-top: -25%;
  opacity: .8;

  height: 100vh;
}

.borealis {
  @apply w-screen h-full overflow-hidden;

  filter: blur(50px);

  background-image: url("~/assets/elements/Background-bolearis.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>