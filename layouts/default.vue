<template>
  <div class="layout">
    <TopBar />
    <MobileNavigation />
    <slot />
    <Footer />
  </div>
</template>

<style>
.layout {
  @apply flex relative flex-col w-screen px-8 sm:max-w-640px md:max-w-768px lg:max-w-1024px xl:max-w-1280px items-center;
  @apply pt-16 sm:pt-0;
}

body { @apply overflow-x-hidden; }
</style>