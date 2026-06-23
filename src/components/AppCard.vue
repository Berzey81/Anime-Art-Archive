<script setup>
import { formatCategory } from "../utils/format";

defineProps({
  item: Object,
  variant: {
    type: String,
    default: "gallery", // "gallery" | "marketplace"
  },
});
</script>

<template>
  <div
    class="group card overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-1"
  >
    <img
      :src="item.image"
      class="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-white">
        {{ item.title }}
      </h3>
      <!--Gallery style-->
      <p v-if="variant === 'gallery'" class="text-sm text-gray-400">
        {{ formatCategory(item.anime) }}
      </p>
      <!--Marketplace style-->
      <p v-else class="text-sm text-gray-400 mb-2">
        {{ formatCategory(item.anime) }}
      </p>
      <!--Price only for marketplace-->
      <p v-if="variant === 'marketplace'" class="text-green-400 font-bold">
        ${{ item.price }}
      </p>
    </div>
  </div>
</template>
