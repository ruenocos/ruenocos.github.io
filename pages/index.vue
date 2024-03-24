<template>
  <Hero />
  <Background />
  <SideBySide>
    <div class="intro">
      <HoverableText>
        <h3 class="hello">Hello, I'm <u>Wessel</u></h3>
        <template v-slot:on-hover>
          Hier komt een foto
        </template>
      </HoverableText>
    </div>
    <div class="description">
      I enjoy the challenge of bringing the vision of other to life in dynamic graphics, and strive to create designs that are both visually stunning and effective.
    </div>
  </SideBySide>
  <Divider firstLine="Featured" secondLine="Projects" />
  <LargeProjectCard v-for="project in projects" :title="project.title" :image-url="project.portraitImage" :to="project._path" />
</template>

<style scoped>
  .intro {
    @apply w-full pb-8 sm:pb-48;

    * { @apply flex-col; }
  }

  .description {
    @apply font-preset-subtitle-2 lt-sm:font-preset-mobile-subtitle-2;
  }
</style>
<script setup lang="ts">
const {data: projects} = await useAsyncData('projects', async () =>
{
  return await queryContent('/projects')
      .sort({
        slug: 1
      })
      .limit(3)
      .find();
});

</script>