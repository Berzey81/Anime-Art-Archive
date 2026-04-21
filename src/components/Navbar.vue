<script setup></script>

<template>
  <nav>
    <div class="links">
      <h1>Anime Art Archive</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/marketplace">Marketplace</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #222;
  color: white;
}

nav h1 {
  color: white;
}

/* router-link renders as <a> */
nav a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
.links {
  display: flex;
  gap: 1rem;
}
</style>
