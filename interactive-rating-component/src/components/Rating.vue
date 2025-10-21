<script setup>
// import { defineProps } from "vue";
import starIcon from "@/assets/images/icon-star.svg";
import { ref } from "vue";
const props = defineProps({
  ratings: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["submit"]);

const selectedRating = ref(null);

const selectRating = (rating) => {
  selectedRating.value = rating;
  console.log(`selected rate: ${rating}`);
};

const submitRating = () => {
  if (selectedRating.value !== null) {
    emit("submit", selectedRating.value);
    console.log("submitRating | send Emit");
  }
};
</script>

<template>
  <div
    class="motion-preset-focus motion-delay-300 max-w-100 space-y-6 rounded-3xl bg-[linear-gradient(to_bottom,_#09121b_20%,_#141e30_60%,_#2a1b33_100%,_#d2489a_300%)] p-8 shadow-2xl"
  >
    <div class="bg-neutral-gray-900 inline-block rounded-full p-4">
      <img :src="starIcon" alt="star icon" />
    </div>
    <h2 class="text-2xl font-semibold">How did we do?</h2>
    <p class="text-neutral-gray-500">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <div>
      <div class="flex justify-between pb-2">
        <button
          v-for="rating in ratings"
          :key="rating"
          @click="selectRating(rating)"
          :class="[
            'bg-neutral-gray-950 text-neutral-gray-500 hover:bg-primary-orange size-12 cursor-pointer rounded-full pt-[2px] text-sm leading-none font-bold transition-all hover:text-neutral-950',
            {
              'bg-neutral-white motion-preset-pulse-sm text-neutral-gray-950':
                selectedRating === rating,
            },
          ]"
        >
          {{ rating }}
        </button>
      </div>
    </div>
    <button
      @click="submitRating"
      class="bg-primary-orange text-neutral-gray-900 hover:bg-neutral-white w-full cursor-pointer rounded-full py-3 font-bold uppercase transition-all hover:scale-105 active:scale-100"
    >
      Submit
    </button>
  </div>
</template>
