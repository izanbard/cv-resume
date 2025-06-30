<script lang="ts" setup>
import CVText from '@/components/CVText.vue'

function expand() {
  dispatchEvent(new Event('expand'))
}

function collapse() {
  dispatchEvent(new Event('collapse'))
}
</script>

<template>
  <div class="expand_all_wrapper">
    <div class="expand_all">
      <CVText>
        <a>
          <span class="tool" @click.stop="expand()">
            [+]
            <span class="tooltip"> Expand All </span>
          </span>
        </a>
        <a>
          <span class="tool" @click.stop="collapse()">
            [-]
            <span class="tooltip"> Collapse All </span>
          </span>
        </a>
      </CVText>
    </div>
  </div>
</template>

<style scoped>
.expand_all_wrapper {
  position: absolute;
  right: -35px;
  @media print {
    display: none;
  }
  height: 100%;
}

.expand_all {
  position: sticky;
  top: 5px;
  justify-items: right;
  z-index: 5;
  font-size: 12px;
  font-family: 'Eurostile Extended', Inter, sans-serif;
}

.expand_all a {
  padding: 1px 0;
}
.tool {
  position: relative;
}

.tool .tooltip {
  visibility: hidden;
  width: 110px;
  background-color: grey;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 150%;
  left: 50%;
  margin-left: -55px;

  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
  opacity: 0;
  transition: opacity 1s;
}

.tool:hover .tooltip {
  visibility: visible;
  opacity: 0.5;
}
.tool .tooltip::after {
  content: ' ';
  position: absolute;
  bottom: 100%; /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
  opacity: 0.5;
}
</style>
