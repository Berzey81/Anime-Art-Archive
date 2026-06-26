<script setup>
import { ref, computed } from "vue";
import { items } from "../data/artData";
import { useRouter } from "vue-router";

const router = useRouter();

const searchQuery = ref("");

const query = computed(() => searchQuery.value.toLowerCase());

const searchResults = computed(() => {
  if (query.value.length < 2) return [];

  return items.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.value) ||
      item.anime.toLowerCase().includes(query.value)
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
  <nav
    class="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800"
  >
    <!-- Logo -->
    <h1 class="text-xl font-bold text-white">Anime Art Archive</h1>

    <!-- Search -->
    <div class="relative w-80">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search artwork..."
        @keydown.enter="handleEnter"
        class="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <!-- Dropdown -->
      <div
        v-if="searchQuery.length >= 2"
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

    <!-- Nav Links -->
    <div class="flex gap-6 items-center">
      <router-link to="/" class="nav-link" active-class="active">
        Home
      </router-link>

      <router-link to="/marketplace" class="nav-link" active-class="active">
        Marketplace
      </router-link>

      <router-link to="/profile" class="nav-link" active-class="active">
        Profile
      </router-link>
    </div>
  </nav>
</template>
