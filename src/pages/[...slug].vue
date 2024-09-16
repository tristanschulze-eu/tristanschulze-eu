<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer class="px-4 py-6 w-100 bg-primary" :style="containerStyle(doc)" :value="doc" />
  </ContentDoc>
</template>

<script setup lang="ts">
const containerStyle = (doc: any) => {
  if (doc.backgroundImage) {
    return {
      'background-image': `url(${doc.backgroundImage})`,
      'background-size': 'cover'
    }
  }
}
</script>