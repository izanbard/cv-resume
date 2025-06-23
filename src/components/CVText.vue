<script setup lang="ts">

</script>

<template>
<p><slot></slot></p>
</template>

<style scoped>
p {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
