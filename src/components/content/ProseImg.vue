<template>
  <div>    
    <nuxt-img preload class="content-image" :style="style" :src="props.src" @click="showImg(0)"/>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="[imgUrl]"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
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
const img = useImage()
const imgUrl = computed(() => {
  const imgUrl = img(props.src)
  return imgUrl
})

const visibleRef = ref(false);
const indexRef = ref(0);

const style = computed(() => {
  return {
    width: props.width,
    height: props.height,
    'aspect-ratio': props.aspectRatio
  }
})
const showImg = (index: number = 0) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

</script>

<style lang="scss">
.content-image {
  border-radius: 1rem;
  background-color: white;
  cursor: pointer;
}
</style>