<script setup lang="ts">
import startScreenshot from '../assets/images/screenshots/2023-09-15_15.35.02.png';
</script>

<template>
  <div class="the-install-doc">
    <div class="the-install-doc__start">
      <img :src="startScreenshot" class="the-install-doc__start-background" />
    </div>
  </div>
</template>

<style lang="scss">
.the-install-doc {
  &__start {
    display: flex;
  }

  &__start-background {
    display: block;
    max-width: 100%;
    min-height: 100vh;
    width: auto;
    height: auto;
    object-fit: cover;
  }
}
</style>
