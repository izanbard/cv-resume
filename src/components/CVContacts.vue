<script lang="ts" setup>
import CVIcon from '@/components/CVIcon.vue'

defineProps<{
  tel: string
  email: string
  web: string
  ledIn: string
}>()
</script>

<template>
  <div class="content">
    <div v-if="tel">
      <p>
        <CVIcon icon="call" size="small" />
        : {{ tel }}
      </p>
    </div>
    <div v-if="email">
      <p>
        <CVIcon icon="mail" size="small" />
        : <a :href="'mailto:' + email" @click.stop>{{ email }}</a>
      </p>
    </div>
    <div v-if="web">
      <p>
        <CVIcon icon="link" size="small" />
        : <a :href="web" target="_blank" @click.stop>{{ web }}</a>
      </p>
    </div>
    <div v-if="ledIn">
      <p>
        <CVIcon icon="person" size="small" />
        : <a :href="ledIn" target="_blank" @click.stop>{{ ledIn }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
</style>
