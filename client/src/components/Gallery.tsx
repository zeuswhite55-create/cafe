import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "@assets/generated_images/cafe_storefront_exterior.png";
import img2 from "@assets/generated_images/barista_pouring_coffee.png";
import img3 from "@assets/generated_images/delicious_cafe_food_spread.png";
import img4 from "@assets/generated_images/people_enjoying_coffee.png";
import galleryRef from "@assets/gallery_1765989542293.png"; // Keeping for reference/texture if needed

const images = [img1, img2, img3, img4, img1, img2];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-6xl text-primary uppercase tracking-tighter mb-2">
            The Space
          </h2>
          <p className="font-mono text-muted-foreground text-sm md:text-base">
            Curated specifically for your peace of mind.
          </p>
        </div>
        <div className="hidden md:block font-mono text-xs text-primary/50">
          SCROLL TO EXPLORE →
        </div>
      </div>

      <div className="relative w-full">
        <motion.div 
          style={{ x }}
          className="flex gap-4 md:gap-8 px-4 w-max"
        >
          {images.map((src, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500
                ${i % 2 === 0 ? "w-[300px] h-[400px] md:w-[400px] md:h-[500px]" : "w-[250px] h-[350px] md:w-[350px] md:h-[450px] mt-12"}
              `}
            >
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
