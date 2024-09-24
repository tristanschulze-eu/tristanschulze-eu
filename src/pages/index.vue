<template>
  <div class="index w-100" :style="backgroundStyles">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="px-4 py-6 w-100" :value="doc" />
    </ContentDoc>
  </div>
</template>
  
<script setup lang="ts">
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/index/Tristan_Schulze-14.jpg')
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<style lang="scss">
.index {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 50%;
}
.index__image {
  z-index: -10;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  img {
    height: 100%;
    min-width: 100%;
  }
}
</style>