<script lang="ts" setup>
import { getImageUrl } from '@/assets/helper.ts'

defineProps<{
  title: string
  link: string
  icon?: string
}>()
</script>

<template>
  <div class="links">
    <div class="link">
      <span class="title">{{ title }}</span>
      <img v-if="icon" :alt="title" :src="getImageUrl(icon)" />
      <span>
        <a :href="link" target="_blank">{{ link }}</a>
      </span>
    </div>

    <div class="description">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.links {
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

img {
  width: 12px;
  padding-right: 3px;
}

.title {
  font-size: 12px;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
}

.title::after {
  content: ':\00a0 ';
}
</style>
