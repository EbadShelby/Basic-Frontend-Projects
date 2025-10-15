<script setup>
import { ref } from "vue";

const email = ref("");
const errors = ref({
  email: false,
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const submitForm = () => {
  errors.value.email = false;

  if (!email.value || !emailRegex.test(email.value)) {
    errors.value.email = true;
    return;
  }

  if (!email.value) {
    errors.value.email = true;
    return;
  }

  email.value = "";
};
</script>

<template>
  <form action="" class="mx-auto mb-20 max-w-200" @submit.prevent="submitForm">
    <div class="flex justify-center gap-4">
      <div class="relative">
        <label for="email"></label>
        <input
          v-model="email"
          :class="[
            errors.email
              ? 'border-secondary-red motion-preset-shake placeholder-secondary-red focus:outline-secondary-red border-2'
              : 'border-neutral-gray',
          ]"
          class="box-border w-100 rounded-full border px-6 py-4 text-base"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <p
          v-if="errors.email"
          class="text-secondary-red absolute px-6 py-2 text-xs italic"
        >
          Please provide a valid email address
        </p>
      </div>
      <button
        class="bg-primary-blue cursor-pointer rounded-full px-14 py-4 text-base font-medium text-white"
        type="submit"
      >
        Notify Me
      </button>
    </div>
  </form>
</template>
