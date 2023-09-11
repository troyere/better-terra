<script setup lang="ts">
import { getScreenshotUrl } from '../lib/ScreenshotUrlResolver';

const startBackground = getScreenshotUrl('overworld/2023-09-10_15.12.59.webp');
</script>

<template>
  <div class="the-presentation">
    <div class="the-presentation__start">
      <img :src="startBackground" class="the-presentation__start-background" />

      <div class="the-presentation__overlay">
        <header class="the-presentation__header">
          <h1 class="the-presentation__title">Better Terra</h1>

          <span class="the-presentation__sub-title">Coming soon !</span>
        </header>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.the-presentation {
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

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  &__header {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #463D4B;
  }

  &__title {
    font-family: "minecraft-ten";
    font-size: 64px;
  }

  &__sub-title {
    font-family: "pro-font-windows";
    font-weight: bold;
    font-size: 24px;
    margin-top: 16px;
  }
}
</style>
