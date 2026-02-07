<template>
  <nav ref="navbar" class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top transition-top">
    <div class="container">
      <!-- Brand/logo -->
      <a class="navbar-brand fw-bold" href="#">
        <img src="/img/YZ.png" alt="Logo" style="width: 40px; height: 40px;" />
      </a>

      <!-- Toggler button for mobile -->
      <button class="navbar-toggler" type="button" @click="attributeCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links  collapse-->
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav" ref="collapse">
        <ul class="navbar-nav d-flex flex-row"> <!-- make <ul> horizontal -->
          <li class="nav-item d-flex"> <!-- optional, to keep <a> horizontal inside li -->
            <a href="https://yuzmynerva.straw.page" class="nav-link d-flex align-items-center me-3">
              <img src="/img/GivlH7TWcAAKJ71.png" alt="Home" style="width: 3rem; margin-right: 8px;" />
              My StrawPage
            </a>
            <a href="https://mynerva0x13.itch.io/" class="nav-link d-flex align-items-center">
              <img src="/img/image.png" alt="Home" style="width:8rem; margin-right: 8px;" />
            </a>
          </li>
        </ul>
      </div>

      <!-- Optional CTA button -->
      <a class="btn btn-primary ms-lg-3 d-none d-lg-block" href="#">Sign Up</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const navbar = ref(null);
var collapse = ref(null)
let lastScrollY = 0;

var isHide = false
function attributeCollapse() {
  isHide = !isHide;
  var collapseContainer = collapse.value.classList
  if (isHide) collapseContainer.add("collapse")
  else collapseContainer.remove("collapse")
}
const handleScroll = () => {
  if (!navbar.value) return;

  const navbarHeight = navbar.value.offsetHeight;

  if (window.scrollY > lastScrollY && window.scrollY > navbarHeight) {
    // scrolling down → hide
    navbar.value.style.top = `-${navbarHeight}px`;
  } else {
    // scrolling up → show
    navbar.value.style.top = "0";
  }

  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.transition-top {
  transition: top 0.3s ease-in-out;
}
</style>
