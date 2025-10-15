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
  <footer class="text-center max-w-200 mx-auto">
    <div>
      <ul class="flex justify-center gap-4">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </ul>
    </div>
    <p class="text-xs text-neutral-gray mt-6 mb-10">&copy;Copyright Ping. All rights reserved</p>
  </footer>
</template>
