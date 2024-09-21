<template>
  <div class="bg-primary w-100">
    <div class="pa-4 mx-md-up-16">
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer class="px-4 py-6" :value="doc" />
      </ContentDoc>
      <composition-list :compositions="compositions" class=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompositionList from "../components/CompositionList.vue";
const { locale } = useI18n()
const compositions = await queryContent(`/${locale.value}/compositions/`)
  .find()
</script>