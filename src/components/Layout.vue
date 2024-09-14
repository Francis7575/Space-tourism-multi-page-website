<template>
  <div>
    <main class="" 
        :class="backgroundClass">
      <Navbar />
      <router-view />
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
    backgroundImage.value = "destination";
  } else if (route.path === "/crew") {
    backgroundImage.value = "crew";
  } else if (route.path === "/technology") {
    backgroundImage.value = "technology";
  }
});

const backgroundClass = computed(() => {
  const baseClass = " bg-cover bg-no-repeat bg-center min-h-screen ";
  switch (backgroundImage.value) {
    case "home":
      return `${baseClass} bg-home-mobile md:bg-home-tablet lg:bg-home-desktop`;
    case "destination":
      return `${baseClass} bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop`;
    case "crew":
      return `${baseClass} bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop`;
    case "technology":
      return `${baseClass} bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop`;
  }
});
</script>
