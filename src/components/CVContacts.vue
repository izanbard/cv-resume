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
  <div class="contact">
    <div v-if="tel">
      <p>
        <CVIcon icon="call" size="small" />
        : <a :href="'tel:' + tel">{{ tel }}</a>
      </p>
    </div>
    <div v-if="email">
      <p>
        <CVIcon icon="mail" size="small" />
        : <a :href="'mailto:' + email">{{ email }}</a>
      </p>
    </div>
    <div v-if="web">
      <p>
        <CVIcon icon="link" size="small" />
        : <a :href="web" target="_blank">{{ web }}</a>
      </p>
    </div>
    <div v-if="ledIn">
      <p>
        <CVIcon icon="person" size="small" />
        : <a :href="ledIn" target="_blank">{{ ledIn }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
</style>
