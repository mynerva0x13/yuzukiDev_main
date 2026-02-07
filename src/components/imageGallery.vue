<template>
  <div class="container py-4">
    <!-- Grid gallery -->
    <div class="grid-gallery">
      <div v-for="(item, index) in props.images" :key="index" class="grid-item" @click="openCard(item)">
        <div class="image-wrapper shadow-sm">
          <div class="position-absolute top-0 start-0 m-3">
            <span class="badge bg-warning text-dark shadow">⭐ Featured</span>
          </div>

          <!-- Image preload with skeleton -->
          <img v-if="loadedImages[item.url]" :src="item.url" :alt="item.title" class="grid-img" />
          <div v-else class="skeleton-loader grid-img"></div>

          <div class="overlay">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" v-if="selectedItem" style="display: block; background: rgba(0,0,0,0.6);"
      @click.self="closeCard">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content shadow-lg">
          <div class="row g-0">
            <!-- Image Left -->
            <div class="col-md-6 d-flex align-items-center justify-content-center p-4">
              <template v-if="loadedImages[selectedItem.url]">
                <img :src="selectedItem.url" class="w-100 h-100 object-fit-cover rounded-start modal-img" />
              </template>
              <div v-else class="skeleton-loader w-100 h-100 rounded-start"></div>
            </div>

            <!-- Text Right -->
            <div class="col-md-6 d-flex flex-column">
              <div class="modal-body flex-grow-1">
                <h4>{{ selectedItem.title }}</h4>
                <p>{{ selectedItem.description }}</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" @click="closeCard">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const selectedItem = ref(null)
const loadedImages = ref({})

// Preload all images
const preloadImages = (images) => {
  images.forEach((item) => {
    const img = new Image()
    img.src = item.url
    img.onload = () => {
      loadedImages.value = { ...loadedImages.value, [item.url]: true }
    }
  })
}

const openCard = (item) => {
  if (loadedImages.value[item.url]) {
    selectedItem.value = item
  } else {
    const img = new Image()
    img.src = item.url
    img.onload = () => {
      loadedImages.value = { ...loadedImages.value, [item.url]: true }
      selectedItem.value = item
    }
  }
}

const closeCard = () => {
  selectedItem.value = null
}

onMounted(() => {
  preloadImages(props.images)
})
</script>

<style scoped>
/* Modal image */
.modal-img {
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

/* Grid layout */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* responsive columns */
  gap: 20px;
}

.grid-item {
  cursor: pointer;
}

/* Grid images */
.grid-img {
  width: 100%;
  height: 220px;
  /* fixed height for clean rows */
  object-fit: cover;
  display: block;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

/* Card wrapper */
.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #f8f9fa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.image-wrapper:hover .grid-img {
  transform: scale(1.05);
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

/* Skeleton loader */
.skeleton-loader {
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 12px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .grid-img {
    height: 180px;
  }
}
</style>
