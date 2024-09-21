<template>
  <div class="w-100 mh-100 bg-primary">
    <div class="concert-menu bg-secondary pa-4">
      <nuxt-link 
        class="router-link mr-6 mr-md-up-8 fs-4"
        :to="localePath('/concerts/upcoming')">
        {{ $t('UPCOMING') }}
      </nuxt-link>
      <nuxt-link 
        class="router-link mr-6 mr-md-up-8 fs-4" 
        :to="localePath('/concerts/past')">
        {{ $t('PAST') }}
      </nuxt-link>
    </div>
    <div class="bg-primary">
      <nuxt-page />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: { page: false, surround: false} }) 

const localePath = useLocalePath();
const route = useRoute();
if (route.path.endsWith("concerts")) {
  await navigateTo(localePath('/concerts/upcoming'))
}
</script>

<style>
.concert-menu {
  border-bottom: 1px solid white;
}
</style>