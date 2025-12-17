import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import img1 from "@assets/generated_images/cafe_storefront_exterior.png";
import img2 from "@assets/generated_images/barista_pouring_coffee.png";
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png";
import img4 from "@assets/generated_images/people_enjoying_coffee.png";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire page or just this section
  // Using the whole page scroll or a larger offset for smoother, continuous movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  const springConfig = { stiffness: 40, damping: 20, mass: 1 };
  const smoothY = useSpring(scrollYProgress, springConfig);

  // Much more aggressive parallax values for distinct floating speeds
  const y1 = useTransform(smoothY, [0, 1], [0, -600]);
  const y2 = useTransform(smoothY, [0, 1], [300, -800]); // Moves very fast
  const y3 = useTransform(smoothY, [0, 1], [100, -400]);
  const y4 = useTransform(smoothY, [0, 1], [400, -1000]); // Fastest

  const rotate1 = useTransform(smoothY, [0, 1], [0, 10]);
  const rotate2 = useTransform(smoothY, [0, 1], [0, -8]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white min-h-[250vh] overflow-hidden">
      
      {/* Sticky Header that stays for a bit */}
      <div className="sticky top-12 z-50 px-4 md:px-12 mb-32 mix-blend-exclusion text-white pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter"
        >
          The<br/>Space
        </motion.h2>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full">
          
          {/* Column 1 - Slow float */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-32">
            <div className="relative h-[60vh] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={images[0]} className="w-full h-full object-cover" alt="Gallery 1" />
            </div>
            <div className="relative h-[40vh] w-[120%] -ml-[10%] rounded-full overflow-hidden shadow-xl border-8 border-white z-10">
               <img src={images[4]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery 2" />
            </div>
          </motion.div>

          {/* Column 2 - Fast float */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-48 pt-48">
             <div className="relative h-[45vh] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img src={images[1]} className="w-full h-full object-cover scale-110" alt="Gallery 3" />
            </div>
            <div className="relative h-[70vh] w-[110%] -ml-[5%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
              <img src={images[5]} className="w-full h-full object-cover" alt="Gallery 4" />
            </div>
          </motion.div>

          {/* Column 3 - Moderate float */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-24 pt-24">
             <div className="relative h-[65vh] w-[110%] -ml-[5%] rounded-[2rem] overflow-hidden shadow-2xl -rotate-2 z-10">
              <img src={images[2]} className="w-full h-full object-cover" alt="Gallery 5" />
            </div>
             <div className="relative h-[30vh] w-[80%] ml-[10%] rounded-full overflow-hidden shadow-lg border-[12px] border-white z-30">
              <img src={images[6]} className="w-full h-full object-cover" alt="Gallery 6" />
            </div>
          </motion.div>

          {/* Column 4 - Fastest float (starts low) */}
          <motion.div style={{ y: y4 }} className="hidden lg:flex flex-col gap-40 pt-[40vh]">
            <motion.div style={{ rotate: rotate1 }} className="relative h-[40vh] w-full rounded-[2rem] overflow-hidden shadow-xl">
               <img src={images[3]} className="w-full h-full object-cover" alt="Gallery 7" />
            </motion.div>
             <motion.div style={{ rotate: rotate2 }} className="relative h-[55vh] w-[140%] -ml-[40%] rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white z-20">
               <img src={images[7]} className="w-full h-full object-cover" alt="Gallery 8" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Deep Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
    </section>
  );
}
