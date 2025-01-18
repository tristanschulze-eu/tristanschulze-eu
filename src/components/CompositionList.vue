<template>
  <client-only>
    <vue-collapsible-panel-group accordion class="composition-list">
      <vue-collapsible-panel v-for="comps, cat in compositionsByCategory" :expanded="false">
        <template #title class="composition-list__category">
          <span class="fs-6">{{ cat }}</span>
        </template>
        <template #content>
          <table class="composition-list__table">
            <thead>
              <tr class="fs-5">
                <th>{{ $t('Title') }}</th>
                <th>{{ $t('Instrumentation') }}</th>
                <th>{{ $t('Material') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="composition in comps" class="composition-list__item">
                <td>{{ composition.title }}</td>
                <td>{{ getInstrString(composition) }}</td>
                <td>
                  <span v-for="link, i in composition.links" >
                    <a target="_blank" :href="link.url">
                      {{ link.name }}
                    </a>
                    <span v-if="i !== composition.links.length-1">, </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>           
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </client-only>
</template>

<script setup lang="ts">
import { groupBy, orderBy, pick } from 'lodash-es';

import type { Composition } from '@/types/concert.ts'

interface Props {
  compositions: Composition[];
}

const props = withDefaults(defineProps<Props>(), {
})

const expandedCategory = ref<number | string>("");

const compositionsByCategory = computed(() => {
  const sorted = orderBy(props.compositions, ["title"], "asc")
  const grouped = groupBy(sorted, "category");
  const sortedCategories = pick(grouped, Object.keys(grouped).sort());
  return sortedCategories;
});

const getInstrString = (c: Composition) => {
  return c.instrumentation.join(", ")
}

</script>

<style lang="scss">
.vcpg.composition-list {
  // Collapsible Panel
  --base-color: var(--color-primary) !important;
  --border-color: var(--color-black) !important;
  --bg-color-header: var(--color-primary) !important;
  border-radius: 1rem;
  border: 1.5px solid black;
  overflow: hidden;
}

.composition-list__table {
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  
  th {
    text-align: start;
  }
  tr {
    text-align: start;
    border-bottom: 1px dotted black !important;
  }
  td, th {
    padding-bottom: .5rem;
    padding-top: .5rem;
  }
}
</style>