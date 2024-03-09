<template>
  <div class="detail-page">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>

<style scoped>
  .detail-page { @apply w-full; }
</style>