<script setup>
import PingComponent from "./components/PingComponent.vue";

import logo from "@/assets/images/logo.svg";
</script>

<template>
  <header>
    <img :src="logo" alt="logo" />
  </header>
  <main>
    <PingComponent />
  </main>
  <footer>
    <div>
      <ul>
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </ul>
    </div>
    <p>&copy;Copyright Ping. All rights reserved</p>
  </footer>
</template>
