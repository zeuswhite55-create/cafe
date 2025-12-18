<script setup>
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import logo from '@assets/Gemini_Generated_Image_aojifdaojifdaoji-removebg-preview_1765989501127.png'
import heroVideo from '@assets/SaveVid.Net_AQOtiZRNooK8FIOcBJA0I1scj7vysEzt8wvwbS26TbjUME8oXP_1765989520939.mp4'

const target = ref(null)
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden bg-primary">
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover opacity-80"
      >
        <source :src="heroVideo" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
    </div>

    <div 
      class="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <img 
        :src="logo" 
        alt="BB Logo" 
        class="w-32 md:w-48 mb-8 invert brightness-0 filter drop-shadow-lg"
      />

      <h1 class="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
        Bloom & Brew
      </h1>

      <p class="text-white/90 text-lg md:text-xl font-mono max-w-md mb-12">
        Wherever life plants you, bloom with grace.
      </p>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative overflow-hidden bg-white text-primary px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-colors duration-300"
      >
        Book A Table
        <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    <div 
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      v-motion
      :initial="{ y: 0 }"
      :enter="{ y: 10, transition: { repeat: Infinity, duration: 2000, repeatType: 'mirror' } }"
    >
      <div class="w-[1px] h-12 bg-white/50 mx-auto"></div>
    </div>
  </section>
</template>
