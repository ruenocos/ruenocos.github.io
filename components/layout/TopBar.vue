<script lang="ts" setup>
import {breakpointsTailwind} from "@vueuse/core";

const topbar = ref({
  navigation: [
    { url: '/projects', name: 'Projects' },
    { url: '/about', name: 'About' },
  ]
});

const breakpoints = useBreakpoints(breakpointsTailwind);

const container = ref(null);
const isContainerVisible = useElementVisibility(container);
watch(isContainerVisible, () =>
{
  if (! breakpoints.greaterOrEqual('sm'))
  {
    return;
  }

  const el = document.querySelector('.mobile-nav-button-container');
  if (el !== null)
  {
    el.style.opacity = isContainerVisible.value ? 0 : 1;
  }
});
</script>

<template>
  <div class="topbar" ref="container">
    <NuxtLink to="/">
      <img class="logo" alt="Wessel Oud" src="../../assets/logo/logoWO.svg" />
    </NuxtLink>
    <nav>
      <ul class="nav-list">
        <li v-for="item in topbar.navigation">
          <NuxtLink :to="item.url">
            {{ item.name }}
          </NuxtLink>
        </li>
        <NuxtLink to="/contact">
          <Border class="contact-button">
            Get in touch
          </Border>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.topbar {
  @apply py-8 flex justify-between items-center z-1 lt-lg:px-2 lt-lg:w-full sticky sm:relative top-0 lt-sm:hidden;
  height: calc(100vh / 8);
  width: calc(100% + 16rem);
}

.logo {
  @apply h-12;
}

.nav-list {
  @apply flex items-center;

  li {
    @apply ml-4 mr-4 md:ml-8 md:mr-8 font-nav;
  }

  li:first-child {
    @apply ml-0;
  }

  li:last-child {
    @apply mr-0;
  }
}

.contact-button {
  @apply font-preset-button;
  @apply px-6 ml-4 md:ml-8 py-16px;
  --border-color: var(--color-secondary);
}
</style>