<template>
  <div class="composition-list">
    <div v-for="comps, cat in compositionsByCategory" class="composition-list__item">
      <h2>{{cat}}</h2>
      <div v-for="composition in comps" class="composition-list__item">
        <div>
        {{ composition.title }}
        </div>
        <div>
        {{ composition.instrumentation }}
        </div>
        <div>
        {{ composition.links }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { groupBy } from 'lodash-es';

import type { Composition } from '@/types/concert.ts'

interface Props { 
  compositions: Composition[];
}

const props = withDefaults(defineProps<Props>(), {
})


const compositionsByCategory = computed(() => {
  return groupBy(props.compositions, "category")
})
</script>

<style lang="scss">

</style>