<script setup>
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
      {{ gallery.galleryName }}
    </h1>

    <!-- Categories -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <router-link
        v-for="category in categories"
        :key="category.slug"
        :to="`/gallery/${gallery.username}/${category.slug}`"
        class="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition"
      >
        {{ category.title }}
      </router-link>
    </div>
  </div>
</template>
