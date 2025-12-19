<script setup>
import {
  Star,
  MapPin,
  Phone,
  Instagram,
  Facebook,
} from "lucide-vue-next";

const reviews = [
  {
    text: "Great place with an amazing vibe. And the food is well worth trying again. Loved their nachos and their shrimp tacos are a must try. They have a pool table as well, so you can have a fun time with friends. The aesthetics, the beauty of the place is pretty natural and makes you wanna visit again.",
    author: "Vritika Naik",
    rating: 5,
  },
  {
    text: "We found Bloom & Brew while looking for a good brunch spot before heading to South Goa, and it turned out to be just what we needed after all-nighter. The very berry smoothie bowl, pineapple drink, and pasta were all amazing. The staff were genuinely so sweet and patient with the little changes we asked for. Loved the calm ambience and the subtle music, which was exactly the kind of vibe we wanted that afternoon. So glad we chose this place.",
    author: "Vasavi Emmadi",
    rating: 5,
  },
  {
    text: "Loved the food and ambience! Great vibes! 100% recommend",
    author: "Kanika Mittal",
    rating: 4,
  },
];
</script>

<template>
  <footer class="bg-primary text-primary-foreground pt-24 pb-12">
    <div class="container mx-auto px-4">
      <div class="mb-24">
        <h3
          class="text-3xl font-bold mb-12 text-center uppercase tracking-wider"
        >
          What People Say
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(review, i) in reviews"
            :key="i"
            class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: i * 200 } }"
          >
            <div class="flex gap-1 mb-4 text-accent">
              <Star
                v-for="starI in 5"
                :key="starI"
                class="w-4 h-4"
                :class="starI <= review.rating ? 'fill-current' : 'opacity-30'"
              />
            </div>
            <p class="font-mono text-sm leading-relaxed mb-6 opacity-80">
              "{{ review.text }}"
            </p>
            <p class="font-bold font-sans text-accent">— {{ review.author }}</p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-white/10 pt-16 justify-center items-center md:items-start text-center md:text-left"
      >
        <div>
          <h4 class="font-bold mb-6 text-accent">Contact Us</h4>
          <ul class="space-y-4 font-mono text-sm opacity-80">
            <li class="flex items-center gap-3 justify-center md:justify-start">
              <Phone class="w-4 h-4" />
              <span>+91 9511603598</span>
            </li>
            
            <li class="flex items-start gap-3 justify-center md:justify-start">
              <MapPin class="w-4 h-4 mt-1" />
              <span
                >survey no. 199/1 boura vaddo , Assagao,<br />Assagao, Goa
                403507</span
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-6 text-accent">Opening Hours</h4>
          <ul class="space-y-2 font-mono text-sm opacity-80">
            <li class="flex justify-center md:justify-between gap-8 md:gap-0">
              <span>Mon - Fri</span>
              <span>9:00 AM - 11:00 PM</span>
            </li>
            <li class="flex justify-center md:justify-between gap-8 md:gap-0">
              <span>Sat - Sun</span>
              <span>9:00 AM - 11:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-6 text-accent">Follow Us</h4>
          <div class="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/bloomandbrew.nofc/"
              class="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors"
              target="_blank"
            >
              <Instagram class="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/bloomandbrewgoa/"
              class="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors"
              target="_blank"
            >
              <Facebook class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center font-mono text-xs opacity-40">
        © 2024 Bloom & Brew. All rights reserved.
      </div>
    </div>
  </footer>
</template>
