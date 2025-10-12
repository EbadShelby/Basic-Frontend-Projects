<script setup>
import { ref } from "vue";

const btn =
  "w-full rounded-lg px-2 py-4 text-white cursor-pointer active:scale-98";
const inputClass =
  "focus:text-neutral-gray-900 w-full rounded border-1 px-2 py-4 pl-4 text-sm font-bold focus:outline-gray-500 sm:pl-8";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const errors = ref({
  firstName: false,
  lastName: false,
  email: false,
  password: false,
});

const submitForm = () => {
  // Reset errors
  for (let key in errors.value) errors.value[key] = false;

  let hasError = false;

  // Check for empty fields
  if (!firstName.value) {
    errors.value.firstName = true;
    hasError = true;
  }
  if (!lastName.value) {
    errors.value.lastName = true;
    hasError = true;
  }
  if (!email.value) {
    errors.value.email = true;
    hasError = true;
  }
  if (!password.value) {
    errors.value.password = true;
    hasError = true;
  }

  // If there are errors, prevent form submission
  if (hasError) {
    return;
  }

  // Continue with form submission if no errors
  console.log("Form submitted successfully");
};
</script>

<template>
  <div
    class="mx-auto flex max-w-100 flex-col gap-14 px-2 text-center sm:max-w-280 sm:flex-row sm:text-start"
  >
    <div class="flex flex-col justify-center text-white sm:flex-1">
      <h1 class="mb-8 text-3xl font-black sm:text-[3rem]/14">
        Learn to code by watching others
      </h1>
      <p class="text-[1rem]/6.5">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how deelopers think is
        invaluable.
      </p>
    </div>
    <div class="flex-1">
      <button
        class="bg-accent-purple-700 btn mb-6 text-sm shadow-[0px_8px_0px_0px] shadow-black/20 sm:text-base"
        :class="btn"
      >
        <span class="font-bold">Try it free 7 days</span> then $20/mo.
        thereafter
      </button>
      <form
        action=""
        @submit.prevent="submitForm"
        class="grid gap-6 rounded-lg bg-white p-10 shadow-[0px_8px_0px_0px] shadow-black/20"
      >
        <div>
          <label for="firstName"></label>
          <input
            v-model="firstName"
            :class="[
              inputClass,
              errors.firstName
                ? 'border-primary-red-400 placeholder-primary-red-400 focus:outline-primary-red-400 border-2'
                : 'border-gray-300',
            ]"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label for="lastName"></label>
          <input
            v-model="lastName"
            :class="[
              inputClass,
              errors.lastName
                ? 'border-primary-red-400 placeholder-primary-red-400 focus:outline-primary-red-400 border-2'
                : 'border-gray-300',
            ]"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label for="emailAdd"></label>
          <input
            v-model="email"
            :class="[
              inputClass,
              errors.email
                ? 'border-primary-red-400 placeholder-primary-red-400 focus:outline-primary-red-400 border-2'
                : 'border-gray-300',
            ]"
            id="emailAdd"
            name="emailAdd"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label for="password"></label>
          <input
            v-model="password"
            :class="[
              inputClass,
              errors.password
                ? 'border-primary-red-400 placeholder-primary-red-400 focus:outline-primary-red-400 border-2'
                : 'border-gray-300',
            ]"
            id="password"
            name="password"
            type="password"
            minlength="6"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          class="bg-primary-green-400 font-bold shadow-[0px_4px_0px_0px] shadow-green-600"
          :class="btn"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p class="text-neutral-purple-350 text-center text-[.625rem]">
          By clicking the button, you are agreeing with our
          <span class="text-primary-red-400 font-bold">Terms and Services</span>
        </p>
      </form>
    </div>
  </div>
</template>
