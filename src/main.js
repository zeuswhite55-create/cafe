import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './index.css'

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => e.preventDefault())

// Disable developer tools keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'C') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'Shift') ||
    (e.metaKey && e.altKey && e.key === 'U')
  ) {
    e.preventDefault()
  }
})

// Detect DevTools
let devTools = { open: false }
const threshold = 160
setInterval(() => {
  if (window.outerWidth - window.innerWidth > threshold || 
      window.outerHeight - window.innerHeight > threshold) {
    devTools.open = true
    document.body.innerHTML = ''
  }
}, 500)

const app = createApp(App)

app.use(MotionPlugin)
app.mount('#root')
