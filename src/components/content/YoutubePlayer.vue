<template>
  <div class="yt-player">
    <iframe
      height="280"
      :src="`https://www.youtube-nocookie.com/embed/${props.videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoId: string;
}
const props = withDefaults(defineProps<Props>(), {
})

</script>

<style lang="scss">
@import '~/assets/scss/utils.scss';

.yt-player {
  margin: auto;
}
.yt-player iframe {
  width: 200px;
  height: 120px;
  border-radius: 1rem;
}
@media (min-width: #{map-get($breakpoints, sm, min-width)}){
  .yt-player iframe {
    width: 300px;
    height: 180px;
  }
}
@media (min-width: #{map-get($breakpoints, md, min-width)}){
  .yt-player iframe {
    width: 350px;
    height: 200px;
  }
}
@media (min-width: #{map-get($breakpoints, lg, min-width)}){
  .yt-player iframe {
    width: 400px;
    height: 250px;
  }
}
</style>