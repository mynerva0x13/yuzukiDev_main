<template>
  <div ref="snowContainer" class="position-fixed top-0 start-0 w-100 h-100 pe-none" style="z-index: 0;"></div>
</template>

<script>
export default {
  data() {
    return {
      snowInterval: null,
      snowflakeCount: 0,
      maxSnowflakes: 50,
    };
  },
  mounted() {
    const container = this.$refs.snowContainer;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    this.maxSnowflakes = isMobile ? 20 : 50;
    const spawnInterval = isMobile ? 500 : 200;

    const createSnowflake = () => {
      if (this.snowflakeCount >= this.maxSnowflakes) return;

      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');

      // Random horizontal position
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;

      // Random starting height (so flakes appear all over, not just at top)
      snowflake.style.top = `${Math.random() * window.innerHeight - 50}px`;

      // Random size and opacity
      const size = 10 + Math.random() * 20;
      snowflake.style.fontSize = `${size}px`;
      snowflake.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);

      // Random fall speed
      const duration = 5 + Math.random() * 5;
      snowflake.style.animationDuration = `${duration}s`;

      // Random drift direction (left ↔ right sway)
      snowflake.style.setProperty('--drift', Math.random() > 0.5 ? '50px' : '-50px');

      // Random rotation direction
      snowflake.style.setProperty('--rotation', Math.random() > 0.5 ? '360deg' : '-360deg');

      snowflake.textContent = '❄️';

      container.appendChild(snowflake);
      this.snowflakeCount++;

      // Remove after animation ends
      setTimeout(() => {
        snowflake.remove();
        this.snowflakeCount--;
      }, duration * 1000);
    };

    this.snowInterval = setInterval(createSnowflake, spawnInterval);
  },
  beforeUnmount() {
    if (this.snowInterval) clearInterval(this.snowInterval);
  }
};
</script>

<style scoped>
.snowflake {
  position: absolute;
  color: white;
  animation: fall linear forwards;
  pointer-events: none;
  white-space: nowrap;
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  50% {
    transform: translateY(50vh) translateX(var(--drift, 30px)) rotate(calc(var(--rotation, 360deg) / 2));
  }

  100% {
    transform: translateY(100vh) translateX(0) rotate(var(--rotation, 360deg));
  }
}
</style>
