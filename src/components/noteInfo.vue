<template>
  <transition name="fade">
    <div v-if="showOverlay" class="overlay">
      <button class="close-btn" @click="$emit('close')">✕</button>

      <div class="content">
        <h1>{{ title }}</h1>
        <p>
          <slot />
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  showOverlay: Boolean,
  title: {
    type: String,
    default: "Null",
  },
})
defineEmits(["close"])
</script>

<style scoped>
/* ===== Transition ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* ===== Overlay ===== */
.overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(86deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(240, 240, 240, 0.95) 14%,
      rgba(255, 255, 255, 1) 90%);
  z-index: 1050;

  padding: 1rem;
  overflow-y: auto;

  display: grid;
  place-items: center;
  /* horizontal + vertical centering */
}

/* ===== Close button ===== */
.close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

/* ===== Content box ===== */
.content {
  max-width: 800px;
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 1.2rem;
  text-align: center;
}

/* Typography */
.content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
}

.content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

/* Responsive text scaling */
@media (min-width: 768px) {
  .content h1 {
    font-size: 2.5rem;
  }

  .content p {
    font-size: 1.1rem;
  }
}

@media (min-width: 1200px) {
  .content h1 {
    font-size: 3rem;
  }
}
</style>
