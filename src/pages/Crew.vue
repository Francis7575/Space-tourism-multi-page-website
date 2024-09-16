<template lang="html">
  <section
    class="pb-[30px] lg:pb-[48px] animate-slide-up md:pl-[40px] lg:pl-[64px] xl:pl-0 xl:max-w-[1110px] xl:mx-auto"
  >
    <Heading id="02" title="Meet your crew" />

    <div
      class="lg:flex lg:items-center lg:gap-[2rem] lg:justify-between lg:mt-[24px]"
    >
      <div>
        <Transition mode="out-in" v-bind="fadeTransition">
          <div
            :key="selectedCrew.name"
            class="mt-[64px]  lg:mt-[80px] flex flex-col lg:items-start lg:text-left items-center px-[1.5rem] md:px-0 text-center"
          >
            <span
              class="text-white-50 font-bellefair uppercase text-[1.12rem] md:text-[1.5rem] lg:text-[2rem]"
            >
              {{ selectedCrew.role }}
            </span>
            <h2
              class="uppercase font-bellefair text-[1.5rem] text-white mt-[8px] mb-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]"
            >
              {{ selectedCrew.name }}
            </h2>
            <p
              class="font-barlow text-lightblue leading-[27px] lg:leading-[32.4px] text-[.935rem] max-w-[512px] lg:text-[1.12rem]"
            >
              {{ selectedCrew.bio }}
            </p>
          </div>
        </Transition>

        <div
          class="flex space-x-4 lg:mt-[140px] lg:space-x-[40px] mt-[60px] justify-center lg:justify-start    "
        >
            <button
              v-for="(option, index) in crewData"
              :key="option.name"
              :aria-pressed="selectedIndex === index"
              :aria-label="'Tab ' + option.name"
              class="size-[10px] lg:size-[15px] bg-white-15 rounded-full hover:bg-white-50"
              :style="{
                backgroundColor: selectedIndex === index ? '#fff' : '',
              }"
              @click="selectCrew(index)"
            ></button>
        </div>
      </div>

      <Transition v-bind="fadeTransition">
        <div
          :key="selectedCrew.images.png"
          class="mt-[55px] max-w-[270px] md:max-w-[446px] xl:max-w-[539px] mx-auto"
        >
          <img
            class="w-full object-cover"
            :src="selectedCrew.images.png"
            alt="Crew Member Image"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from "../components/shared/Heading.vue";
import dataJson from "../assets/data.json";
import { ref } from "vue";
import { fadeTransition } from "@/utils/transitions";

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
