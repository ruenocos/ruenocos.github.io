<template>
  <Hero />
  <Background />
  <SideBySide>
    <div class="intro">
      <HoverableText>
        <h2 class="hello">Hello, I'm <u>Wons</u></h2>
        <template slot="on-hover">
          Enge foto
        </template>
      </HoverableText>
    </div>
    <div class="description">
      I enjoy the challenge of bringing the vision of other to life in dynamic graphics, and strive to create designs that are both visually stunning and effective.
    </div>
  </SideBySide>
  <Divider firstLine="Featured" secondLine="Projects" />
  <LargeProjectCard v-for="project in projects" :title="project.title" :image-url="project.image" :to="project.to" />
</template>

<style scoped>
  .intro {
    @apply w-full pb-48;
  }

  .hello { @apply text-4xl font-preset-h3; }
  .description { font-size: 1.4rem; }

</style>
<script setup lang="ts">
import LargeProjectCard from "~/components/page-specific/home/LargeProjectCard.vue";

const mkProject = (title: string, to: string, image: string) => ({title, to, image})
const projects = [
  mkProject('Introducing the leading yacht service', '/projects', 'content/images-content/portfolio-item-1.jpg'),
  mkProject('The leading yacht service', '/projects', 'content/images-content/portfolio-item-2.jpg'),
  mkProject('The leading yacht service', '/projects', 'content/images-content/portfolio-item-3.jpg')
]
</script>