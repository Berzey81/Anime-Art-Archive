<script setup>
import { useRoute } from "vue-router";
import { formatCategory } from "../utils/format";

const route = useRoute();
const category = route.params.category;

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
const filtereditems = items.filter((item) => item.anime === category);
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-2xl" font="-bold" mb-6 capitalize>
      {{ formatCategory(category) }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <router-link
        v-for="item in filtereditems"
        :key="item.id"
        :to="`/art/${item.id}`"
        class="card block"
      >
        <img :src="item.image" class="w-full h48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>
