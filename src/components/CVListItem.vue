<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="content">
    <span class="title">{{ title }}. </span>
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  font-weight: bolder;
}

.title::before {
  content: '\2022';
  left: 10px;
  position: absolute;
}

.content {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
