<script lang="ts" setup>
import { onMounted } from 'vue'
import CVResume from '@/views/CVResume.vue'

const icon_list: string[] = [
    'article',
    'call',
    'data_object',
    'file_save',
    'history',
    'info',
    'link',
    'location_city',
    'mail',
    'mindfulness',
    'person',
    'person_celebrate',
    'school',
    'sports',
    'stadia_controller',
    'volunteer_activism',
  ]

const title: string = "Gordon Peter Wills - CV/Resume prepared on 23 June 2025"

const keyword: string = "easter"

onMounted(() => {
  let key_history: string = ''

  window.addEventListener('keyup', function (ev) {
    key_history += ev.key
    if (key_history.endsWith(keyword)) {
      document.body.classList.add('easter')
    } else {
      document.body.classList.remove('easter')
    }
    if (key_history.length > keyword.length+1) {
      key_history = key_history.slice(-(keyword.length+1))
    }
  })

  const google_icons_link: HTMLLinkElement = document.createElement('link')
  google_icons_link.setAttribute('rel', 'stylesheet')
  const href: string =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=' +
    icon_list.sort().join(',') +
    '&display=block'
  google_icons_link.setAttribute('href', href)
  document.head.appendChild(google_icons_link)
  document.head.title = title
})
</script>

<template>
  <header>
    <img alt="Gordy Wills looking fly" class="header_image" src="/images/headshot.png" />
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
  font-family: 'Eurostile Extended', Inter, sans-serif;
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
