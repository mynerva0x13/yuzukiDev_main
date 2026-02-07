<template>
  <div class="full-screen container-fluid d-flex justify-content-center align-items-center min-vh-100">
    <div class=" rounded p-4">
      <!-- Header -->
      <header class="d-flex align-items-center justify-content-center p-4 gap-4">
        <img src="/img/helshie-zero.gif" alt="Left Decorative" class="rounded-circle img-fluid"
          style="width: 8rem; height: 8rem; object-fit: cover;">
        <h1 class="text-center fw-semibold fs-2 text-dark">Social Media Links</h1>
        <img src="/img/yoko-taro-nier.gif" alt="Right Decorative" class="rounded-circle img-fluid"
          style="width: 8rem; height: 8rem; object-fit: cover;">
      </header>

      <!-- Links with collage style -->
      <div class="d-flex flex-wrap justify-content-center gap-4 p-4 collage">
        <!-- Twitter -->
        <a href="https://x.com/yuz_mynerva0001" target="_blank" rel="noopener noreferrer" class="card-link rotate-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png"
            alt="Twitter">
          <span>Twitter</span>
        </a>

        <!-- Bluesky -->
        <a href="https://bsky.app/profile/mynerva0x13.bsky.social" target="_blank" rel="noopener noreferrer"
          class="card-link rotate-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg" alt="Bluesky">
          <span>Bluesky</span>
        </a>

        <!-- TikTok -->
        <a href="https://www.tiktok.com/@yuzkouta" target="_blank" rel="noopener noreferrer" class="card-link rotate-3">
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok">
          <span>TikTok</span>
        </a>

        <!-- Pixiv -->
        <a href="https://www.pixiv.net/en/users/52423214" target="_blank" rel="noopener noreferrer"
          class="card-link rotate-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pixiv_Icon.svg/1200px-Pixiv_Icon.svg.png"
            alt="Pixiv">
          <span>Pixiv</span>
        </a>

        <!-- Tumblr -->
        <a href="https://www.tumblr.com/blog/ykyuz" target="_blank" rel="noopener noreferrer"
          class="card-link rotate-5">
          <img src="https://cdn-icons-png.flaticon.com/512/185/185962.png" alt="Tumblr">
          <span>Tumblr</span>
        </a>

        <!-- VGen -->
        <a href="https://vgen.co/yuz_mynerva0x13" target="_blank" rel="noopener noreferrer" class="card-link rotate-2">
          <img src="https://help.vgen.co/hc/article_attachments/13004233730967" alt="VGen">
          <span>VGen</span>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/mynerva0x13" target="_blank" rel="noopener noreferrer" class="card-link rotate-3">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub">
          <span>GitHub</span>
        </a>

        <!-- YouTube -->
        <a href="https://www.youtube.com/@yuzukikouta408" target="_blank" rel="noopener noreferrer"
          class="card-link rotate-4">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube">
          <span>YouTube</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.collage .card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 1rem;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.collage .card-link img {
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.collage .card-link span {
  font-size: 0.85rem;
  font-weight: 500;
}

.collage .card-link:hover {
  transform: scale(1.1) rotate(0deg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Different rotations for collage effect */
.rotate-1 {
  transform: rotate(-5deg);
}

.rotate-2 {
  transform: rotate(3deg);
}

.rotate-3 {
  transform: rotate(-3deg);
}

.rotate-4 {
  transform: rotate(5deg);
}

.rotate-5 {
  transform: rotate(-7deg);
}
</style>
