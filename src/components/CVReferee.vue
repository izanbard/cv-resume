<script lang="ts" setup>
import CVListItem from '@/components/CVListItem.vue'
import { getImageUrl } from '@/utils/helper.ts'
import CVSection from '@/components/CVSection.vue'

defineProps<{
  picture: string
  name: string
}>()
</script>

<template>
  <div class="card">
    <div class="image">
      <img :alt="name" :src="getImageUrl(picture)" class="portrait" />
    </div>
    <CVSection>
      <div class="details">
        <CVListItem title="Name">
          <span class="name">{{ name }}</span>
        </CVListItem>
        <CVListItem title="Context">
          <span class="context">
            <slot name="context"></slot>
          </span>
        </CVListItem>
        <CVListItem title="Description">
          <span class="description">
            <slot name="description"></slot>
          </span>
        </CVListItem>
        <CVListItem title="Contact Details">
          <span class="contact">Available on request.</span>
        </CVListItem>
      </div>
    </CVSection>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  border: 1px solid peru;
  border-radius: 50px;
  overflow: hidden;
  align-items: stretch;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  padding-right: 10px;
  @media print {
    break-inside: avoid;
  }
}

.image {
  background-color: peru;
  padding: 15px 15px 15px 15px;
  align-content: center;
}

.portrait {
  width: 100px;
  border-radius: 50%;
}

.details {
  padding: 10px 0;
}
</style>
