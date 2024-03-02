<template>
  <Hero />
  <Background />
  <SideBySide>
    <div>
      <HoverableText>
        <h2>Hello, I'm <u>Wons</u></h2>
        <template slot="on-hover">
          Enge foto
        </template>
      </HoverableText>
    </div>
    <div>
      I enjoy the challenge of bringing the vision of other to life in dynamic graphics, and strive to create designs that are both visually stunning and effective.
    </div>
  </SideBySide>
  <Divider firstLine="Featured" secondLine="Projects" />
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>