<template>
  <div class="sm-links" :style="containerStyle">
    <a v-for="sml in links" target="_blank" :href="sml.url">
      <nuxt-img class="sm-link-image ma-1" :src="sml.imgSrc" :style="imgStyle" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props { 
  width?: string;
  height?: string;
}
const props = withDefaults(defineProps<Props>(), {
  width: '300px',
  height: '64px',
})

const containerStyle = computed(() => {
  return {
    maxWidth: props.width,
  }

})   
const imgStyle = computed(() => {
  return {
    maxHeight: props.height,
  }
})   

const links = [
//  {
//    imgSrc: "/sm/apple-music.png",
//    url: "https://apple.com"
//  },
  {
    imgSrc: "/sm/facebook.png",
    url: "https://www.facebook.com/search/top?q=tristan%20schulze"
  },
  {
    imgSrc: "/sm/instagram.png",
    url: "https://www.instagram.com/tristan_schulze_musician/"
  },
//  {
//    imgSrc: "/sm/spotify.png",
//    url: "https://spotify.com"
//  },
  {
    imgSrc: "/sm/tiktok.png",
    url: "https://www.tiktok.com/@tristan.schulze"
  },
  {
    imgSrc: "/sm/youtube.png",
    url: "https://www.youtube.com/@HTristanSchulze"
  },
]
</script>

<style lang="scss">
.sm-links a {
  flex-grow: 0;
  flex-shrink: 1;
  max-height:  100%;
}
.sm-link-image {
  border-radius: 1rem;
  background-color: white;
  aspect-ratio: 1 / 1;
}
</style>
