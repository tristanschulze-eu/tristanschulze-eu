<template>
  <div class="bg-primary w-100">
    <div class="pa-4 mx-md-up-16">
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer class="px-4 py-6" :value="doc" />
      </ContentDoc>
      <composition-list :compositions="compositions" class=""/>
      <div class="mt-4 mx-auto ta-center">
        <a href="/works/Werkverzeichnis.ods" download >
          <button>{{ $t('Download Complete List of Works') }}</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: { page: false, surround: false} }) 
import CompositionList from "../components/CompositionList.vue";
const { locale } = useI18n()
const compositions = await queryContent(`/${locale.value}/compositions/`)
  .find()
</script>