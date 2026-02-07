<template>
  <LoadingPage v-if="!isReady" @update:isReady="isReady = $event" />
  <div v-else>

    <div class="page-wrapper">
      <NavigationBar />
      <SnowFlake />
      <div ref="sec" class="con">
        <HomeView />
        <AboutMe />
        <MyGameWork />
        <MyArtwork />
        <ContactDetails />
      </div>
    </div>

    <div class="scraper1 scraper"></div>
    <div class="scraper2 scraper"></div>
    <!-- <ClickUp />-->
    <button
      class="fixed right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-l-lg shadow-lg hover:bg-green-600">
      Right Button
    </button>

  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

import LoadingPage from './loadingPage.vue';

import NavigationBar from './views/navigationBar.vue'
import HomeView from './views/Main/HomeView.vue'
import AboutMe from './views/About/AboutMe.vue'
// import ClickUp from './components/clickUp.vue'
import SnowFlake from './components/snowFlake.vue'
import ContactDetails from './views/Contact/contactDetails.vue'
import MyArtwork from './views/Porfolio/myArtwork.vue'
import MyGameWork from './views/GameWork/myGameWork.vue'

const isReady = ref(false);
const sec = ref([])
// Scroll + section visibility
onMounted(async () => {
  const sections = document.querySelectorAll('.con')
  console.log(sections)
  let lastScrollY = window.scrollY
  console.log("DOM", sec.value)
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      document.body.classList.add('scrolling-down')
      document.body.classList.remove('scrolling-up')
    } else {
      document.body.classList.add('scrolling-up')
      document.body.classList.remove('scrolling-down')
    }
    lastScrollY = currentScrollY
  }

  window.addEventListener('scroll', handleScroll)

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          entry.target.classList.remove('hide')
        } else {
          entry.target.classList.remove('show')
          entry.target.classList.add('hide')
        }
      })
    },
    { threshold: 0.3 }
  )

  sections.forEach((section) => observer.observe(section))

  // Ko-fi widget
  const script = document.createElement("script")
  script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
  script.onload = () => {
    if (window.kofiWidgetOverlay) {
      window.kofiWidgetOverlay.draw("yuzukikouta58722", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support me",
        "floating-chat.donateButton.background-color": "#00b9fe",
        "floating-chat.donateButton.text-color": "#fff",
      })
    }
  }
  document.body.appendChild(script)

  // Cleanup
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    sections.forEach((section) => observer.unobserve(section))
  })
})
</script>

<style scoped>
.show {
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}

.hide {
  opacity: 0;
}
</style>
