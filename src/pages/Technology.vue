<template lang="html">
  <section class="animate-slide-up pb-[48px] lg:pl-[165px]">
    <div class="pl-[2.5rem] lg:px-0 lg:mt-[48px] lg:mb-[24px]">
      <Heading id="03" title="Space Launch 101" />
    </div>
    <Transition mode="out-in" v-bind="fadeTransition">
      <div :key="selectedTechnology.name" class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="mt-[90px] mb-[2rem] lg:order-3 lg:col-span-1">
          <picture>
            <source
              :srcset="selectedTechnology.images.desktop"
              media="(min-width: 1024px)"
            />
            <source
              :srcset="selectedTechnology.images.tablet"
              media="(min-width: 768px)"
            />
            <img
              :src="selectedTechnology.images.mobile"
              alt="Technology Image"
              class="w-full object-cover h-auto"
            />
          </picture>
        </div>
        <div class="lg:flex lg:gap-[64px] lg:order-1 lg:col-span-1">
        <div class="flex lg:flex-col lg:max-w-[80px] items-center justify-center lg:gap-8 gap-4 ">
          <button
            v-for="(option, index) in technologyData"
            :key="option.name"
            :aria-pressed="selectedIndex === index"
            :aria-label="'Tab ' + option.name"
            :class="{
              'bg-white text-black': selectedIndex === index,
              'bg-transparent text-white border border-white-25':
                selectedIndex !== index,
              'hover:border-white': true,
            }"
            class="size-[40px] md:size-[56px] lg:text-[2rem] lg:size-[80px] lg:py-0 rounded-[999px] text-[1.12rem]"
            @click="selectTechnology(index)"
          >
            {{ option.number }}
          </button>
        </div>  
        <div class="flex flex-col gap-4 mt-[40px] lg:mt-0 items-center lg:order-2 lg:items-start">
          <span class="uppercase text-[1.12rem] md:text-[1.5rem] lg:text-[2rem] text-white-50 font-bellefair">
            The Terminology…
          </span>
          <h2 class="uppercase text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] font-bellefair text-white">
            {{ selectedTechnology.name }} 
          </h2>
          <p
            class="text-lightblue leading-[27px] font-barlow text-[.935rem] lg:text-[1.12rem] lg:text-left text-center lg:px-0 px-[24px] max-w-[512px]"
          >
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>  
    </Transition>
  </section>
</template>
<script setup lang="ts">
import Heading from "../components/shared/Heading.vue";
import dataJson from "../assets/data.json";
import { ref } from "vue";
import { fadeTransition } from "@/utils/transitions";

const technologyData = ref(dataJson.technology);
const selectedIndex = ref(0);
const selectedTechnology = ref(technologyData.value[selectedIndex.value]);

// Function to update selected techonologies
function selectTechnology(index: number) {
  selectedIndex.value = index;
  selectedTechnology.value = technologyData.value[index];
}
</script>
<style scoped></style>
