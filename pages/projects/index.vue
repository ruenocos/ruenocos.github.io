<script setup lang="ts">
  const {data: projects} = await useAsyncData('projects', async () =>
  {
    const result = await queryContent('/projects')
        .sort({
          created: 1
        })
        .find();

    console.log(result);

    return result;
  });
</script>

<template>
  <Divider
    first-line="Explore my favorite"
    second-line="works"
  />
  <Masonry class="project-list">
    <NuxtLink :to="item._path" :key="item.path" v-for="item in projects">
      <div class="project-card">
        <Border>
          <div class="card-image" :style="{ backgroundImage: `url(${item.primaryImage})` }" />
        </Border>
        <div class="card-description">
        <span class="card-category">
          {{ item.category }}
        </span>
          <h3 class="card-title">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </NuxtLink>
  </Masonry>
</template>

<style scoped>
.project-list {
  @apply block;
}

.project-card {
  @apply my-10;
  --border-color: var(--color-primary);
}

.card-image { @apply w-full min-h-60vh bg-cover bg-center;}
.card-description { @apply pt-8 min-h-10vh; }
.card-category { @apply text-secondary font-preset-subtitle font-preset-mobile-subtitle; }
.card-title { @apply font-preset-h2 font-preset-mobile-h2; }
</style>