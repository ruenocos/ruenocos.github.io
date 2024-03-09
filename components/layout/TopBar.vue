<script lang="ts" setup>
const topbar = ref({
  navigation: [
    { url: '/projects', name: 'Projects' },
    { url: '/about', name: 'About' },
  ]
});
</script>

<template>
  <div class="topbar">
    <NuxtLink to="/">
      <img class="logo" alt="Wessel Oud" src="../../assets/logo/logoWO.svg" />
      <img class="logo-mobile" alt="Wessel Oud" src="../../assets/logo/logoWO-mobile.svg" />
    </NuxtLink>
    <nav>
      <ul class="nav-list">
        <li v-for="item in topbar.navigation">
          <NuxtLink :to="item.url">
            {{ item.name }}
          </NuxtLink>
        </li>
        <Border class="contact-button">
            Get in touch
        </Border>
      </ul>
    </nav>
    <div class="mobile-nav" />
  </div>
</template>

<style>
.topbar {
  @apply py-8 flex justify-between items-center z-1 lt-lg:w-full sticky sm:relative top-0;
  height: calc(100vh / 8);
  width: calc(100% + 16rem);
}

.logo, .logo-mobile {
  @apply h-12;
}

.logo { @apply lt-sm:hidden; }
.logo-mobile { @apply sm:hidden; }

nav { @apply hidden sm:block }
.mobile-nav {
  @apply block sm:hidden w-12 h-12;
  background-image: url("/icons/menu.svg");
  background-size: cover;
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