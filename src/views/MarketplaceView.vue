<script setup>
import { marketplaceItems } from "../data/marketplaceData";
import MarketplaceCard from "../components/MarketplaceCard.vue";
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-2">Marketplace</h1>

    <!-- LEGAL DISCLAIMER -->
    <p class="text-xs text-gray-500 mb-6">
      Disclaimer: All listings are user-generated. This platform does not
      guarantee authenticity, quality, or legality of items sold. Transactions
      are conducted at users’ own risk.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <MarketplaceCard
        v-for="item in marketplaceItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
