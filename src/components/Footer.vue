<script setup>
import { Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-vue-next'
import logo from '@assets/Gemini_Generated_Image_aojifdaojifdaoji-removebg-preview_1765989501127.png'

const reviews = [
  {
    text: "The ambiance is unmatched. Perfect spot for a quiet coffee or a casual meeting.",
    author: "Sarah J.",
    rating: 5
  },
  {
    text: "Best avocado toast in the city. The staff is super friendly and welcoming!",
    author: "Mike T.",
    rating: 5
  },
  {
    text: "Love the brutalist minimal vibe. Very instagrammable and the coffee is legit.",
    author: "Priya K.",
    rating: 4
  }
]
</script>

<template>
  <footer class="bg-primary text-primary-foreground pt-24 pb-12">
    <div class="container mx-auto px-4">
      
      <div class="mb-24">
        <h3 class="text-3xl font-bold mb-12 text-center uppercase tracking-wider">
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
            <p class="font-bold font-sans text-accent">
              — {{ review.author }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
        

        <div>
          <h4 class="font-bold mb-6 text-accent">Contact Us</h4>
          <ul class="space-y-4 font-mono text-sm opacity-80">
            <li class="flex items-center gap-3">
              <Phone class="w-4 h-4" />
              <span>+91 98765 43210</span>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4" />
              <span>hello@bloombrew.com</span>
            </li>
            <li class="flex items-start gap-3">
              <MapPin class="w-4 h-4 mt-1" />
              <span>123, Green Street, <br/>Urban District, City - 560001</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-6 text-accent">Opening Hours</h4>
          <ul class="space-y-2 font-mono text-sm opacity-80">
            <li class="flex justify-between">
              <span>Mon - Fri</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span>Sat - Sun</span>
              <span>9:00 AM - 11:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-6 text-accent">Follow Us</h4>
          <div class="flex gap-4">
            <a href="#" class="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
              <Twitter class="w-5 h-5" />
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
