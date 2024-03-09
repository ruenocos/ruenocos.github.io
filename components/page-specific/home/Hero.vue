<script setup lang="ts">

</script>

<template>
  <div class="hero">
    <div class="line">
      <span>
        Creative
      </span>
      <Border class="video-container">
        <video class="video" loop autoplay src="../../../assets/videos/test-showcase.mp4" />
      </Border>
      <div class="mobile-sugar" />
    </div>
    <div class="line">
      <Border class="scroller">
        Website
      </Border>
      <div class="mobile-sugar" />
      <span>
      Designer
    </span>
    </div>
  </div>
</template>

<style scoped>
  .mobile-sugar { @apply bg-red py-4 w-full; }

  .hero {
    @apply flex self-center flex-col justify-center font-preset-h1 max-w-screen w-full;

    margin-top: calc(-100vh / 8 * 2);
    height: calc(100vh / 8 + 100vh);

    .line {
      @apply flex justify-between items-center;

      :first-child { @apply mr-6; }
      :last-child { @apply ml-6; }

      font-size: 100%;

      .video-container {
        @apply max-w-full flex-grow hidden sm:flex;
        --border-color: var(--color-primary);

        .video {
          @apply h-32;
          width: 177%;
          object-fit: cover;
        }
      }

      .scroller {
        --border-color: var(--color-primary);
        @apply font-sans h-32 items-center py-4 px-6 hidden sm:flex;
        font-weight: normal;
        font-size: 4.4rem;
      }
    }
  }
</style>