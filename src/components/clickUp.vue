<template>
  <button v-show="showButton" @click="scrollToTop" class="btn btn-primary rounded-circle position-fixed"
    style="bottom: 40px; right: 40px; width: 50px; height: 50px; font-size: 20px; z-index: 1000; transition: all 0.4s; color: black;">
    ⬆
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200; // show after 200px scroll
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // smooth scroll
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
button[v-show] {
  opacity: 1;
  transform: translateY(0);
}

button {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}
</style>
