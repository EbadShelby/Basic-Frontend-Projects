<script setup>
import Form from "./Form.vue";
import Hero from "./Hero.vue";

import pingIllustration from "@/assets/images/illustration-dashboard.png";
</script>

<template>
  <Hero />
  <Form />
  <div class="max-w-200 mx-auto">
    <img class="max-w-160 mx-auto mb-20" :src="pingIllustration" alt="ping illustration" />
  </div>
</template>
