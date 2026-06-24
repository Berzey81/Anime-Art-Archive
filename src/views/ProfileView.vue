<script setup>
import { ref, computed } from "vue";
import { galleries } from "../data/galleryData";
import { items } from "../data/artData";
import { formatCategory } from "../utils/format";
import AppCard from "../components/AppCard.vue";

const gallery = galleries[0];

// active filter
const activeCategory = ref(null);

const categories = [...new Set(items.map((item) => item.anime))].map(
  (slug) => ({
    slug,
    title: formatCategory(slug),
    count: items.filter((item) => item.anime === slug).length,
  }),
);

const filteredItems = computed(() => {
  if (!activeCategory.value) return items;

  return items.filter((item) => item.anime === activeCategory.value);
});
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Banner -->
    <div class="mb-6">
      <img :src="gallery.banner" class="w-full h-48 object-cover rounded-lg" />
    </div>

    <!-- Gallery Name -->
    <h1 class="text-3xl font-bold mb-4">
      {{ gallery.galleryName }}
    </h1>

    <!-- Categories -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <button
        v-for="category in categories"
        :key="category.slug"
        @click="activeCategory = category.slug"
        class="p-4 rounded-lg text-center transition"
        :class="
          activeCategory === category.slug
            ? 'bg-purple-600 text-white'
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        "
      >
        {{ category.title }} ({{ category.count }})
      </button>
    </div>
  </div>

  <!-- Artwork Grid-->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
    <AppCard
      v-for="item in filteredItems"
      :key="item.id"
      :item="item"
      variant="gallery"
    />
  </div>
</template>
