<template>
  <div class="pa-4">
    <concert-list :concerts="past" :pinned-concerts="pinned" />
  </div>
</template>

<script setup lang="ts">
import type { Concert } from '@/types/concert.ts'

const { locale } = useI18n()
const concerts = await queryContent(`/${locale.value}/concerts/`)
  .find()

const now = new Date();
const candidates = concerts.map(
  c => {
    c.start_date = new Date(c.start_date)
    return c
  }
).filter(c => c.start_date < now).sort((a, b) => (b.start_date - a.start_date))

const past = candidates.filter(c => !c.pinned) as unknown as Concert[];
const pinned = candidates.filter(c => c.pinned) as unknown as Concert[];
</script>
