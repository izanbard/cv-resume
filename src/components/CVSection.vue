<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  title?: string
  size?: string
}>()
const size_lookup: Record<string, number> = {
  large: 18,
  medium: 15,
  small: 12,
}

const text_size = computed(() => {
  return props.size && props.size in size_lookup ? size_lookup[props.size] : 18
})
</script>

<template>
  <div v-if="title" class="title">
    <h3>{{ title }}</h3>
  </div>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 5px;

  &:not(:first-child) {
    margin-top: 10px;

    padding-top: 5px;
  }
}

h3 {
  font-size: v-bind(text_size + 'px');
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  color: var(--color-heading);
}

.section {
  margin-left: 10px;
}
</style>
