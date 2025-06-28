<script lang="ts" setup>
import CVText from '@/components/CVText.vue'
import { onMounted, ref, type ShallowRef, useTemplateRef } from 'vue'

const props = defineProps<{
  end: string
  icon: string
  start: string
  title: string
  expanded?: boolean
}>()
const more = ref('More...')
const content_div: Readonly<ShallowRef<HTMLElement | null>> = useTemplateRef('content')
const show_more = ref(true)
const max_height = ref(50)

onMounted(() => {
  resize()
  if (content_div.value) {
    new ResizeObserver(resize).observe(content_div.value)
  }
  if (props.expanded && show_more.value) {
    expand()
  }
})

function resize() {
  show_more.value = !(content_div.value && content_div.value.scrollHeight <= max_height.value) || more.value === '...Less'
}

function expand() {
  if (content_div.value) {
    if (more.value === 'More...') {
      more.value = '...Less'
      content_div.value.style.maxHeight = content_div.value.scrollHeight + 'px'
    } else {
      more.value = 'More...'
      content_div.value.style.maxHeight = max_height.value + 'px'
    }
  }
}
</script>

<template>
  <div class="item">
    <div class="item-expander">
      <img :alt="title" :src="'/images/'+icon" class="icon" />
      <div class="header">
        <h3>{{ title }}</h3>
      </div>
      <div class="sub-header">
        <span class="start">{{ start }}</span> - <span class="end">{{ end }}</span>
      </div>
      <div ref="content" class="content">
        <CVText>
          <slot></slot>
        </CVText>
      </div>
    </div>
    <div v-if="show_more" class="more">
      <span class="more_span" @click.stop="expand()">{{ more }}</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-wrap: nowrap;
}
.sub-header {
  margin-bottom: 5px;
}
.item-expander {
  overflow: hidden;
}

h3 {
  font-size: 15px;
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

  clear: both;
  overflow: hidden;
  @media print {
    break-inside: avoid;
  }
}

.icon {
  width: 94px;
  display: inline;
  float: left;
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
  margin-left: 90%;
}

.more_span {
  transition: all 0.4s;
  cursor: ns-resize;
}

.more_span:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.content {
  max-height: v-bind(max_height + 'px');
  transition: max-height 0.4s linear;
  @media print {
    max-height: none !important;
    overflow: visible !important;
  }
}
</style>
