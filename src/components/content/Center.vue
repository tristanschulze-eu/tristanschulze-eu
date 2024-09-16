<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.center {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>