<script lang="ts" setup>
import { onMounted, ref, type ShallowRef, useTemplateRef } from 'vue'
import { getImageUrl } from '@/assets/helper.ts'

const props = defineProps<{
  end: string
  icon: string
  start: string
  title: string
  expanded?: boolean
}>()
const more = ref(true)
const content_div: Readonly<ShallowRef<HTMLElement | null>> = useTemplateRef('history_content')
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
  addEventListener('expand', () => {
    expand()
  })
  addEventListener('collapse', () => {
    collapse()
  })
})

function resize() {
  show_more.value = !(content_div.value && content_div.value.scrollHeight <= max_height.value)
}

function expand() {
  if (content_div.value) {
    more.value = false
    content_div.value.style.maxHeight = content_div.value.scrollHeight + 'px'
  }
}

function collapse() {
  if (content_div.value) {
    more.value = true
    content_div.value.style.maxHeight = max_height.value + 'px'
  }
}

function expander() {
  if (more.value === true) {
    expand()
  } else {
    collapse()
  }
  resize();
}
</script>

<template>
  <div class="history_item">
    <div class="item-expander">
      <img :alt="title" :src="getImageUrl(icon)" class="icon" />
      <div class="header">
        <h3>{{ title }}</h3>
      </div>
      <div class="sub-header">
        <span class="start">{{ start }}</span> - <span class="end">{{ end }}</span>
      </div>
      <div ref="history_content" class="history_content">
        <slot></slot>
      </div>
    </div>
    <div v-if="show_more" class="more">
      <span class="more_span" @click.stop="expander()">{{ more ? 'More...' : '...Less' }}</span>
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

.history_item {
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

.history_content {
  max-height: v-bind(max_height + 'px');
  transition: max-height 0.4s linear;
  @media print {
    max-height: none !important;
    overflow: visible !important;
  }
}
</style>
