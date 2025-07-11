<script lang="ts" setup>
import CVListItem from '@/components/CVListItem.vue'
import CVSection from '@/components/CVSection.vue'

defineProps<{
  outcome_title?: string
  aside_title?: string
}>()
</script>

<template>
  <CVSection>
  <CVListItem v-if="outcome_title" :title="outcome_title">
    <slot name="outcome"></slot>
  </CVListItem>
  <CVListItem v-if="aside_title" :title="aside_title">
    <slot name="aside"></slot>
  </CVListItem>
  </CVSection>
</template>

<style scoped></style>
