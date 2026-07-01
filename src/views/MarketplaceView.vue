<script setup>
import { marketplaceItems } from "../data/marketplaceData";
import { items } from "../data/artData";
import AppCard from "../components/AppCard.vue";

const enrichedItems = marketplaceItems
  .map((listing) => {
    const art = items.find((item) => item.id === listing.itemId);

    return {
      ...listing,
      item: art,
    };
  })
  .filter((listing) => listing.item);
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-2">Marketplace</h1>

    <p class="text-xs text-gray-500 mb-6">
      Disclaimer: All listings are user-generated. This platform does not
      guarantee authenticity, quality, or legality of items sold.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <AppCard
        v-for="listing in enrichedItems"
        :key="listing.id"
        :item="listing.item"
        variant="marketplace"
      />
    </div>
  </div>
</template>
