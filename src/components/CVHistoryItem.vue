<script lang="ts" setup>
import CVText from '@/components/CVText.vue'
import { onMounted, ref, type ShallowRef, useTemplateRef } from 'vue'

defineProps<{
  end: string
  icon: string
  start: string
  title: string
}>()
const more=ref("More...")
const item_div: Readonly<ShallowRef<HTMLElement | null>> = useTemplateRef('content')
const show_more = ref(true)
const max_height = ref(60)
onMounted(()=>{
  if (item_div.value && item_div.value.scrollHeight <= max_height.value) {
    show_more.value = false
  }
})
function getImageUrl(name: string) {
  return new URL('../assets/images/' + name, import.meta.url).pathname
}
function expand() {
  if (item_div.value) {
    if (more.value === "More...") {
      more.value = "...Less"
      item_div.value.style.maxHeight = item_div.value.scrollHeight+'px'
      item_div.value.style.overflow = 'visible'
    } else {
      more.value = "More..."
      item_div.value.style.maxHeight = max_height.value+'px'
      item_div.value.style.overflow = 'hidden'
    }
  }
}
</script>

<template>
  <div class="item" >
    <img class="icon" :alt="title" :src="getImageUrl(icon)" />
    <div class="header">
      <h3>{{ title }}: </h3>
      <span class="start">{{ start }}</span> - <span class="end">{{ end }}</span>
    </div>
    <div class="content" ref="content">
      <CVText><slot></slot></CVText>
    </div>
    <div v-if="show_more" class="more" @click.stop="expand()"><span class="more_span">{{ more }}</span></div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  color: var(--color-heading);
  padding: 7px 0;
  display: inline;
}

.start,
.end {
  font-size: 10px;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  color: var(--color-heading);
  padding: 7px 0;
  display: inline;
}

.item {
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px solid var(--color-border);
  clear: both;
}
.icon {
  height: 80px;
  display: inline;
  float:left;
  margin: 0 5px;
  margin-bottom: 5px;
}
.more {
  @media print {
    display: none;
  }
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  color: hsla(160, 100%, 37%, 1);
}
.more_span {
  transition: all 0.4s;
}
.more_span:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
.content{
  max-height: v-bind(max_height+'px');
  overflow: hidden;
  transition: max-height 0.4s linear;
  @media print {
    max-height: none !important;
    overflow: visible !important;
  }

}
</style>
