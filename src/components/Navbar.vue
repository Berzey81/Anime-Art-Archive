<script setup></script>

<template>
  <nav
    class="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800"
  >
    <h1 class="text-xl font-bold text-white">Anime Art Archive</h1>

    <div class="flex gap-6 items-center">
      <router-link to="/" class="nav-link" active-class="active">
        Home
      </router-link>

      <router-link to="/marketplace" class="nav-link" active-class="active">
        Marketplace
      </router-link>

      <router-link to="/profile" class="nav-link" active-class="active">
        Profile
      </router-link>
    </div>
  </nav>
</template>
