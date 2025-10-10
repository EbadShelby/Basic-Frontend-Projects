<script setup>
import faqsData from "@/faqs.json";
import { PlusIcon } from "@heroicons/vue/24/solid";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import { MinusCircleIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const faqs = ref(faqsData);
console.log(faqs.value[0].question);

const openStates = ref(faqsData.map(() => false));
const toggle = (i) => {
  openStates.value[i] = !openStates.value[i];
};
</script>

<template>
  <div
    class="absolute top-0 right-0 left-0 bg-[url('../assets/images/background-pattern-desktop.svg')] md:h-100 xl:h-80"
  ></div>
  <div
    class="relative z-50 mt-60 max-w-150 rounded-2xl bg-purple-50 p-6 shadow-2xl"
  >
    <div class="mb-15 flex items-center gap-2">
      <PlusIcon class="mt-1 w-8 stroke-purple-600 stroke-4" />
      <h1 class="text-4xl font-black">FAQs</h1>
    </div>
    <div
      v-for="(faq, i) in faqs"
      class="flex items-start justify-between gap-4"
    >
      <div class="mb-12">
        <h2 class="mb-2 font-bold">
          {{ faq.question }}
        </h2>
        <Transition
          enter-active-class="transition-all duration-200 ease-in-out"
          leave-active-class="transition-all duration-200 ease-in-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-40"
          leave-from-class="opacity-100 max-h-40"
          leave-to-class="opacity-0 max-h-0"
        >
          <p
            v-if="openStates[i]"
            class="motion-preset-pop motion-duration-200 max-w-120"
          >
            {{ faq.answer }}
          </p>
        </Transition>
      </div>
      <PlusCircleIcon
        v-if="!openStates[i]"
        class="w-8 shrink-0 cursor-pointer stroke-purple-600 stroke-2"
        @click="toggle(i)"
      />
      <MinusCircleIcon
        v-if="openStates[i]"
        class="w-8 shrink-0 cursor-pointer stroke-purple-600 stroke-2"
        @click="toggle(i)"
      />
    </div>
  </div>
</template>
