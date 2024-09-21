<template>
  <div class="concert-list">
    <div v-for="c in props.concerts" class="concert-list__item">
      <concert  v-bind="c" class="ma-1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'

interface Props { 
  concerts: Concert[];
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<style lang="scss">
@import '~/assets/scss/utils.scss';

.concert-list {
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  margin: 0 auto 0 auto;

}

.concert-list__item {
  width: 100%;
}


@media (min-width: #{map-get($breakpoints, sm, min-width)}){
  .concert-list__item {
    width: 50%;
  }
}
@media (min-width: #{map-get($breakpoints, md, min-width)}){
  .concert-list__item {
    width: calc(100% / 3);
  }
}
@media (min-width: #{map-get($breakpoints, lg, min-width)}){
  .concert-list__item {
    width: calc(100% / 5);
  }
}

</style>