<script setup>
import Form from "./Form.vue";
import Hero from "./Hero.vue";

import pingIllustration from "@/assets/images/illustration-dashboard.png";
</script>

<template>
  <Hero />
  <Form />
  <div class="max mx-auto max-w-200">
    <img
      class="mx-auto mb-20 w-full max-w-160"
      :src="pingIllustration"
      alt="ping illustration"
    />
  </div>
</template>
