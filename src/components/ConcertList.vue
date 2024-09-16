<template>
  <div>
    <concert v-for="c in props.concerts" v-bind="c"/>
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'

interface Props { 
  concerts: Concert[];
}

const props = withDefaults(defineProps<Props>(), {
})
</script>