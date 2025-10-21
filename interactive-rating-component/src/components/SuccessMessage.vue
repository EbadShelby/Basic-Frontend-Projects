<script setup>
import { onMounted, ref } from "vue";
import illustrationThankYou from "@/assets/images/illustration-thank-you.svg";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

const imageLoaded = ref(false);

onMounted(() => {
  const img = new Image();
  img.src = illustrationThankYou;
  img.onload = () => {
    imageLoaded.value = true;
  };
  console.log(`received selected rate from App.vue: ${props.rating}`);
});
</script>
<template>
  <div
    class="motion-preset-pop motion-duration-300 max-w-100 space-y-4 rounded-2xl bg-[linear-gradient(to_bottom,_#09121b_10%,_#141e30_60%,_#2a1b33_80%,_#d2489a_300%)] p-8 text-center shadow-2xl"
  >
    <img
      v-if="imageLoaded"
      class="mx-auto mb-8"
      :src="illustrationThankYou"
      alt="thank-you"
    />
    <div
      class="bg-neutral-gray-950 mx-auto mb-10 flex w-full max-w-60 items-center justify-center rounded-full px-6 py-3"
    >
      <p class="text-primary-orange leading-none font-medium">
        You selected
        <span class="motion-preset-focus motion-delay-500 font-black">{{
          rating
        }}</span>
        out of 5
      </p>
    </div>
    <h2
      class="motion-preset-pop motion-duration-300 motion-delay-1100 text-3xl font-bold"
    >
      Thank you! HAHAH
    </h2>
    <p
      class="text-neutral-gray-500 motion-preset-pop motion-duration-300 motion-delay-1400"
    >
      We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!
    </p>
  </div>
</template>
