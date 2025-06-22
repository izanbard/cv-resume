<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="title">
    <h3>{{ title }}</h3>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 5px;
}
</style>
