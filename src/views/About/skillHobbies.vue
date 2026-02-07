<template>
  <div class="d-flex justify-content-center align-items-center  px-3">
    <div class="d-flex flex-column flex-lg-row align-items-start justify-content-center gap-4 w-75">
      <!-- Profile Image Card -->
      <div class=" d-flex justify-content-center flex-shrink-0">
        <div class="card text-center shadow-lg p-4"
          style="border-radius: 20px; transform: rotate(-1.5deg); transition: transform 0.3s;">
          <div class="card-body">
            <img src="/img/108396954_p0_master1200.jpg" alt="Profile Picture" class="mb-3 shadow"
              style="width: 250px; height: 250px; object-fit: cover; border-radius: 100%;" />
            <h2 class="card-title fw-bold mb-1">Yuz / Yuzuki</h2>
            <p class="text-muted small mb-0">Aspiring Developer & Artist</p>
          </div>
        </div>
      </div>

      <!-- Info Cards Column -->
      <div class="d-flex flex-column gap-4 flex-grow-1">
        <!-- Skills Banner -->
        <div class="shadow-sm border p-4 fw-semibold"
          style="border-radius: 15px; background-color: #fff; transform: rotate(-2deg); transition: transform 0.3s;">
          <h4 class="mb-3">My Skills</h4>
          <ul class="mb-0 ps-3">
            <li>Programming</li>
            <li>Web Development</li>
            <li>Game Development</li>
            <li>2D Art</li>
          </ul>
        </div>

        <!-- Hobbies Banner -->
        <div class="shadow-sm border p-4 fw-semibold"
          style="border-radius: 15px; background-color: #fff; transform: rotate(1.5deg); transition: transform 0.3s;">
          <h4 class="mb-3">Hobbies</h4>
          <ul class="mb-0 ps-3">
            <li>Learning 3D Art</li>
            <li>Playing JRPGs, Visual Novels, Rhythm Games</li>
            <li>Watching Anime</li>
            <li>Reading Manga & Doujinshi</li>
            <li>Reading BL (Boy’s Love)</li>
          </ul>
        </div>
      </div>

      <!-- Programming Languages Card -->
      <div class="d-flex justify-content-center flex-shrink-0">
        <div class="shadow-sm border p-4 fw-semibold"
          style="max-width: 300px; border-radius: 15px; background-color: #fff; transform: rotate(-1.5deg); transition: transform 0.3s;">
          <h4 class="mb-3">Programming Languages + Game Dev</h4>
          <ul class="mb-0 ps-3">
            <li>Web Dev (Frontend + Backend)</li>
            <li>PHP</li>
            <li>NodeJS</li>
            <li>Vue.js</li>
            <li>Java</li>
            <li>Python</li>
            <li>C#</li>
            <li>Godot + GDScript</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hover effect for fun */
.card:hover,
.shadow-sm:hover {
  transform: rotate(0deg) scale(1.02);
}
</style>
