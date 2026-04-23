<script setup></script>

<template>
  <nav
    class="flex items-center justify-between px-6 py-4 bg-gray-900 text-white"
  >
    <h1 class="text-xl font-bold">Anime Art Archive</h1>

    <div class="flex gap-6">
      <router-link to="/" class="hover:text-gray-300"> Home </router-link>

      <router-link to="/marketplace" class="hover:text-gray-300">
        Marketplace
      </router-link>

      <router-link to="/profile" class="hover:text-gray-300">
        Profile
      </router-link>
    </div>
  </nav>
</template>
