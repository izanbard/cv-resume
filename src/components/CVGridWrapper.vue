<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  columns?: number
  rows?: number
}>()

const computedColumns = computed(() => {
  if (props.columns) {
    return 'auto '.repeat(props.columns)
  }
  return 'none'
})
const computedRows = computed(() => {
  if (props.rows && !props.columns) {
    return 'auto '.repeat(props.rows)
  }
  return 'none'
})
const computedFlow = computed(() => {
  if (props.rows && !props.columns) {
    return 'column'
  }
  return 'row'
})
</script>

<template>
  <div class="flexer">
    <slot></slot>
  </div>
</template>

<style scoped>
.flexer {
  display: grid;
  gap: 10px;
  grid-template-columns: v-bind(computedColumns);
  grid-template-rows: v-bind(computedRows);
  grid-auto-flow: v-bind(computedFlow);
  @media print {
    display: inherit;
  }
}
</style>
