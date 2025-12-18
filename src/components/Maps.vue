<script setup>
const location = "Bloom & Brew, survey no. 199/1 boura vaddo, Assagao, Assagao, Goa 403507"
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.5267854584707!2d73.84097792346928!3d15.567825699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfaa0e2b6d6d6d%3A0x1234567890abcdef!2sBloom%20%26%20Brew!5e0!3m2!1sen!2sin!4v1234567890"
</script>

<template>
  <section class="bg-white py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-black uppercase mb-4 text-primary">
          Find Us
        </h2>
        <div class="w-24 h-1 bg-accent mx-auto" />
      </div>

      <div class="max-w-2xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl" style="aspect-ratio: 16/9">
          <iframe
            :src="mapUrl"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="text-center mt-6 font-mono text-sm text-primary/70">
          {{ location }}
        </p>
      </div>
    </div>
  </section>
</template>
