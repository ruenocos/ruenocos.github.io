<script setup lang="ts">
  const footer = {
    firstLine: 'Amazing ideas?',
    secondLine: 'Lets talk about it.',
    contact: [
      { name: 'LinkedIn', handle: '@wesseloud', to: 'https://linkedin.com/paywal/goeie-website/wesseloud', icon: 'linkedin' },
      { name: 'Email', handle: 'wonsie@wesseloud.nl', to: 'mailto:wonsie@wesseloud.nl', icon: 'email' }
    ]
  }
</script>

<template>
  <div class="footer-container">
    <div class="footer">
      <div class="cta">
        <h2>{{ footer.firstLine }}</h2>
        <div class="second-line-container">
          <div class="second-line" :data-text="footer.secondLine">
            {{footer.secondLine}}
            <div class="line" />
          </div>
        </div>
      </div>
      <div class="card-container">
        <div v-for="contact in footer.contact" class="contact-card-container">
          <div class="contact-line" />
          <NuxtLink :to="contact.to" class="contact-card">
            <div class="contact-card-info">
              <span class="name">{{ contact.name }}</span>
              <span class="handle">{{ contact.handle }}</span>
            </div>
            <div class="contact-card-image" :style="{ backgroundImage: `url(/icons/${contact.icon}.svg)` }" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  @apply w-screen bg-background-secondary relative flex justify-center;
  &::before {
    content: '';
    background-image: url('/assets/elements/Footer-top.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    @apply absolute block h-12 w-full;
    top: calc(-3rem);
  }
}

.footer {
  @apply lt-lg:w-full flex flex-col sm:flex-row justify-between sm:min-h-50vh items-center;
  width: calc(1000px + 16rem);
}

.cta { @apply sm:w-2/3 flex flex-col px-8 py-12 sm:p-0 self-start sm:self-center; }
.cta * { @apply text-2xl sm:text-6xl font-700; }

.second-line {
  @apply flex relative text-background-secondary;
  @apply text-3xl sm:text-7xl pb-2;

  z-index: 0;
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

.second-line-container { @apply flex pt-4; }

.line {
  @apply absolute border-1px border-primary border-solid border-t-none border-l-none border-r-none;
  @apply top-full left-0 right-0;

  &::before {
    content: '';
    @apply  absolute w-5px h-5px bg-primary top;
    margin-top: -2px;
  }
}

.card-container {
  @apply flex flex-col px-8 w-full sm:w-unset sm:px-0 sm:min-w-1/4 sm:self-center;
}

.contact-card { @apply flex justify-between pt-2; }
.contact-card-info { @apply flex flex-col pr-4; }
.contact-card-info {
  .name { font-size: 1.7rem; }
  .handle { font-size: .8rem; color: #a8a8a8; line-height: .9rem; }
}

.contact-card-image {
  @apply h-auto min-w-12;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.contact-card-container { @apply py-4; }

.contact-line {
  @apply w-full relative border-1px border-primary border-solid border-t-none border-l-none border-r-none;

  &::before {
    content: '';
    @apply  absolute w-5px h-5px bg-primary left-0;
    margin-top: -2px;
  }

  &::after {
    content: '';
    @apply  absolute w-5px h-5px bg-primary right-0;
    margin-top: -2px;
  }
}
</style>