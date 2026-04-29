<script setup>
const featuredItems = [
  {
    id: 1,
    title: "Naruto Sketch",
    anime: "Naruto",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Attack on Titan Cel",
    anime: "Attack on Titan",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Spirited Away Genga",
    anime: "Spirited Away",
    image: "https://via.placeholder.com/600x400",
  },
];
</script>

<template>
  <section class="mt-10">
    <h2 class="text-2xl font-bold mb-6">Recently Added</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <router-link
        v-for="item in featuredItems"
        :key="item.id"
        :to="`/art/${item.id}`"
        class="card"
      >
        <img :src="item.image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-lg">
            {{ item.title }}
          </h3>
          <p class="text-sm text-gray-500">
            {{ item.anime }}
          </p>
        </div>
      </router-link>
    </div>
  </section>
</template>
