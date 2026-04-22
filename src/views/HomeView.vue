<script setup>
import FeaturedSection from "../components/FeaturedSection.vue";
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to Anime Art Archive</h1>
      <p>
        Explore curated anime art collections, showcase your own pieces, and
        connect with a growing community of collectors and fans.
      </p>
      <button>Browse Galleries</button>
    </section>
    <FeaturedSection />
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}

/* Hero Section */
.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  max-width: 600px;
  margin: 0 auto;
}

.hero button {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
}

.hero button:hover {
  background-color: #555;
}
</style>
