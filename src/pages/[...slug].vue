<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer class="px-4 py-6 w-100 bg-primary" :value="doc" />
  </ContentDoc>
</template>
