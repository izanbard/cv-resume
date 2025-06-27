<script setup lang="ts">
import CVListItem from '@/components/CVListItem.vue'
defineProps<{
  outcome_title ?: string,
  aside_title ?: string,
}>()
</script>

<template>
  <CVListItem v-if="outcome_title" :title="outcome_title"><slot name="outcome"></slot></CVListItem>
  <CVListItem v-if="aside_title" :title="aside_title"><slot name="aside"></slot></CVListItem>
</template>

<style scoped>

</style>
