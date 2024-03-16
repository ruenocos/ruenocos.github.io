<template>
  <div class="detail-page">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <Divider
          :first-line="data.title"
          second-line="Komt nog"
      />
      <ProjectShowcase :image-url="data.primaryImage" />
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>

<style scoped>
  .detail-page { @apply w-full pb-20; }
</style>
<script setup lang="ts">
</script>