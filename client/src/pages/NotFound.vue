<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
    <h1 class="text-9xl font-black text-primary/20">404</h1>
    <h2 class="text-2xl font-bold mb-4">Page Not Found</h2>
    <p class="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
    <router-link 
      to="/" 
      class="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
    >
      Return Home
    </router-link>
  </div>
</template>
