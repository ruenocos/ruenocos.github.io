<script setup lang="ts">
  const { data } = await useAsyncData('content', () =>
    queryContent('/')
      .find()
  );
</script>

<template>
  <div>
    <h1>list</h1>
    <NuxtLink :to="item._path" v-for="item in data" :key="item.slug">
      <ContentRenderer :value="item" />
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>