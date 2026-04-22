<script setup>
const featuredItems = [
  { id: 1, title: "Naruto Sketch" },
  { id: 2, title: "Attack on Titan Cel" },
  { id: 3, title: "Spirited Away Genga" },
];
</script>

<template>
  <section>
    <h2>Recently Added</h2>

    <div class="grid">
      <div v-for="item in featuredItems" :key="item.id" class="card">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

h2 {
  margin-bottom: 1rem;
}

.grid {
  display: flex;
  gap: 1rem;
}

.card {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
