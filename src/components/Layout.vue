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
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./shared/Navbar.vue";

const route = useRoute();
const backgroundImage = ref(""); // Default background

watch(() => route.path, (newPath) => {
  // Update the background image based on the route
  if (newPath === '/') {
    backgroundImage.value = 'home';
  } else if (newPath.startsWith('/destination')) { 
    backgroundImage.value = 'destination';
  } else if (newPath === '/crew') {
    backgroundImage.value = 'crew';
  } else if (newPath === '/technology') {
    backgroundImage.value = 'technology';
  }
}, { immediate: true }); // Trigger the watch immediately

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
