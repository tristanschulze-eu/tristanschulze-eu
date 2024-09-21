<template>
  <div class="index w-100">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="px-4 py-6 w-100" :value="doc" />
      
    </ContentDoc>
    <nuxt-img class="index__image" src="/img/index/Tristan_Schulze-12.jpg" />
  </div>
</template>
  
<style>
.index {
  position: relative;
}
.index__image {
  z-index: -10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>