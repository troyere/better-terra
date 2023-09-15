<script setup lang="ts">
import blastFurnace from '../assets/images/blast-furnace.png';
import blastFurnaceLit from '../assets/images/blast-furnace-lit.png';
import wallHangingSign from '../assets/images/wall-hanging-sign-oak.png';
import { ref } from 'vue';

const isHovering = ref(false);

const onMouseHover = () => isHovering.value = true;
const onMouseOut = () => isHovering.value = false;
</script>

<template>
  <RouterLink :to="{ name: 'install-doc' }" class="block-link" @mouseleave="onMouseOut" @mouseover="onMouseHover">
    <div class="block-link__blast-furnace-wrapper">
      <img :src="blastFurnace" class="block-link__blast-furnace-off" />

      <Transition name="block-link__blast-furnace-lit-">
        <img :src="blastFurnaceLit" class="block-link__blast-furnace-lit" v-if="isHovering" />
      </Transition>
    </div>

    <div class="block-link__hanging-sign-wrapper">
      <img :src="wallHangingSign" class="block-link__hanging-sign" />

      <Transition name="block-link__hanging-sign-glow-">
        <img :src="wallHangingSign" class="block-link__hanging-sign-glow" v-if="isHovering" />
      </Transition>

      <span class="block-link__text">Doc</span>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.block-link {
  $block-element: &;

  display: flex;
  flex-direction: column;
  margin-top: 16px;
  position: relative;

  &__blast-furnace-wrapper {
    width: 300px;
    height: 300px;
  }

  &__blast-furnace-off {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 2px #474748);
  }

  &__blast-furnace-lit {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;

    &--enter-from,
    &--leave-to {
      opacity: 0;
    }

    &--enter-active,
    &--leave-active {
      transition-property: opacity;
      transition-duration: 150ms;
    }
  }

  &__hanging-sign-wrapper {
    position: absolute;
    left: -63px;
    top: 59px;
    width: 263px;
    height: 263px;
  }

  &__hanging-sign {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 10px #B79456);

    #{$block-element}:hover & {
      filter: drop-shadow(0 0 15px #B79456);
    }
  }

  &__hanging-sign-glow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;

    &--enter-from,
    &--leave-to {
      opacity: 0;
    }

    &--enter-active,
    &--leave-active {
      transition-property: opacity;
      transition-duration: 150ms;
    }
  }

  &__text {
    position: absolute;
    transform: skew(0deg, 27deg);
    top: 131px;
    left: 88px;
    font-family: "minecraft-ten";
    font-size: 40px;
    color: white;
    opacity: 0.5;
    transition-property: opacity;
    transition-duration: 150ms;

    #{$block-element}:hover & {
      opacity: 0.8;
      filter: drop-shadow(0 0 16px white);
    }
  }
}
</style>
