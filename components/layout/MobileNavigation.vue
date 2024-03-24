<script setup lang="ts">
import StrokedText from "~/components/composables/StrokedText.vue";

const nav = ref({
  navigation: [
    { url: '/projects', name: 'Projects' },
    { url: '/about', name: 'About' },
    { url: '/contact', name: 'Get in touch' }
  ]
});

const checkbox = ref(null);

const onClick = () =>
{
  console.log(checkbox);
  checkbox.value.checked = false;
}
</script>

<template>
  <label class="mobile-nav-button-container" for="mobile-nav-toggle">
    <div class="mobile-nav-button" />
  </label>
  <input hidden ref="checkbox" type="checkbox" id="mobile-nav-toggle" />
  <div class="mobile-nav-container">
    <nav>
      <span class="label">Menu</span>
      <NuxtLink @click="onClick" class="item" :key="item.url" :to="item.url" v-for="item in nav.navigation">
        <StrokedText :text="item.name" />
      </NuxtLink>
    </nav>
  </div>
  <NuxtLink to="/">
    <img class="mobile-logo" alt="Wessel Oud" src="../../assets/logo/logoWO-mobile.svg" />
  </NuxtLink>
</template>

<style>
  .mobile-logo {
    @apply absolute left-8 top-5 h-12 sm:hidden;
  }

  .mobile-nav-container {
    @apply fixed right-0 w-0 overflow-x-hidden top-0 h-screen z-1 flex justify-end;
    position: fixed;
    background: rgba(61, 59, 64, 0.8);

    nav {
      @apply w-0;
    }
  }

  #mobile-nav-toggle:checked ~ .mobile-nav-container {
    @apply w-screen;

    nav {
      @apply w-full sm:w-2/3 md:w-1/3;
    }
  }
   .mobile-nav-container {
    @apply self-end;

    nav {
      @apply bg-background flex flex-col justify-center h-full overflow-x-hidden px-24;
      transition: width .2s ease-out;

      .label {
        @apply font-preset-subtitle text-tertiary;
      }

      .stroked {
        @apply font-preset-h1 font-preset-mobile-h1;
      }
    }
  }

  .mobile-nav-button-container {
    @apply sticky self-end right-8 top-5 z-2 flex flex-col justify-center fixed sm:right-16 sm:opacity-0;
    transition: opacity .1s ease-out;
  }

  .mobile-nav-button {
    @apply w-12 h-12 cursor-pointer;
    background-image: url("/icons/menu.svg");
    background-size: cover;
  }

  .router-link-exact-active > .stroked {
    @apply text-primary;
  }

  .router-link-exact-active > .stroked::after {
    @apply hidden;
  }

</style>