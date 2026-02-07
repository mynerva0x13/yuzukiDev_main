<template>
  <div class="loading-screen">
    <canvas ref="canvas" id="static-overlay"></canvas>

    <div class="content" id="content">
      <div id="boot-sequence">
        <div v-for="(line, index) in lines" :key="index" class="line">{{ line }}</div>
      </div>
    </div>

    <div class="logo" id="logo">
      <h1>YoRHa</h1>
      <p>For the Glory of Mankind</p>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "landingPage",
  setup(props, { emit }) {
    const canvas = ref(null);
    const lines = ref(Array(13).fill(""));
    const isReady = ref(sessionStorage.getItem("isReady") === "true");

    const bootTexts = [
      "LOADING. - BOOTING SYSTEM…",
      "Commencing System Check",
      "Memory Unit: Green",
      "Initializing Tactics Log",
      "Loading Geographic Data",
      "Vitals: Green",
      "Remaining MP: 100%",
      "Black Box Temperature: Normal",
      "Black Box Internal Pressure: Normal",
      "Activating IFF",
      "Activating FCS",
      "Initializing Pod Connection",
      "Launching DBU Setup",
      "Activating Inertia",
    ];

    const typingSpeed = 10;
    const lineDelay = 150;

    function resizeCanvas() {
      const c = canvas.value;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }

    function drawCRTStatic(ctx, scanY, width, height) {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.5;

      const imageData = ctx.createImageData(width, height);
      const buffer = imageData.data;

      for (let i = 0; i < buffer.length; i += 4 * 4) {
        const gray = Math.random() > 0.95 ? 255 : 0;
        buffer[i] = buffer[i + 1] = buffer[i + 2] = gray;
        buffer[i + 3] = gray > 0 ? 40 : 0;
      }

      ctx.putImageData(imageData, 0, 0);

      ctx.globalAlpha = 0.5;
      const gradient = ctx.createLinearGradient(0, scanY, 0, scanY + 30);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.5, "rgba(255,255,255,0.05)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY, width, 30);
      ctx.globalAlpha = 1.0;
    }

    function startCRTAnimation() {
      const c = canvas.value;
      const ctx = c.getContext("2d");
      let scanY = 0;

      function animate() {
        drawCRTStatic(ctx, scanY, c.width, c.height);
        scanY = (scanY + 1) % c.height;
        requestAnimationFrame(animate);
      }

      animate();
    }

    function typeLine(index, text, charIndex = 0) {
      if (charIndex <= text.length) {
        const padding = " ".repeat(text.length - charIndex);
        lines.value[index] = text.substring(0, charIndex) + padding;
        setTimeout(() => {
          typeLine(index, text, charIndex + 1);
        }, typingSpeed);
      } else {
        if (index + 1 < bootTexts.length) {
          setTimeout(() => showNextLine(index + 1), lineDelay);
        } else {
          setTimeout(fadeOutAndRedirect, 2000);
        }
      }
    }

    function showNextLine(index = 0) {
      typeLine(index, bootTexts[index]);
    }

    function fadeOutAndRedirect() {
      document.getElementById("static-overlay").style.opacity = 0;
      document.getElementById("content").style.opacity = 0;
      document.getElementById("logo").style.opacity = 0;

      setTimeout(() => {
        sessionStorage.setItem("isReady", "true");
        isReady.value = true;
        //AI Code :send true signal in landingPage.vue also

        emit("update:isReady", true);
      }, 1000);
    }

    onMounted(() => {
      if (!isReady.value) {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        startCRTAnimation();
        showNextLine();
      } else {

        emit("update:isReady", true);
        //AI Code :send true signal in landingPage.vue also

      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeCanvas);
    });

    return {
      canvas,
      lines,
      isReady,
    };
  },
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  /* cover everything */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Courier New", monospace;
  background: black;
  /* 👈 always black */
  color: rgb(58, 238, 58);
  overflow: hidden;
  z-index: 9999;
  /* sits on top of app */
}

#static-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1000;
  transition: opacity 1s ease;
}

.content,
.logo {
  position: relative;
  z-index: 1;
  padding: 40px;
  transition: opacity 1s ease;
}

.line {
  white-space: pre;
  margin-top: 20px;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;
  opacity: 0.2;
  z-index: 2;
}
</style>
