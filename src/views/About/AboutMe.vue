<template>
  <div class="full-screen container-fluid min-vh-100 d-flex justify-content-center align-items-center">
    <div class="row w-100 h-100 flex-column flex-md-row align-items-center">

      <div class="col-12 col-md-3 justify-content-center align-items-center mb-3 mb-md-0 p-0 d-flex">
        <img src="/img/kolor.png" class="imageContent hover:scale-105 transition-transform duration-500" />
      </div>

      <div class="col-12 col-md d-flex flex-column justify-content-start align-items-center p-4 h-100 content-box">
        <h1 class="section-title text-center text-md-start">About Me</h1>

        <div class="notepad-grid mt-4">
          <NotePadList :angle="15" title="About Me" @click="displayAbout"
            class="cursor-pointer transform transition-all hover:-translate-y-2 active:scale-95" />
          <NotePadList title="My Skill & Hobbies" @click="displayMyskill"
            class="cursor-pointer transform transition-all hover:-translate-y-2 active:scale-95" />
          <NotePadList :angle="-15" title="My Favorite" @click="displayMyfav"
            class="cursor-pointer transform transition-all hover:-translate-y-2 active:scale-95" />
        </div>
      </div>
    </div>
  </div>

  <Transition name="slide-fade">
    <NoteInfo v-if="showNoteList_about" :showOverlay="showNoteList_about" @close="showNoteList_about = false"
      title="About Me">
      <InfoMe />
    </NoteInfo>
  </Transition>

  <Transition name="slide-fade">
    <NoteInfo v-if="showNoteList_MySkill" :showOverlay="showNoteList_MySkill" @close="showNoteList_MySkill = false"
      title="My skills and Hobbies">
      <SkillHobbies />
    </NoteInfo>
  </Transition>

  <Transition name="slide-fade">
    <NoteInfo v-if="showNoteList_MyFav" :showOverlay="showNoteList_MyFav" @close="showNoteList_MyFav = false"
      title="My Favorite">
      <MyFav />
    </NoteInfo>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue"
import NotePadList from '@/components/notePadList.vue';
import NoteInfo from "@/components/noteInfo.vue";
import InfoMe from './infoMe.vue';
import SkillHobbies from './skillHobbies.vue';
import MyFav from './myFav.vue';

const showNoteList_about = ref(false)
const showNoteList_MySkill = ref(false)
const showNoteList_MyFav = ref(false)

const displayAbout = () => {
  showNoteList_about.value = true
}
const displayMyskill = () => {
  showNoteList_MySkill.value = true
}
const displayMyfav = () => {
  showNoteList_MyFav.value = true
}
</script>

<style scoped>
/* --- Transition Animations --- */

/* Duration and easing for entering */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

/* Duration and easing for leaving */
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

/* Open: Starts invisible and slightly to the left, slides into center */
.slide-fade-enter-from {
  transform: translateX(40px);
  opacity: 0;
}

/* Close: Fades out while sliding further to the right */
.slide-fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

/* --- Existing Styles --- */

.content-box {
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.notepad-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
}

.imageContent {
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 15px;
  border: 6px solid #eee;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  scale: 2;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .full-screen {
    padding: 1rem;
  }

  .row {
    flex-direction: column !important;
    text-align: center;
  }

  .imageContent {
    margin-bottom: 1rem;
    scale: 1;
  }

  .content-box {
    margin-top: 0.5rem;
    padding: 1rem;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .notepad-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.2rem;
  }

  .notepad-grid {
    gap: 0.75rem;
  }
}
</style>
