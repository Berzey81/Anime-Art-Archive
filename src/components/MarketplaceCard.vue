<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="bg-gray-900 rounded-lg overflow-hidden hover:scale-[1.02] transition"
  >
    <img :src="item.image" class="w-full h-48 object-cover" />

    <div class="p-4">
      <h3 class="text-lg font-semibold text-white">
        {{ item.title }}
      </h3>

      <p class="text-sm text-gray-400 mb-2">
        {{ item.anime }}
      </p>

      <p class="text-green-400 font-bold">${{ item.price }}</p>
    </div>
  </div>
</template>
