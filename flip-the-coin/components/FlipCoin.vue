<script setup>
import { ref } from "vue";
import heads from "../resources/heads.svg";
import tails from "../resources/tails.svg";
import shadow from "../resources/shadow.svg";

const headsImage = heads;
const tailsImage = tails;
const shadowImage = shadow;
const currentImage = ref(headsImage);
const currentStatus = ref("Heads");
const rollStatus = ref("0.00");

const flipCoin = () => {
  let rollResult = Math.random();
  let isHeads = rollResult < 0.5;
  currentImage.value = isHeads ? headsImage : tailsImage;
  currentStatus.value = isHeads ? "Heads" : "Tails";
  rollStatus.value = rollResult.toFixed(2);
};
</script>

<template>
  <div class="space-y-10">
    <div class="space-y-10">
      <h1 class="text-7xl font-bold drop-shadow-2xl">Flip the coin</h1>
      <p class="text-2xl font-medium">
        Press the coin or the button to flip the coin
      </p>
    </div>
    <div class="my-15 flex flex-col items-center gap-10">
      <img :src="currentImage" class="max-w-50" @click="flipCoin" />
      <img :src="shadowImage" class="max-w-30" @click="flipCoin" />
    </div>
    <p class="text-3xl font-black">{{ currentStatus }}</p>
    <p class="text-2xl font-medium">
        Less than 0.5 is Heads and above 0.5 is Tails
    </p>
    <p class="text-3xl font-black">{{ rollStatus }}</p>
    <button
      @click="flipCoin"
      class="bg-royal-blue cursor-pointer rounded-lg px-10 py-4 font-black drop-shadow-lg hover:opacity-90 hover:drop-shadow-md active:opacity-70"
    >
      RANDOM
    </button>
  </div>
</template>
