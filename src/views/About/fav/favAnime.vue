<template>
  <div class="banner text-white text-center py-4 shadow">
    <p class="lead mb-0">A clean Bootstrap title banner</p>
  </div>
  <ImageGallery :images="galleryImages" />
</template>
<script setup>
import ImageGallery from '@/components/imageGallery.vue';

const galleryImages = [
  {
    url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/09/Digimon-Universe-App-Monsters-Featured-Cropped.jpg?w=1600&h=900&fit=crop1",
    title: "Digimon Universe",
    description: "A tall scenic photo."
  },
  {
    url: "https://m.media-amazon.com/images/S/pv-target-images/ebf6a07f543a488b9436d0d91dc798036bad2642b75ee3665647a619119b0eb7.jpg",
    title: "Hetalia",
    description: "A wide cityscape view."
  },
  {
    url: "https://resize.cdn.otakumode.com/full/u/f27eb6d3753d4557b2a65f41657c3fe7.jpg",
    title: "Ensemble Stars",
    description: "A portrait styled photo."
  },
  {
    url: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfOm3MFg55tZvdR7HbvE3emEyoJXOE4ATmnztZLnV0b3YlaBv24b69IQ4EWdpofGgx1Ke0GcMsjXzdZ2Pk-3KmCkNMNbm3dE-r5n.jpg",
    title: "Tobot Daedo Heroes",
    description: "A calm landscape photo."
  },
  {
    url: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSn5zYYzKSX3HPAfFOqhvm8cg1U-5VjFiJeuNv8HNbd8Cenq8hFzcdZXcpSZlxSd1Ik4pXK-WY9rgq_DGzdIuu0w23Rt4CUDOGPY.jpg",
    title: "Nier Automata The Animation",
    description: "",
  }
]
</script>
<style scoped>
.banner {
  background-color: rgb(86, 131, 170);
}
</style>
