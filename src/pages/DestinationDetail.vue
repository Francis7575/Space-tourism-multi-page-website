<template lang="html">
  <section
    class="pb-[1.5rem] pl-[40px] lg:pl-[64px] xl:max-w-[1110px] xl:mx-auto mt-[40px]"
  >
    <Heading />
    <div v-if="filteredDestination" class="text-white xl:flex xl:justify-between xl:gap-[32px]">
      <img
        :src="filteredDestination.images.png"
        :alt="filteredDestination.images.alt"
        class="max-w-[228px] md:max-w-[457px] xl:w-[100%] mx-auto xl:mx-0 mt-[1.5rem] md:mt-[3.5rem] mb-[69px]"
      />
      <div
        class="flex flex-col items-center xl:items-start max-w-[550px] mx-auto mt-[1.5rem] px-[1.5rem] xl:mx-0 md:px-0"
      >
      <Buttons />
        <h2 class="font-bellefair uppercase text-[3.5rem] mb-4 md:text-[5rem] xl:mt-[40px xl:text-[6rem]">
          {{ filteredDestination.name }}
        </h2>
        <p
          class="mb-[25px] xl:mb-[40px] font-barlow text-lightblue leading-[27px] text-center xl:text-[1.12rem] xl:text-left xl:max-w-[430px]"
        >
          {{ filteredDestination.description }}
        </p>
        <section
          class="md:flex md:items-center md:justify-between md:w-full md:border-t md:border-white-25 pt-[25px] xl:pt-[41px]"
        >
          <div class="flex flex-col items-center gap-[12px] uppercase">
            <span
              class="font-barlow-condensed tracking-[2px] text-lightblue text-[.875rem]"
            >
              AVG. Distance:
            </span>
            <span class="font-bellefair text-white text-[1.75rem]">
              {{ filteredDestination.distance }}
            </span>
          </div>
          <div
            class="flex flex-col mt-[1.5rem] md:mt-0 items-center gap-[12px] uppercase"
          >
            <span
              class="font-barlow-condensed tracking-[2px] text-lightblue text-[.875rem]"
            >
              Est. travel time
            </span>
            <span class="font-bellefair text-white text-[1.75rem]">
              {{ filteredDestination.travel }}
            </span>
          </div>
        </section>
      </div>
    </div>

    <div v-if="!filteredDestination">
      <p>No destination found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from "../components/destinations/Heading.vue";
import Buttons from "../components/destinations/Buttons.vue";
import dataJson from "../assets/data.json";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import type { spaceTypes } from "@/types/types";

const route = useRoute();
const spaceData: spaceTypes = dataJson;
const destinationName = ref(route.params.name as string);

watch(
  () => route.params.name,
  (newName) => {
    destinationName.value = newName as string;
  }
);

// Find the destination data that matches the `name` in the route
const filteredDestination = computed(() =>
  spaceData.destinations.find(
    (dest) => dest.name.toLowerCase() === destinationName.value.toLowerCase()
  )
);

defineExpose({
  Heading,
  Buttons,
  filteredDestination,
});
</script>
<style lang=""></style>
