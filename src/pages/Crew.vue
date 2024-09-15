<template lang="html">
  <section class="pb-[30px] animate-slide-up">
    <Heading id="02" title="MEET YOUR CREW" />
    <div class="mt-[64px] flex flex-col items-center px-[1.5rem] text-center">
      <span class="text-white-50 font-bellefair uppercase text-[1.12rem]">
        {{ selectedCrew.role }}
      </span>
      <h2
        class="uppercase font-bellefair text-[1.5rem] text-white mt-[8px] mb-[1.5rem]"
      >
        {{ selectedCrew.name }}
      </h2>
      <p class="font-barlow text-lightblue leading-[27px] text-[.935rem]">
        {{ selectedCrew.bio }}
      </p>
    </div>

    <div class="flex space-x-4 mt-[70px] justify-center">
      <button
        v-for="(option, index) in crewData"
        :key="option.name"
        :aria-pressed="selectedIndex === index"
        :aria-label="'Tab ' + option.name"
        class="size-[10px] bg-white-15 rounded-full hover:bg-white-50"
        :style="{ backgroundColor: selectedIndex === index ? '#fff' : '' }"
        @click="selectCrew(index)"
      ></button>
    </div>

    <div class="mt-[55px] max-w-[270px] mx-auto overflow-hidden">
      <transition name="fade">
        <img
          :key="selectedCrew.name"
          :src="selectedCrew.images.png"
          alt="Crew Member Image"
        />
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from "../components/shared/Heading.vue";
import dataJson from "../assets/data.json";
import { ref } from "vue";

// Reactive state for selected crew
const crewData = ref(dataJson.crew);
const selectedIndex = ref(0);
const selectedCrew = ref(crewData.value[selectedIndex.value]);

// Function to update selected crew member
function selectCrew(index: number) {
  selectedIndex.value = index;
  selectedCrew.value = crewData.value[index];
}
</script>

<style scoped>

</style>
