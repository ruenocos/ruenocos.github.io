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
      <div class="mobile-sugar after" />
      <span>
      Designer
    </span>
    </div>
  </div>
</template>

<style scoped>
  .mobile-sugar { @apply w-full border-primary border-b-2 relative md:hidden; }
  .mobile-sugar {
    &::before {
      @apply absolute bg-primary p-4px top--3px;
      content: '';
    }
  }
  .mobile-sugar.after {
    &::before {
      @apply right-0;
    }
  }

  .hero {
    @apply flex self-center flex-col justify-center max-w-screen w-full font-700;
    @apply text-16    sm:text-24      md:text-30;
    @apply leading-16 sm:leading-24   md:leading-30;

    font-family: 'Space Grotesk', sans-serif;

    margin-top: calc(-100vh / 8 * 2);
    height: calc(100vh / 8 + 100vh);

    .line {
      @apply flex justify-between items-center pb-12;

      >*:first-child { @apply mr-6; }
      >*:last-child { @apply ml-6; }

      font-size: 100%;

      .video-container {
        @apply max-w-full flex-grow hidden md:flex;
        --border-color: var(--color-primary);

        .video {
          @apply h-32;
          width: 177%;
          object-fit: cover;
        }
      }

      .scroller {
        --border-color: var(--color-primary);
        @apply font-sans h-32 items-center py-4 px-6 hidden md:flex;
        font-weight: normal;
        font-size: 4.4rem;
      }
    }
  }
</style>