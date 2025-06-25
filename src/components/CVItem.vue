<script lang="ts" setup>
import { computed, type ComputedRef, onMounted, ref, type Ref, type ShallowRef, useTemplateRef } from 'vue'
import CVIcon from './CVIcon.vue'

const props = defineProps<{
  icon: string
  title: string
  icon_colour: string
  expanded?: boolean
  level?: string
  no_print?: boolean
}>()

const colour: ComputedRef<string> = computed(() => {
  if (props.icon_colour) {
    return props.icon_colour
  }
  return 'transparent'
})
const icon_size: ComputedRef<string> = computed(() => {
  return props.level === 'two' ? 'medium' : 'large'
})
const state: Ref<string, string> = ref('not-expanded')
const content_div: Readonly<ShallowRef<HTMLElement | null>> = useTemplateRef('content')

onMounted(() => {
  if (props.expanded) {
    expander()
  }
})

function expander() {
  if (content_div.value) {
    if (state.value === 'expanded') {
      state.value = 'not-expanded'
      content_div.value.style.maxHeight = content_div.value.scrollHeight + 'px'
      setTimeout(() => {
        if (content_div.value) {
          content_div.value.style.maxHeight = '0'
        }
      }, 100)

      content_div.value.style.margin = '0'
    } else {
      state.value = 'expanded'
      content_div.value.style.maxHeight = content_div.value.scrollHeight + 'px'
      content_div.value.style.margin = '5px 10px'
      setTimeout(() => {
        if (content_div.value) {
          content_div.value.style.maxHeight = 'none'
        }
      }, 400)
    }
  }
}
</script>

<template>
  <div :class="[level, no_print ? 'no_print' : '']" class="item">
    <div v-if="icon != 'none'" class="item_icon" @click.stop="expander">
      <CVIcon :icon="icon" :size="icon_size" />
    </div>
    <div class="header" @click.stop="expander">
      <h3>{{ title }}</h3>
    </div>
    <div ref="content" :class="[state]" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 0;
  position: relative;
  border-top: var(--color-border) solid 1px;
  line-height: 1.6;
}

/*noinspection CssUnusedSymbol*/
.item.two {
  margin-left: 37px;
  width: auto;
  @media print {
    margin-left: 0;
    border: 0;
  }
}

.header {
  min-height: 56.5px;
  background-color: var(--color-background-soft);
  padding-left: 10px;
  @media print {
    padding: 0;
  }
  cursor: pointer;
}

.two .header {
  min-height: 37px;
}

.header:hover {
  background-color: var(--color-background-mute);
}

.item_icon {
  position: absolute;
  left: -59px;
  padding-top: 2px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 3px;
  background-color: v-bind(colour);
  border: var(--color-border) solid 2px;
  color: white;
  @media print {
    display: none;
  }
  cursor: pointer;
}

.two .item_icon {
  left: -37px;
  padding-top: 0;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 0;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  padding-top: 10px;
}

.two h3 {
  font-size: 18px;
  padding-top: 4px;
}

.content {
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition:
    max-height 0.4s linear,
    margin 0.1s ease-in 0.41s;
  line-height: 1.1;
  @media print {
    max-height: none !important;
    margin: 5px 10px !important;
  }
}

/*noinspection CssUnusedSymbol*/
.expanded {
  transition:
    max-height 0.4s linear,
    margin 0.1s linear;
}

/*noinspection CssUnusedSymbol*/
.no_print {
  @media print {
    display: none;
  }
}
</style>
