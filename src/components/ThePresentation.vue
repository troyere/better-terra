<script setup lang="ts">
import {
  getOneStartScreenshot,
  getSomeEndScreenshots,
  getSomeNetherScreenshots,
  getSomeOverworldScreenshots
} from '../lib/ScreenshotsUtils';

const startScreenshot = getOneStartScreenshot();

const overworldScreenshots = getSomeOverworldScreenshots(5);
const netherScreenshots = getSomeNetherScreenshots(5);
const endScreenshots = getSomeEndScreenshots(5);
</script>

<template>
  <div class="the-presentation">
    <div class="the-presentation__start">

      <img :src="startScreenshot" class="the-presentation__start-background" />

      <div class="the-presentation__overlay">
        <header class="the-presentation__header">
          <h1 class="the-presentation__title">Better Terra</h1>

          <span class="the-presentation__sub-title">Coming soon !</span>
        </header>
      </div>
    </div>

    <div class="the-presentation__dimension">
      <h2 class="the-presentation__dimension-title">
        Overworld
      </h2>

      <p class="the-presentation__dimension-desc">
        On vous le présente plus, vous connaissez...
        <br />
        A ceci près qu'il est modifié par l'impressionant mod <a href="https://modrinth.com/mod/terralith">Terralith</a>,
        et bien d'autres encore !
      </p>
    </div>

    <div v-for="url in overworldScreenshots" :key="url" class="the-presentation__dimension-imgs">
      <img :src="url" class="the-presentation__dimension-img" />
    </div>

    <div class="the-presentation__dimension">
      <h2 class="the-presentation__dimension-title">
        Nether
      </h2>

      <p class="the-presentation__dimension-desc">
        La dimension infernale ! Quoique...
        <br />
        Transformé par l'incroyable mod <a href="https://modrinth.com/mod/betternether">BetterNether</a>,
        il est désormais parsemé de mystérieux biomes.
      </p>
    </div>

    <div v-for="url in netherScreenshots" :key="url" class="the-presentation__dimension-imgs">
      <img :src="url" class="the-presentation__dimension-img" />
    </div>

    <div class="the-presentation__dimension">
      <h2 class="the-presentation__dimension-title">
        End
      </h2>

      <p class="the-presentation__dimension-desc">
        La dernière dimension, vide de toute vie dit-on...
        <br />
        Pas tout à fait, grâce au sublime mod <a href="https://modrinth.com/mod/betterend">BetterEnd</a> !
      </p>
    </div>

    <div v-for="url in endScreenshots" :key="url" class="the-presentation__dimension-imgs">
      <img :src="url" class="the-presentation__dimension-img" />
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
    text-align: center;
  }

  &__sub-title {
    font-family: "pro-font-windows";
    font-weight: bold;
    font-size: 24px;
    margin-top: 16px;
  }

  &__dimension {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    justify-content: center;
    align-items: center;
    color: #463D4B;
  }

  &__dimension-title {
    font-family: "minecraft-ten";
    font-size: 32px;
  }

  &__dimension-desc {
    text-align: center;
  }

  &__dimension-img {
    display: block;
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
}
</style>
