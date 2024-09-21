<template>
  <div class="concert">
    <a target="_blank"  :href="props.url">
      <div class="concert__image-container">
        <div class="concert__overlay bg-secondary pa-2">
          <a target="_blank" :href="props.url">{{ displayUrl }} </a>
        </div>
        <nuxt-img class="concert__image" :src="props.image_src" />
      </div>
    </a>
    <div class="pa-1 mt-3 fs-5">
      {{ props.title }}
    </div>
    <div class="pa-1 fs-4">
      {{ displayDate }}
    </div>
    <div class="pa-1 fs-3">
      {{props.description}}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'
const { locale } = useI18n()

const props = withDefaults(defineProps<Concert>(), {
})

const displayUrl = computed(() => {
    const url = new URL(props.url)
    return `${url.protocol}://${url.hostname}/`
  }
)

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
const displayDate = computed(() => {
    const url = new URL(props.url)
    return props.start_date.toLocaleDateString(locale.value, dateOptions)
  }
)

</script>

<style lang="scss">
.concert .concert__image-container { 
  overflow: hidden;
  position: relative;
  border-radius: 1rem;

}
.concert .concert__image { 
  width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

.concert .concert__overlay { 
  position: absolute;

  bottom: 0;
  right: 0;
  transition: .35s ease;
}


@media (pointer:fine) {
  .concert .concert__overlay {
    opacity: .5;
  }
}
.concert__image-container:hover .concert__overlay {
  opacity: 1;
}
</style>