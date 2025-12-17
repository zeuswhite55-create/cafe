import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@assets/Gemini_Generated_Image_aojifdaojifdaoji-removebg-preview_1765989501127.png";
import heroVideo from "@assets/SaveVid.Net_AQOtiZRNooK8FIOcBJA0I1scj7vysEzt8wvwbS26TbjUME8oXP_1765989520939.mp4";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
      >
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={logo} 
          alt="BB Logo" 
          className="w-32 md:w-48 mb-8 invert brightness-0 filter drop-shadow-lg"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
        >
          Bloom & Brew
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl font-mono max-w-md mb-12"
        >
          Wherever life plants you, bloom with grace.
        </motion.p>

        <motion.a
          href="https://wa.me/" // User should replace with real number
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden bg-white text-primary px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-colors"
        >
          Book A Table
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/50 mx-auto" />
      </motion.div>
    </section>
  );
}
