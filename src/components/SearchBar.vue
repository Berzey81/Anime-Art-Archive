<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { items } from "../data/artData";

const router = useRouter();
const route = useRoute();

const searchQuery = ref("");

const query = computed(() => searchQuery.value.trim().toLowerCase());

watch(route, () => {
  searchQuery.value = "";
});

const searchResults = computed(() => {
  if (query.value.length < 2) return [];

  return items.filter((item) => {
    const q = query.value;

    return (
      item.title.toLowerCase().includes(q) ||
      item.anime.toLowerCase().includes(q) ||
      item.studio.toLowerCase().includes(q) ||
      item.mediaType.toLowerCase().includes(q) ||
      (item.tags ?? []).some((tag) => tag.toLowerCase().includes(q))
    );
  });
});

const handleEnter = () => {
  if (searchResults.value.length > 0) {
    router.push(`/art/${searchResults.value[0].id}`);
    searchQuery.value = "";
  }
};
</script>

<template>
  <div class="relative w-80">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search artwork..."
      @keydown.enter="handleEnter"
      class="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

    <div
      v-if="query.length >= 2"
      class="absolute top-full mt-2 w-full bg-gray-900 border border-gray-800 rounded shadow-lg z-50"
    >
      <router-link
        v-for="item in searchResults"
        :key="item.id"
        :to="`/art/${item.id}`"
        class="block px-4 py-2 hover:bg-gray-800 text-white"
        @click="searchQuery = ''"
      >
        {{ item.title }}
        <span class="text-gray-400 text-sm"> — {{ item.anime }} </span>
      </router-link>

      <p
        v-if="searchResults.length === 0"
        class="px-4 py-2 text-gray-400 text-sm"
      >
        No results found
      </p>
    </div>
  </div>
</template>
