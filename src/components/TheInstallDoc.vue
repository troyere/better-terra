<script setup lang="ts">
import startScreenshot from '../assets/images/screenshots/2023-09-15_15.35.02.png';
</script>

<template>
  <div class="the-install-doc">
    <div class="the-install-doc__start">
      <img :src="startScreenshot" class="the-install-doc__start-background" />

      <div class="the-install-doc__overlay">
        <header class="the-install-doc__header">
          <h1 class="the-install-doc__title">Better Terra</h1>

          <span class="the-install-doc__sub-title">Documentation</span>
        </header>
      </div>

      <div class="the-install-doc__server-info">
        <p>
          <a href="http://89.87.26.86:25555/betterterra/resources/datapacks">Mods</a>
        </p>

        <p>
          <a href="http://89.87.26.86:25555/betterterra/resources/datapacks">Datapacks</a>
        </p>
      </div>
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

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__header {
    margin-top: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #463D4B;
  }

  &__title {
    font-family: "minecraft-ten";
    font-size: 64px;
    text-align: center;
  }

  &__sub-title {
    font-family: "pro-font-windows";
    font-weight: bold;
    font-size: 24px;
    margin-top: 16px;
  }
}
</style>
