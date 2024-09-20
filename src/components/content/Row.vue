<template>
  <div class="content-row" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props { 
  gap: string;
}
const props = withDefaults(defineProps<Props>(), {
  gap: '.5rem',
})

const style = computed(() => {
  return {
    gap: props.gap,
  }
})
</script>
<style lang="scss">
.content-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>