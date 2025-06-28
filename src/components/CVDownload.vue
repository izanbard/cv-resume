<script async setup lang="ts">
const props = defineProps<{
  fileName: string
  displayName: string
}>()
import axios from 'axios'
import CVIcon from '@/components/CVIcon.vue'

function getFileUrl(name: string) {
  return 'files/' + name
}

const data = await axios.head(getFileUrl(props.fileName))
const size = data.headers ? Math.floor(data.headers['content-length'] / 1000).toFixed(0) : '???'
async function downloadPdf() {
  const response = await axios.get(getFileUrl(props.fileName), { responseType: 'blob' })
  const blob = new Blob([response.data], { type: 'application/pdf' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = props.fileName
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <div class="download" @click.stop="downloadPdf">
    <span class="leader">PDF<CVIcon icon="file_save" size="medium"></CVIcon></span>
    <span class="size">{{ size }}Kb</span>
    <span class="name">{{ displayName }}</span>
    <span class="file">{{ fileName }}</span>
  </div>
</template>

<style scoped>
.download {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Eurostile Extended', Inter, sans-serif;
  border: 1px solid crimson;
  border-radius: 15px;
  overflow: hidden;
  height: 40px;
  width: fit-content;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  cursor: pointer;
}

.size,
.file,
.name,
.leader {
  padding: 13px 8px 10px 8px;
}
.leader {
  background-color: crimson;
  color: white;
}
.size {
  background-color: lightgray;
}
.name:after {
  content: ':';
}
.file {
  padding-left: 0;
}
</style>
