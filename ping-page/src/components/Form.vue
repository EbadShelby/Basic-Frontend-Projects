<script setup>
import { ref } from "vue";

const email = ref("");
const message = ref("");
const errors = ref({
  email: false,
});

const isSuccess = ref(false);

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const shakeKey = ref(0);

const submitForm = () => {
  errors.value.email = false;
  isSuccess.value = false;
  if (!email.value) {
    errors.value.email = true;
    message.value = "Email cannot be empty!";
    shakeKey.value++;
    return;
  }
  if (!emailRegex.test(email.value)) {
    errors.value.email = true;
    message.value = "Please provide a valid email address!";
    shakeKey.value++;
    return;
  }
  isSuccess.value = true;
  message.value = "Successfully subscribed!";
  shakeKey.value++;
  email.value = "";
};
</script>

<template>
  <form action="" class="mx-auto mb-20 max-w-200" @submit.prevent="submitForm">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div class="w-full max-w-100 sm:relative">
        <label for="email" class="sr-only">Email Address</label>
        <input
          v-model="email"
          :key="shakeKey"
          :class="[
            errors.email
              ? 'border-secondary-red motion-preset-shake placeholder-secondary-red focus:outline-secondary-red border-2'
              : isSuccess
                ? 'motion-preset-fade-lg border-2 border-green-600 placeholder-green-500 focus:outline-green-500'
                : 'border-neutral-gray focus:outline-neutral-gray',
          ]"
          class="box-border w-full rounded-full border px-6 py-4 text-base"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <p
          v-if="errors.email"
          class="text-secondary-red px-6 py-2 text-xs italic sm:absolute"
        >
          {{ message }}
        </p>
        <p
          v-if="isSuccess"
          class="motion-preset-fade-lg absolute px-6 py-2 text-xs text-green-500 italic"
        >
          {{ message }}
        </p>
      </div>
      <button
        class="bg-primary-blue sm:max-w-auto w-full max-w-100 cursor-pointer rounded-full px-14 py-4 text-base font-medium text-white transition-all duration-100 hover:scale-105 active:scale-95 sm:w-auto"
        type="submit"
      >
        Notify Me
      </button>
    </div>
  </form>
</template>
