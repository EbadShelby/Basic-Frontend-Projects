<script setup>
import Form from "./Form.vue";
import Hero from "./Hero.vue";

import pingIllustration from "@/assets/images/illustration-dashboard.png";
</script>

<template>
  <Hero />
  <Form />
  <img :src="pingIllustration" alt="ping illustration" />
</template>
