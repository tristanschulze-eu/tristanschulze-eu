<template>
  <div class="pa-4">
    <concert-list :concerts="concerts" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const concerts = await queryContent(`/${locale.value}/concerts/`)
  .find()
</script>
