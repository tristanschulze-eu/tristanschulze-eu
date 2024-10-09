<template>
  <div>    
    <figure>
      <nuxt-img preload class="content-image" :style="style" :src="props.src" @click="showImg(0)"/>
      <figcaption v-html="props.caption" />
    </figure>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="[imgUrl]"
      :index="indexRef"
      @hide="onHide"
    >
      <template v-slot:toolbar="{ toolbarMethods }">
        <div class="lightbox__toolbar">
          <div class="w-100 ta-center"><span class="card">{{ props.caption }}</span></div>
          <div >
            <button @click="toolbarMethods.zoomIn">+</button>
            <button @click="toolbarMethods.zoomOut">-</button>
            <a :href="imgUrl" download>
              <button>download</button>
            </a>
          </div>

        </div>
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script setup lang="ts">
interface Props { 
  src: string;
  width?: string;
  height?: string;
  caption?: string;
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
    maxWidth: props.width,
    maxHeight: props.height,
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
  max-width: 90vw;
}

.lightbox__toolbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.card, button { 
  background: white; border-radius: .25rem;
  padding: .5rem 1rem;
  margin: 0 .5rem;
  box-sizing: content-box;
  border: none;
  transition: all .25s ease
}
button {
  cursor: pointer;
}
button:hover {
  background: #dddddd;
}
</style>