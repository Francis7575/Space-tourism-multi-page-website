import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'

const routes = [
  { path: "/", component: () => import('./pages/Home.vue')},
  { path: "/destination",  component: () => import('./pages/Destination.vue') },
  { path: "/crew",  component: () => import('./pages/Crew.vue') },
  { path: "/technology",  component: () => import('./pages/Technology.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app")