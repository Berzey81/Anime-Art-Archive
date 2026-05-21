<script setup>
import { formatCategory } from "../utils/format";

defineProps({
  item: Object,
});
</script>

<template>
  <router-link :to="`/art/${item.id}`" class="card block overflow-hidden group hover:-transtion-y-1 transition duration-300">
    <img :src="item.image" class="w-full h-48 object-cover transition duration-300 group-hover:scale-105" />

    <div class="p-4">
      <h3 class="text-lg font-semibold text-white">
        {{ item.title }}
      </h3>

      <p class="text-sm text-gray-400">
        {{ formatCategory(item.anime) }}
      </p>
    </div>
  </router-link>
</template>
