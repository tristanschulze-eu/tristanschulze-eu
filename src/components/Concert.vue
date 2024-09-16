<template>
  <div>
    <img :src="props.image_src">
    <div>
      {{props.title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'

const props = withDefaults(defineProps<Concert>(), {
})
</script>