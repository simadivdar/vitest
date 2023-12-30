<template>
    <p>{{ message }}</p>
  </template>
  
  <script setup lang="ts">
  
  defineProps({
    message: {
        type: String,
        default: "World",
      }})

  </script>