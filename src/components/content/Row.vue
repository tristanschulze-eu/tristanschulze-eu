<template>
  <div class="content-row" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props { 
  gap?: string;
  justifyContent?: string;
}
const props = withDefaults(defineProps<Props>(), {
  gap: '.5rem',
  justifyContent: 'space-around',
})

const style = computed(() => {
  return {
    gap: props.gap,
    justifyContent: props.justifyContent,
  }
})
</script>
<style lang="scss">
.content-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
</style>