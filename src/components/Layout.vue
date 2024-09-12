<template>
  <div>
    <main :class="backgroundClass">
      <Navbar />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./shared/Navbar.vue";

const route = useRoute();
const backgroundImage = ref(""); // Default background

watchEffect(() => {
  // Update the background image based on the route
  if (route.path === "/") {
    backgroundImage.value = "home";
  } else if (route.path === "/destination") {
    backgroundImage.value = "/assets/home/background-about.jpg";
  }
});

const backgroundClass = computed(() => {
  const baseClass = "bg-cover bg-no-repeat min-h-screen";
  switch (backgroundImage.value) {
    case "home":
      return `${baseClass} bg-home-bg-mobile`;
    case "destination":
      return `${baseClass} bg-destination-bg-mobile`;
  }
});
</script>

