<template lang="html">
  <section class="font-barlow-condensed">
    <div
      class="flex justify-center items-center md:justify-start gap-[24px] mt-[1.5rem] xl:mt-[48px] lg:text-[1.75rem] md:tracking-[3px] md:text-[1.25rem]"
    >
      <span class="tracking-[4.725px] font-bold text-white-25">{{ id }}</span>
      <h1
        class="md:tracking-[3px] tracking-[2.4px] lg:tracking-[4px] text-white"
      >
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface HeadingProps {
  title: string;
  id: string | number;
}

const props = defineProps<HeadingProps>();

</script>