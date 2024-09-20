<template>
  <div>
    <div>
      <composition-list :compositions="compositions"/>
    </div>
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="px-4 py-6 w-100 bg-primary" :value="doc" />
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
import CompositionList from "../components/CompositionList.vue";
const { locale } = useI18n()
const compositions = await queryContent(`/${locale.value}/compositions/`)
  .find()

</script>