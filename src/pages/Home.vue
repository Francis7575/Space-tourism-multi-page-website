<template lang="">
  <main class="flex flex-col pb-[3rem] lg:pb-0 animate-slide-up">
    <div
      class="flex flex-col lg:flex-row y lg:pt-[7.5rem] lg:px-[2.5rem] lg:pb-[50px] xl:pb-[128px] xl:px-[165px] gap-[5rem] md:gap-[4.12rem] justify-between items-center"
    >
      <div
        class="mt-[1.5rem] md:mt-[128px] lg:mt-0 flex flex-col items-center lg:items-start gap-6"
      >
        <span
          class="text-lightblue md:text-[1.75rem] font-barlow-condensed tracking-[2.4px] lg:tracking-[4px]"
        >
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 class="text-white text-[5rem] lg:leading-normal md:text-[9rem] font-bellefair">
          SPACE
        </h1>
        <p
          class="font-barlow text-lightblue text-[.938rem] md:px-0 lg:leading-[32.4px] lg:text-[1.12rem] lg:text-left text-center px-[1.5rem] max-w-[512px] lg:max-w-[540px] leading-[27px]"
        >
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="flex justify-center">
        <router-link
          to="destination"
          class="text-black text-[1.125rem] hover:shadow-button transition-shadow md:text-[2rem] bg-white rounded-[999px] font-bellefair uppercase py-[61px] md:py-[117px] px-[33px] md:px-[68px]"
        >
          Explore
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 700ms ease;
}

</style>
