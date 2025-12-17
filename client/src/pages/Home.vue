<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Gallery from '@/components/Gallery.vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import { useScroll } from '@vueuse/core'

const { x } = useScroll(window)
</script>

<template>
  <main class="min-h-screen bg-background w-full overflow-x-hidden selection:bg-accent selection:text-white">
    <!-- Progress Bar (Simple Implementation) -->
    <div 
      class="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
      :style="{ transform: `scaleX(${x})` }"
    ></div>
    
    <Hero />
    <Gallery />
    <Menu />
    <Footer />
  </main>
</template>
