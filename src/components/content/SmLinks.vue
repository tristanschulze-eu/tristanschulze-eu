<template>
  <div class="sm-links">
    <a v-for="sml in links" target="_blank" :href="sml.url">
      <img class="sm-link-image ma-2" :src="sml.imgSrc"  />
    </a>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    imgSrc: "/sm/apple-music.png",
    url: "https://apple.com"
  },
  {
    imgSrc: "/sm/facebook.png",
    url: "https://facebook.com"
  },
  {
    imgSrc: "/sm/instagram.png",
    url: "https://instagram.com"
  },
  {
    imgSrc: "/sm/spotify.png",
    url: "https://spotify.com"
  },
  {
    imgSrc: "/sm/tiktok.png",
    url: "https://tiktok.com"
  },
  {
    imgSrc: "/sm/youtube.png",
    url: "https://youtube.com"
  },
]
</script>

<style lang="scss">
.sm-link-image {
  border-radius: 1rem;
  background-color: white;
  height: 80px;
  aspect-ratio: 1 / 1;
}
.sm-links {
  max-width: 380px;
}
</style>