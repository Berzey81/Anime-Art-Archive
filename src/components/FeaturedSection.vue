<script setup>
import { items } from "../data/artData";
import ArtworkCard from "./ArtworkCard.vue";
</script>

<template>
  <section class="mt-10">
    <h2 class="text-2xl font-bold mb-6">Recently Added</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ArtworkCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
