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
  <img class="mobile-logo" alt="Wessel Oud" src="../../assets/logo/logoWO-mobile.svg" />
</template>

<style scoped>
  .mobile-logo {
    @apply absolute left-8 top-5 h-12 sm:hidden;
  }

  .mobile-nav-container {
    @apply fixed right-0 w-0 overflow-x-hidden top-0 h-screen z-1 flex justify-end;
    transition: width .2s ease-out;
    position: fixed;
    background: #a8a8a888;
  }
  #mobile-nav-toggle:checked ~ .mobile-nav-container {
    @apply w-screen;
  }
   .mobile-nav-container {
    @apply self-end;

    nav {
      @apply bg-background flex flex-col justify-center h-full w-full overflow-x-hidden sm:w-1/3 px-24;

      .label {
        @apply font-preset-subtitle text-tertiary;
      }

      .stroked {
        @apply font-preset-h1 font-preset-mobile-h1;
      }
    }
  }

  .mobile-nav-button-container {
    @apply sticky self-end right-8 top-5 z-2 flex flex-col justify-center;
  }

  .mobile-nav-button {
    @apply sm:hidden w-12 h-12;
    background-image: url("/icons/menu.svg");
    background-size: cover;
  }

</style>