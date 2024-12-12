<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  labelText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mb-3">
    <!-- Отображаем label, если он предоставлен в props -->
    <label v-if="labelText" class="opacity-75 mb-0.5 block text-xs">{{
        labelText
      }}</label>
    <!-- Слот для вложенного содержимого -->
    <div class="text-base"><slot /></div>
  </div>
</template>
