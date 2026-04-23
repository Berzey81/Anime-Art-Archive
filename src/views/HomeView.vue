<script setup>
import FeaturedSection from "../components/FeaturedSection.vue";
</script>

<template>
  <div class="px-6 py-10">
    <section class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Welcome to Anime Art Archive</h1>
      <p class="max-w-xl mx-auto text-gray-600">
        Explore curated anime art collections, showcase your own pieces, and
        connect with a growing community of collectors and fans.
      </p>
      <button
        class="mt-6 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
      >
        Browse Galleries
      </button>
    </section>
    <FeaturedSection />
  </div>
</template>
