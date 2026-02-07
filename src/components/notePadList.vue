<template>
  <div class="note" :style="{ transform: `rotate(${angle}deg)` }">
    <div class="note-content">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  angle: {
    type: [Number],
    default: 0
  },
  title: {
    type: [String],
    default: "Null"
  }
})

const angle = props.angle
</script>

<style scoped>
.note {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3 / 4;
  max-height: 400px;
  box-sizing: border-box;
  background-image: url("/img/note.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  /* make it a flex container */
  justify-content: center;
  /* center horizontally */
  align-items: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  /* center vertically */
}

.note-content {
  text-align: center;
  width: 80%;
  /* optional: so text doesn’t touch edges */
}

.note:hover {
  transform: translateY(-6px) scale(1.03);
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.395));
  /* box-shadow: 0 10px 18px rgba(0, 0, 0, 0.395);
   */
}
</style>
