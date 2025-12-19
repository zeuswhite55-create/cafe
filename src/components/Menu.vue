<script setup>
import { Play, ShoppingBag, UtensilsCrossed } from "lucide-vue-next";
import img1 from "@assets/generated_images/dish1.jpg";
import img2 from "@assets/generated_images/dish2.jpg";
import img3 from "@assets/generated_images/dish3.jpg";
import img4 from "@assets/generated_images/dish4.jpg";
import video from "@assets/menuvideo.mp4";

const galleryImages = [img1, img2, img3, img4];
</script>

<template>
  <section class="py-24 bg-secondary text-secondary-foreground relative">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">
          Menu
        </h2>
        <div class="w-24 h-1 bg-accent mx-auto" />
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:grid grid-cols-4 gap-6 mb-12">
        <div
          v-for="(img, index) in galleryImages"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: { delay: index * 100 },
          }"
        >
          <img
            :src="img"
            alt="Menu item"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
          />
        </div>
      </div>

      <!-- Mobile Collage Layout -->
      <div class="md:hidden grid grid-cols-2 gap-4 mb-12">
        <!-- Video takes up left side, full height -->
        <div class="row-span-2">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl bg-black h-full"
            style="min-height: 400px"
          >
            <video
              :src="video"
              class="w-full h-full object-cover"
              controls
              autoplay
              loop
              muted
              playsinline
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
            >
              <Play class="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        <!-- Images on right side in grid -->
        <div
          v-for="(img, index) in galleryImages"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-48"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: { delay: index * 100 },
          }"
        >
          <img
            :src="img"
            alt="Menu item"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
          />
        </div>
      </div>

      <!-- Desktop: Side by Side Layout -->
      <div class="hidden md:flex flex-row gap-12 items-center justify-center">
        <div class="flex-1 max-w-xs">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            style="aspect-ratio: 9/16"
          >
            <video
              :src="video"
              class="w-full h-full object-cover"
              controls
              autoplay
              loop
              muted
              playsinline
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
            >
              <Play class="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <div class="flex-1 text-center md:text-left">
          <h3 class="text-3xl md:text-4xl font-black mb-4 text-primary">
            Experience Our Vibe
          </h3>
          <p class="text-lg text-secondary-foreground/80 mb-8 font-light">
            Discover the perfect blend of ambiance, taste, and community. Watch
            our latest moments and join us for an unforgettable coffee
            experience.
          </p>
          <a
            href="https://www.instagram.com/reel/DFm_OCVSxbr/"
            class="inline-block px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all hover:scale-105"
          >
            Watch More →
          </a>
        </div>
      </div>

      <!-- Mobile: Experience Text -->
      <div class="md:hidden text-center mb-8 mt-8">
        <h3 class="text-2xl font-black mb-3 text-primary">
          Experience Our Vibe
        </h3>
        <p class="text-base text-secondary-foreground/80 mb-6 font-light">
          Discover the perfect blend of ambiance, taste, and community. Watch
          our latest moments and join us for an unforgettable coffee experience.
        </p>
        <a
          href="https://www.instagram.com/bloomandbrew.nofc/reels/"
          class="inline-block px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all hover:scale-105"
        >
          Watch More →
        </a>
      </div>

      <div
        class="flex flex-col md:flex-row gap-6 justify-center items-center mt-16"
      >
        <a
          href="https://www.swiggy.com/city/central-goa/bloom-and-brew-boura-vaddo-assagao-rest709755"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full md:w-auto px-8 py-4 bg-[#FC8019] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <ShoppingBag class="w-5 h-5" />
          Order on Swiggy
        </a>

        <a
          href="https://www.zomato.com/goa/bloom-and-brew-assagao"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full md:w-auto px-8 py-4 bg-[#CB202D] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <UtensilsCrossed class="w-5 h-5" />
          Order on Zomato
        </a>
      </div>
    </div>
  </section>
</template>
