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
  &:not(:first-child) {
    margin-top: 10px;
    border-top: 1px solid var(--color-border);
    padding-top: 5px;
  }
}

h3 {
  font-size: 16px;
  font-weight: bold;
  font-family: "Eurostile Extended", Inter, sans-serif;
  color: var(--color-heading);
}
</style>
