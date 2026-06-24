<script setup>
import { useRoute } from "vue-router";
import { formatCategory } from "../utils/format";
import AppCard from "../components/AppCard.vue";
import { items } from "../data/artData";

const route = useRoute();
const username = route.params.username;
const categorySlug = route.params.slug;

// Filter items based on category
const filteredItems = items.filter((item) => item.anime === categorySlug);
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 capitalize">
      {{ formatCategory(categorySlug) }}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <AppCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        variant="gallery"
      />
    </div>
  </div>
</template>
