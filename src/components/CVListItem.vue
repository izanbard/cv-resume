<script lang="ts" setup>
import CVText from '@/components/CVText.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="list_item">
    <CVText>
      <span class="bullet"></span>
      <span v-if="title" class="title">{{ title }}. </span>
      <slot></slot>
    </CVText>
  </div>
</template>

<style scoped>
.title {
  font-weight: bolder;
}

.bullet::before {
  content: '\2022';
  padding-right: 6px;
}

.list_item {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
