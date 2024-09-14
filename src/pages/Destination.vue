<template lang="">
  <div>
    <div v-for="(destination, idx) in dataJson.destinations" :key="idx">
      <img
        :src="destination.images.png"
        alt="Destination Image"
        class="destination-image"
      />
      <router-link to="">
        {{ destination.name }}
      </router-link>
      <p>{{ destination.description }}</p>
      <p><strong>Distance:</strong> {{ destination.distance }}</p>
      <p><strong>Travel Time:</strong> {{ destination.travel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpaceData } from "../types/types";
import dataJson from "../assets/data.json";
import Heading from "../components/destinations/Heading.vue";
import Buttons from "../components/destinations/Buttons.vue";

const spaceData: SpaceData = dataJson as SpaceData;



defineExpose({
  dataJson,
  Heading,
  Buttons,
});
</script>

<style lang=""></style>
