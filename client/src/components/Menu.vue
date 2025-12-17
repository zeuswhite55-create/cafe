<script setup lang="ts">
import { ShoppingBag, UtensilsCrossed } from 'lucide-vue-next'

const menuItems = [
  { name: "Avocado Toast", price: "₹350", desc: "Sourdough, poached egg, chili flakes" },
  { name: "Truffle Mushroom Pasta", price: "₹450", desc: "Creamy sauce, parmesan, parsley" },
  { name: "Classic Cappuccino", price: "₹220", desc: "Double shot espresso, steamed milk" },
  { name: "Matcha Latte", price: "₹280", desc: "Ceremonial grade matcha, oat milk" },
  { name: "Berry Smoothie Bowl", price: "₹380", desc: "Mixed berries, granola, honey" },
  { name: "Croissant Sandwich", price: "₹290", desc: "Ham, cheese, arugula, mustard" },
]
</script>

<template>
  <section class="py-24 bg-secondary text-secondary-foreground relative">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">
          Menu
        </h2>
        <div class="w-24 h-1 bg-accent mx-auto" />
      </div>

      <div class="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        <div 
          v-for="(item, index) in menuItems" 
          :key="index"
          class="group flex justify-between items-start border-b border-primary/10 pb-4 hover:border-accent/50 transition-colors"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        >
          <div>
            <h3 class="font-bold text-xl mb-1 group-hover:text-accent transition-colors">
              {{ item.name }}
            </h3>
            <p class="font-mono text-sm text-primary/60">
              {{ item.desc }}
            </p>
          </div>
          <span class="font-mono font-bold text-lg">{{ item.price }}</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a
          href="https://swiggy.com"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full md:w-auto px-8 py-4 bg-[#FC8019] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <ShoppingBag class="w-5 h-5" />
          Order on Swiggy
        </a>
        
        <a
          href="https://zomato.com"
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
