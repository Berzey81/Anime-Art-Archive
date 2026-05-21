<script setup>
import { items } from "../data/artData";
import { formatCategory } from "../utils/format";
import { galleries } from "../data/galleryData";

const gallery = galleries[0];

const categories = gallery.categories;
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Banner -->
    <div class="mb-6">
      <img :src="gallery.banner" class="w-full h-48 object-cover rounded-lg" />
    </div>

    <!-- Gallery Name -->
    <h1 class="text-3xl font-bold mb-4">
      {{ gallery.name }}
    </h1>

    <!-- Categories -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
      <router-link
        v-for="category in categories"
        :key="category.slug"
        :to="`/gallery/${gallery.username}/${category.slug}`"
        class="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition"
      >
        {{ category.title }}
      </router-link>
    </div>

    <!-- Artwork Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="item in items" :key="item.id" class="card">
        <img :src="item.image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-lg text-white">
            {{ item.title }}
          </h3>
          <p class="text-sm text-gray-400">
            {{ item.anime }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
