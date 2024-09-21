<template>
  <div class="pa-4">
    <concert-list :concerts="past" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const concerts = await queryContent(`/${locale.value}/concerts/`)
  .find()

const now = new Date();
const past = concerts.map(
  c => {
    c.start_date = new Date(c.start_date)
    return c
  }
).filter(c => c.start_date < now)
</script>
