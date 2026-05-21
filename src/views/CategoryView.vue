<script setup>
import { useRoute } from "vue-router";
import { formatCategory } from "../utils/format";
import ArtworkCard from "../components/ArtworkCard.vue";

const route = useRoute();
const username = route.params.username;
const categorySlug = route.params.slug;

// Mock data for category view
const items = [
  {
    id: 1,
    title: "Naruto Sketch",
    anime: "naruto",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Attack on Titan Cel",
    anime: "attack on titan",
    image: "https://via.placeholder.com/600x400",
  },
];

// Filter items based on category
const filteredItems = items.filter((item) => item.anime === categorySlug);
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 capitalize">
      {{ formatCategory(category) }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ArtworkCard v-for="item in filteredItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>
