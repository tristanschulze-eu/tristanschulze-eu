<template>
  <div class="concert">
    <a target="_blank"  :href="props.url">
      <div class="concert__image">
        <div class="concert__overlay bg-secondary pa-2">
          {{ props.url }}
        </div>
        <img :src="props.image_src">
      </div>
    </a>
    <div class="pa-1 mt-3 fs-5">
      {{props.title}}
    </div>
    <div class="pa-1 fs-4">
      {{props.start_date}}
    </div>
    <div class="pa-1 fs-3">
      {{props.description}}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'

const props = withDefaults(defineProps<Concert>(), {
})
</script>

<style lang="scss">
.concert .concert__image { 
  overflow: hidden;
  position: relative;
  img { 
    border-radius: 1rem;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
}
.concert .concert__overlay { 
  border-radius: 0 0 1rem 1rem;
  position: absolute;
  box-sizing: border-box;

  bottom: 0;
  right: 0;
  width: 100%;
  transition: .35s ease;
  opacity: 0;
}
.concert__image:hover .concert__overlay {
  opacity: 1;
}
.concert { 
}
</style>