<template>
  <div class="pa-4">
    <concert-list :concerts="upcoming" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const concerts = await queryContent(`/${locale.value}/concerts/`)
  .find()

const now = new Date();
const upcoming = concerts.map(
  c => {
    c.start_date = new Date(c.start_date)
    return c
  }
).filter(c => c.start_date > now)
</script>
