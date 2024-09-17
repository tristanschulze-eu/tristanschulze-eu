<template>
  <div class="concert-list">
    <div v-for="c in props.concerts" class="concert-list__item">
      <concert  v-bind="c"/>
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
.concert-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;
}

.concert-list__item {
  width: 80%;
  margin: 0 auto 0 auto;
}

@media only screen and (min-width: 600px) {
  .concert-list__item {
    width: 30%;
  }
}

@media only screen and (min-width: 960px) {
  .concert-list__item {
    width: 20%;
  }
}

</style>