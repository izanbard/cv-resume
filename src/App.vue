<script lang="ts" setup>
import { onMounted } from 'vue'
import CVResume from '@/views/CVResume.vue'

onMounted(() => {
  let keyhistory: string = ''

  window.addEventListener('keyup', function (ev) {
    keyhistory += ev.key
    if (keyhistory.endsWith('easter')) {
      document.body.classList.add('easter')
    } else {
      document.body.classList.remove('easter')
    }
    if (keyhistory.length > 6) {
      keyhistory = keyhistory.slice(-6)
    }
  })
})
</script>

<template>
  <header>
    <img alt="Gordy Wills looking fly" class="header_image" src="@/assets/images/headshot.png" />
    <h1>Gordon Peter Wills</h1>
  </header>
  <CVResume />
</template>

<style scoped>
header {
  background-color: var(--color-background);
  min-height: 220px;
  max-height: 220px;
  padding: 10px;
  border-top: var(--color-border) solid 1px;
  border-left: var(--color-border) solid 1px;
  border-right: var(--color-border) solid 1px;
  line-height: 1;
  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
  @media print {
    border: 0;
  }
}

.header_image {
  margin: 0;
  width: 200px;
  height: 200px;
}

h1 {
  font-family: "Eurostile Extended", Inter, sans-serif;
  font-variant-caps: small-caps;
  font-synthesis-weight: auto;
  font-weight: bolder;
  font-size: 3.6em;
  letter-spacing: 0.17em;
  justify-self: center;
  width: fit-content;
  text-align: center;
}
</style>
