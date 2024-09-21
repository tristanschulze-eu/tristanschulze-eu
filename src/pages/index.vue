<template>
  <div class="index w-100">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="px-4 py-6 w-100" :value="doc" />
    </ContentDoc>
    <div class="index__image h-100" >
      <nuxt-img preload src="/img/index/Tristan_Schulze-12.jpg" />
    </div>
  </div>
</template>
  
<style lang="scss">
.index {
  position: relative;
}
.index__image {
  z-index: -10;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  img {
    min-height: 100%;
    width: 100%;
  }
}
</style>