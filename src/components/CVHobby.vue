<script lang="ts" setup>
import { getImageUrl } from '@/assets/helper.ts'

defineProps<{
  title: string
  picture_top: string
  picture_bottom: string
}>()
</script>

<template>
  <div class="hobby">
    <div class="image_top">
      <img :alt="title" :src="getImageUrl(picture_top)" class="portrait" />
    </div>
    <div class="details">
      <h3>{{ title }}</h3>
      <div class="description">
        <slot></slot>
      </div>
    </div>
    <div class="image_bottom">
      <img :alt="title" :src="getImageUrl(picture_bottom)" class="portrait" />
    </div>
  </div>
</template>

<style scoped>
.hobby {
  display: flex;
  flex-direction: column;
  border: 5px solid mediumseagreen;
  border-radius: 30px;
  overflow: hidden;
  align-items: stretch;
  align-content: stretch;
  @media print {
    display: block;
    position: relative;
    border: 0;
    border-radius: 0;
    flex-direction: row;
    align-content: normal;
    align-items: normal;
    break-inside: avoid;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}

.image_top,
.image_bottom {
  align-content: center;
  max-height: 270px;
  height: fit-content;
}

.image_bottom {
  @media print {
    display: none;
  }
}

.image_top {
  @media print {
    width: 150px;
    margin-right: 10px;
    float: left;
  }
}

h3 {
  font-size: 15px;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  color: var(--color-heading);
  padding: 7px 0;
  display: inline;
}

.description {
  padding-top: 10px;
  @media print {
    padding: 0;
  }
}

.portrait {
  width: 100%;
  height: 100%;
  @media print {
    width: 150px;
    border-radius: 10px;
  }
}

.details {
  padding: 10px 10px;
  margin-bottom: auto;
  @media print {
    padding: 0 10px;
  }
}
</style>
