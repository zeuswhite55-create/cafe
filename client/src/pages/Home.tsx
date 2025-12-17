import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <Hero />
      <Gallery />
      <Menu />
      <Footer />
    </main>
  );
}
