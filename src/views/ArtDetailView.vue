<script setup>
import { useRoute } from "vue-router";
import { items } from "../data/artData";
import { formatCategory } from "../utils/format";

const route = useRoute();
const artId = parseInt(route.params.id);

// Find the art item based on the ID from the route
const art = items.find((item) => item.id === artId);
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
      <h1 class="text-3xl font-bold mb-2">{{ formatCategory(art.title) }}</h1>
      <p class="text-gray-500 mb-4">{{ formatCategory(art.anime) }}</p>
      <p>{{ formatCategory(art.description) }}</p>
    </div>
    <div v-else>
      <p>Artwork not found.</p>
    </div>
  </div>
</template>
