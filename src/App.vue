<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue'

  const isHeadlineVisible = ref(false)
  const canRenderComponent = ref(true)
</script>

<template>
  <div>
    <h3
      v-show="isHeadlineVisible"
      data-test="headline"
    >
      I am now visible, yay!
    </h3>

    <button
      data-test="toggle-headline"
      @click="isHeadlineVisible = !isHeadlineVisible"
    >
      Toggle Headline
    </button>

    <button
      data-test="toggle-component"
      @click="canRenderComponent = !canRenderComponent"
    >
      Toggle Component
    </button>

    <HelloWorld message="hello word...."  v-if="canRenderComponent" />
  </div>
</template>
