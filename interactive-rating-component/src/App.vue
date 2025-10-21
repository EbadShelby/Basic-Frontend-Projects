<script setup>
import { ref } from "vue";
import Rating from "./components/Rating.vue";
import SuccessMessage from "./components/SuccessMessage.vue";

const ratings = ref([1, 2, 3, 4, 5]);
const selectedRating = ref(null);
const isSubmitted = ref(false);

const handleSubmit = (rating) => {
  selectedRating.value = rating;
  console.log(
    `recieved selected rate from Rating.vue: ${selectedRating.value}`,
  );
  isSubmitted.value = true;
};
</script>

<template>
  <main>
    <SuccessMessage v-if="isSubmitted" :rating="selectedRating" />
    <Rating v-else :ratings="ratings" @submit="handleSubmit" />
  </main>
</template>
