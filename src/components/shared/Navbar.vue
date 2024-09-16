<template lang="html">
  <header
    class="flex justify-between items-center md:items-start lg:items-center p-[1.5rem] md:p-0 md:w-full lg:pt-[40px]"
  >
    <router-link
      to="/"
      class="md:px-[40px] md:pt-[1.5rem] lg:pt-0 lg:px-0 lg:pl-[64px]"
    >
      <img :src="logo" alt="Space Tourism Logo" class="w-[40px] md:w-[48px]" />
    </router-link>
    <div
      class="hidden xl:block flex-1 h-[1px] bg-white/25 ml-12 -mr-12 relative z-10"
    ></div>
    <div class="w-full md:max-w-[736px]">
      <nav
          :class="{
            navbar: true,
            'slide-enter': isMenuOpen,
            'slide-exit': !isMenuOpen,
          }"
        class="navbar font-barlow-condensed bg-lightgray w-[254px] md:h-[6rem] md:flex md:justify-center md:items-center md:w-full md:bg-black-russian lg:bg-second-lightgray min-h-screen fixed top-0 right-0 md:static md:min-h-0"
      >
        <ul
          class="mt-[110px] md:mt-0 ml-[34px] md:ml-0 flex flex-col md:justify-end md:flex-row gap-8 md:gap-12 tracking-[2px] md:w-full md:pr-[40px]"
        >
          <li
            v-for="(option, idx) in navOptions"
            :key="option.id"
            class="relative"
          >
            <router-link
              :to="`/${option.path}`"
              class="flex items-center space-x-2 text-white"
              :class="{
                'border-highlight': true, // Apply border-highlight class always
                active: isActive(option.path), // Add active class if the link is active
              }"
              @click="closeMenuFunc"
            >
              <span class="font-bold" :class="{ 'font-normal': idx === 0 }">
                {{ option.id }}
              </span>
              <span class="uppercase tracking-[2px]">{{ option.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <button @click="toggleMenu" class="z-10 md:hidden">
      <img :src="isMenuOpen ? closeMenu : openMenu" alt="Menu Icon" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "/assets/shared/logo.svg";
import openMenu from "/assets/shared/icon-hamburger.svg";
import closeMenu from "/assets/shared/icon-close.svg";
import { useRoute } from "vue-router";

interface NavOption {
  id: string;
  name: string;
  path: string;
  redirect?: string
}

const isMenuOpen = ref(false);
const route = useRoute();

const navOptions: NavOption[] = [
  { id: "00", name: "Home", path: "" },
  { id: "01", name: "Destination", path: "destination"  },
  { id: "02", name: "Crew", path: "crew" },
  { id: "03", name: "Technology", path: "technology" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuFunc = () => {
  isMenuOpen.value = false;
};

const isActive = (path: string): boolean => {
  const currentPath = route.path;
  
  // Handle exact match for top-level routes
  if (path === "") {
    return currentPath === "/";
  }
  
  // Handle prefix match for nested routes
  return currentPath.startsWith(`/${path}`) && currentPath !== '/';
};

</script>

<style scoped>
.navbar {
  backdrop-filter: blur(40px);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
}

.slide-enter {
  transform: translateX(0);
}

.slide-exit {
  transform: translateX(100%);
}

@media (min-width: 768px) {
  .border-highlight {
    position: relative;
    transition: color 0.3s ease;
  }

  .border-highlight::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -34px;
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

  .slide-enter,
  .slide-exit {
    transform: none;
  }
}
</style>
