<template>
  <img class="content-image" :style="style" :src="props.src"  />
</template>

<script setup lang="ts">
interface Props { 
  src: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
}
const props = withDefaults(defineProps<Props>(), {
  height: '300px',
})

const style = computed(() => {
  return {
    width: props.width,
    height: props.height,
    'aspect-ratio': props.aspectRatio
  }
})
</script>

<style lang="scss">
.content-image {
  border-radius: 1rem;
  background-color: white;
}
</style>