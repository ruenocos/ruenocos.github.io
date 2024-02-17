<script setup lang="ts">
</script>

<template>
  <div>
    <h1>detail</h1>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>

<style scoped>

</style>