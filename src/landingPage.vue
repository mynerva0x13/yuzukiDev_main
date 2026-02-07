<template>
  <div class="main d-flex flex-column justify-content-center align-items-center text-center bg-dark position-relative ">
    <SnowFlake />

    <div class="contain white-box fade-in ">
      <div class="container py-5">
        <img src="/img/banner/title_bk.png" class="img-fluid mb-4" alt="Site Title" style="width: 40%; z-index: 10;" />

        <h1 class="fw-bold mb-3">Hello, World... My Special Visitors</h1>

        <div class="lead px-md-5">
          <p>
            Before entering, keep in mind some content may not be suitable for young audiences
            (zero nudity, but certain themes may require parental guidance).
          </p>
          <p>
            If you find some content unfavorable or problematic, please remember it is your responsibility
            to manage your own experience.
          </p>
          <p class="fw-semibold">Lastly, enjoy diving 🌊</p>

          <!-- Button -->


        </div>
        <button
          class="btn btn-enter mt-4 px-8 py-4 font-bold text-gray-900 text-xl rounded-lg shadow-lg bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
          @click="$router.push('/home')">
          ENTER !!!
        </button>

      </div>
    </div>
  </div>

  <div class="scraper scraper1"></div>
  <div class="scraper scraper2"></div>
  <a href='https://www.free-counters.org/'>free HitCounter</a>
</template>

<script setup lang="ts">
import SnowFlake from './components/snowFlake.vue';
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.main {
  background: linear-gradient(0deg, rgba(34, 105, 120, 1) 0%, rgba(186, 186, 186, 1) 73%);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.banner img {
  margin-left: 2rem;
}

.banner img:hover {
  transform: scale(1.2) rotate(3deg);
}

.contain {
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: center;
  position: relative;
}

/* Button style */
.btn-enter {
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  color: black;
  width: 20rem;
  border: 3px solid black
}

.btn-enter:hover {
  transform: scale(1.08);
  color: white;
}

.banner_size {

  width: 88px;
  height: 31px;
}
</style>
