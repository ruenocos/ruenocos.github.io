<script setup lang="ts">
import ImageGridItem from "~/components/page-specific/detail/ImageGridItem.vue";

interface GridItem {
  type: 'image' | 'grid'
  text?: string
  image?: string
}

const data = defineProps<{
  left: GridItem[]
  right: GridItem[]
}>()
</script>

<template>
  <div class="image-grid">
    <div>
      <ImageGridItem :text="item.text" :image="item.image" v-for="item in data.left" />
    </div>
    <div>
      <ImageGridItem :text="item.text" :image="item.image" v-for="item in data.right" />
    </div>
  </div>
</template>

<style scoped>
.image-grid {
  @apply flex sm:flex-row flex-col justify-between;

  > div {
    @apply w-1/2 flex flex-col w-full;
  }

  > div:first-child {
    @apply sm:pr-3;
  }

  > div:last-child {
    @apply sm:pl-3 sm:pt-24;
  }
}
</style>