<template>
  <div class="full-screen container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center py-4">
    <h3 class="mb-4">Art Gallery</h3>

    <div class="grid-container p-3 white-box">
      <!-- Action buttons -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
          <button class="btn btn-sm btn-outline-primary me-2" @click="shuffle">Shuffle</button>
          <button class="btn btn-sm btn-outline-secondary" @click="toggleColumns">
            Columns: {{ columns }}
          </button>
        </div>
      </div>

      <!-- Masonry -->
      <div class="masonry" :style="masonryStyle">
        <a v-for="item in items" :key="item.id" class="masonry-item card text-decoration-none text-dark"
          :href="item.link" target="_blank" rel="noopener">
          <img :src="'/myart/' + item.filename" :alt="item.title" class="card-img-top" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Use ref for reactive array
const items = ref([]);
const columns = ref(3);

onMounted(async () => {
  try {
    const res = await fetch("/myart/images.json");
    const data = await res.json();
    items.value = data; // ✅ assign to .value for ref
    console.log(data);
  } catch (err) {
    console.error("Error fetching images:", err);
  }
});

const masonryStyle = computed(() => ({
  display: "grid",
  gridAutoFlow: "dense",
  gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
  gap: "1rem",
}));

function shuffle() {
  for (let i = items.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items.value[i], items.value[j]] = [items.value[j], items.value[i]];
  }
}

function toggleColumns() {
  columns.value = columns.value === 3 ? 2 : columns.value === 2 ? 1 : 3;
}
</script>

<style scoped>
.grid-container {
  width: 100%;
  height: 85vh;
  overflow-y: auto;
  border-radius: 0.5rem;
}

.masonry {
  display: grid;
  grid-auto-flow: dense;
  align-items: start;
}

.masonry-item {
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: block;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0.25rem;
}

.masonry-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

:deep(.masonry) {
  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>
