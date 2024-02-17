<script lang="ts" setup>
const topbar = ref({
  navigation: [
    { url: '/', name: 'Home' },
    { url: '/about', name: 'About' },
  ]
});
</script>

<template>
  <div class="topbar">
    <img class="logo" src="~/assets/logo/logoWO.svg">
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
  </div>
</template>

<style>
.topbar {
  @apply py-8 flex justify-between items-center z-1;
  height: calc(100vh / 8);
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