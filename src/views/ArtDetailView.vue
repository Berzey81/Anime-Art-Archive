<script setup>
import { useRoute } from "vue-router";
import { items } from "../data/artData";
import { ref } from "vue";

const isOpen = ref(false);

const route = useRoute();
const artId = parseInt(route.params.id);

const art = items.find((item) => item.id === artId);
</script>

<template>
  <router-link
    to="/"
    class="mb-4 inline-block text-sm text-gray-600 hover:text-black"
  >
    ← Back to Home
  </router-link>

  <div class="p-6 max-w-3xl mx-auto">
    <div v-if="art">
      <!-- IMAGE -->
      <img
        :src="art.image"
        class="w-full h-auto cursor-pointer rounded-lg"
        @click="isOpen = true"
      />

      <!-- MODAL -->
     <Transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          @click.self="isOpen = false"
        >
          <img
            :src="art.image"
            class="max-w-5xl max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </Transition>

      <!-- TEXT -->
      <h1 class="text-3xl font-bold mb-2">
        {{ art.title }}
      </h1>

      <p class="text-gray-500 mb-4">
        {{ art.anime }}
      </p>

      <p>
        {{ art.description }}
      </p>
    </div>

    <div v-else>
      <p>Artwork not found.</p>
    </div>
  </div>
</template>
