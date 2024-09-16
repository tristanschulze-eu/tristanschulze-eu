<template>
  <div>
    <concert-list :concerts="concerts.body" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const concerts = await queryContent(`/${locale.value}/concerts`).findOne()
</script>