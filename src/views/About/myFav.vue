<template>
  <div class="container my-3">

    <div class="row justify-content-center mb-5">
      <div class="col-md-6 col-lg-4">
        <div class="card text-center shadow-lg p-4"
          style="border-radius: 20px; transform: rotate(-1.5deg); transition: transform 0.3s;">
          <div class="card-body">
            <img src="/img/108396954_p0_master1200.jpg" alt="Profile Picture"
              class="img-fluid mb-4 shadow rounded-circle" style="width: 180px; height: 180px; object-fit: cover;" />
            <h4 class="card-title fw-bold mb-0">
              Here My Favorite Things I have
            </h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Favorite Things Section -->
    <div class="row g-4 justify-content-center">
      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100" @click="directLink('Anime')"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">Anime</h5>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100" @click="directLink('manga')"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">Manga + Dojinshi</h5>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100" @click="directLink('Chara')"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">Favorite Characters</h5>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100" @click="directLink('Chara')"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">My Husbando</h5>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">Programming Language and Stuff</h5>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="cardbtn shadow-sm border p-4 fw-semibold text-center h-100"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h5 class="mb-0">Songs</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const directLink = (page) => {
  router.push({ path: `fav/${page}` })
}
</script>
<style scoped>
.cardbtn {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cardbtn:hover {
  transform: translateY(-6px) scale(1.03);
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.395));
  /* box-shadow: 0 10px 18px rgba(0, 0, 0, 0.395);
   */
}
</style>
