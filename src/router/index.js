import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MarketplaceView from "../views/MarketplaceView.vue";
import ProfileView from "../views/ProfileView.vue";
import ArtDetailView from "../views/ArtDetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/marketplace", component: MarketplaceView },
  { path: "/profile", component: ProfileView },
  { path: "/art/:id", component: ArtDetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
