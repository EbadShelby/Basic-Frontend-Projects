<script setup>
import PingComponent from "./components/PingComponent.vue";

import logo from "@/assets/images/logo.svg";
</script>

<template>
  <header>
    <img class="mx-auto mt-20 mb-12" :src="logo" alt="logo" />
  </header>
  <main class="text-center">
    <PingComponent />
  </main>
  <footer class="mx-auto max-w-200 text-center">
    <div>
      <ul class="flex justify-center gap-4">
        <a
          href="#"
          class="hover:bg-secondary-blue size-8 rounded border-1 transition-all duration-250 hover:scale-110"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a
          href="#"
          class="hover:bg-secondary-blue size-8 rounded border-1 transition-all duration-250 hover:scale-110"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          href="#"
          class="hover:bg-secondary-blue size-8 rounded border-1 transition-all duration-250 hover:scale-110"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </ul>
    </div>
    <p class="text-neutral-gray mt-6 mb-10 text-xs">
      &copy; Copyright Ping. All rights reserved
    </p>
  </footer>
</template>
