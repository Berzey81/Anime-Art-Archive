<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const artId = parseInt(route.params.id);

// Temporary mock data (same as FeaturedSection)
const featuredItems = [
  {
    id: 1,
    title: "Naruto Sketch",
    anime: "Naruto",
    image: "https://via.placeholder.com/600x400",
    description: "A rough genga sketch from Naruto.",
  },
  {
    id: 2,
    title: "Attack on Titan Cel",
    anime: "Attack on Titan",
    image: "https://via.placeholder.com/600x400",
    description: "Production cel from Attack on Titan.",
  },
  {
    id: 3,
    title: "Spirited Away Genga",
    anime: "Spirited Away",
    image: "https://via.placeholder.com/600x400",
    description: "Hand-drawn genga from Spirited Away.",
  },
];

// Find the art item based on the ID from the route
const art = featuredItems.find((item) => item.id === artId);
</script>

<template>
  <router-link
    to="/"
    class="mb-4 inline-block text-sm text-gray-600 hover:text-black"
  >
    ← Back to Home
  </router-link>

  <div class="p-6 max-w-3xl mx-auto">
    <div v-if="art">
      <img :src="art.image" class="w-full rounded-lg mb-6" />
      <h1 class="text-3xl font-bold mb-2">{{ art.title }}</h1>
      <p class="text-gray-500 mb-4">{{ art.anime }}</p>
      <p>{{ art.description }}</p>
    </div>
    <div v-else>
      <p>Artwork not found.</p>
    </div>
  </div>
</template>
