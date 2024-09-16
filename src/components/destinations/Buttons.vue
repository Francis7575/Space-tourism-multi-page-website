<template lang="html">
  <section>
    <div
      class="flex justify-center mt-[2rem] items-center gap-[2rem] font-barlow-condensed"
    >
      <router-link
        v-for="destination in destinations"
        :key="destination.name"
        :to="`/destination/${destination.name.toLowerCase()}`"
        class="tracking-[2.1px] uppercase md:tracking-[2px] md:text-[1rem] text-[.875rem] text-lightblue"
        :class="{
          'border-highlight': true, // Apply border-highlight class always
          active: isActive(destination.name.toLowerCase()), // Add active class if the link is active
        }"
      >
        {{ destination.name }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dataJson from "../../assets/data.json";
import { useRoute } from "vue-router";

const destinations = ref(dataJson.destinations);
const route = useRoute();

const isActive = (name: string) => {
  const currentPath = route.path;
  return currentPath === `/destination/${name}`;  // Check if the current path matches the dynamic destination route
};

</script>

<style scoped>
.border-highlight {
    position: relative;
    transition: color 0.3s ease;
  }

  .border-highlight::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 100%;
    border-bottom: 2px solid #fff;
    transform: scaleX(0); /* Start with zero scale */
    transform-origin: bottom left;
    transition: transform 0.3s ease; /* Transition for smooth effect */
  }

  .border-highlight:hover::after {
    border-bottom: 2px solid #ffffff7f;
    transform: scaleX(1);
  }

  .border-highlight.active::after {
    transform: scaleX(1); /* Scale to full width when active */
    border-bottom: 2px solid #fff; /* Make sure the border is visible */
  }
</style>
