<script setup>
import { ref, computed } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import img1 from "@assets/generated_images/cafe_storefront_exterior.png"
import img2 from "@assets/generated_images/barista_pouring_coffee.png"
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png"
import img4 from "@assets/generated_images/people_enjoying_coffee.png"

const images = [img1, img2, img3, img4, img1, img2, img3, img4]

const container = ref(null)
const { y } = useScroll(window)
const { width } = useWindowSize()

const isDesktop = computed(() => width.value >= 1024)

const y1 = computed(() => isDesktop.value ? `perspective(800px) translateY(${y.value * 0.15}px) rotateX(${y.value * 0.05}deg) rotateZ(${y.value * 0.02}deg)` : 'none')
const y2 = computed(() => isDesktop.value ? `perspective(800px) translateY(${y.value * 0.25}px) rotateX(${y.value * 0.08}deg) rotateZ(${y.value * -0.03}deg)` : 'none')
const y3 = computed(() => isDesktop.value ? `perspective(800px) translateY(${y.value * 0.2}px) rotateX(${y.value * 0.06}deg) rotateZ(${y.value * 0.025}deg)` : 'none')
const y4 = computed(() => isDesktop.value ? `perspective(800px) translateY(${y.value * 0.3}px) rotateX(${y.value * 0.09}deg) rotateZ(${y.value * -0.02}deg)` : 'none')
</script>

<template>
  <section ref="container" class="relative py-6 md:py-12 bg-white overflow-hidden">
    
    <div class="sticky top-8 z-50 px-4 md:px-12 mb-6 mix-blend-exclusion text-white pointer-events-none">
      <h2 
        class="text-[8vw] md:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        The<br/>Space
      </h2>
    </div>

    <div class="container mx-auto px-2 relative">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full">
        
        <div :style="{ transform: y1 }" class="flex flex-col gap-2 md:gap-8 transition-transform duration-75 ease-out will-change-transform mt-4 md:mt-0">
          <div class="relative h-[140px] md:h-[30vh] w-[115%] -ml-[5%] md:w-full md:ml-0 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl rotate-3 md:rotate-0 z-10 mb-0">
            <img :src="images[0]" class="w-full h-full object-cover" alt="Gallery 1" />
          </div>
          <div class="relative h-[120px] md:h-[22vh] w-[90%] ml-[10%] md:w-[110%] md:-ml-[5%] rounded-[1rem] overflow-hidden shadow-lg border-4 md:border-6 border-white z-20 rotate-0 md:rotate-0">
             <img :src="images[4]" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 2" />
          </div>
        </div>

        <div :style="{ transform: y2 }" class="flex flex-col gap-2 md:gap-8 md:pt-8 transition-transform duration-75 ease-out will-change-transform mt-0 md:mt-0 pl-2">
           <div class="relative h-[160px] md:h-[28vh] w-[110%] -ml-[5%] md:w-full md:ml-0 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg -rotate-1 md:rotate-2 z-0 mb-0">
            <img :src="images[1]" class="w-full h-full object-cover scale-105" alt="Gallery 3" />
          </div>
          <div class="relative h-[140px] md:h-[32vh] w-full md:w-[105%] md:-ml-[3%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl z-10 border-4 border-white rotate-2 md:rotate-0">
            <img :src="images[5]" class="w-full h-full object-cover" alt="Gallery 4" />
          </div>
        </div>

        <div :style="{ transform: y3 }" class="flex flex-col gap-2 md:gap-6 md:pt-6 transition-transform duration-75 ease-out will-change-transform mt-0 md:mt-0">
           <div class="relative h-[150px] md:h-[30vh] w-[110%] -ml-[5%] md:w-[105%] md:-ml-[3%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg rotate-1 md:-rotate-1 z-10 mb-0">
            <img :src="images[2]" class="w-full h-full object-cover" alt="Gallery 5" />
          </div>
           <div class="relative h-[120px] md:h-[20vh] w-[80%] ml-[15%] md:w-[80%] md:ml-[5%] rounded-full overflow-hidden shadow-md border-4 md:border-8 border-white z-30">
            <img :src="images[6]" class="w-full h-full object-cover" alt="Gallery 6" />
          </div>
        </div>

        <div :style="{ transform: y4 }" class="flex flex-col gap-2 md:gap-8 md:pt-8 transition-transform duration-75 ease-out will-change-transform mt-2 md:mt-0 pl-2">
          <div class="relative h-[140px] md:h-[24vh] w-[105%] -ml-[2.5%] md:w-full md:ml-0 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg -rotate-3 md:rotate-0 z-0 mb-0">
             <img :src="images[3]" class="w-full h-full object-cover" alt="Gallery 7" />
          </div>
           <div class="relative h-[180px] md:h-[28vh] w-[110%] -ml-[5%] md:w-[120%] md:-ml-[20%] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 rotate-1 md:rotate-0">
             <img :src="images[7]" class="w-full h-full object-cover" alt="Gallery 8" />
          </div>
        </div>

      </div>
    </div>

    <div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-transparent via-background/30 to-background" />
    
  </section>
</template>