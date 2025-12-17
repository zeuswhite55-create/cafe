import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

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
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Reviews Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-12 text-center uppercase tracking-wider">
            What People Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, starI) => (
                    <Star 
                      key={starI} 
                      className={`w-4 h-4 ${starI < review.rating ? "fill-current" : "opacity-30"}`} 
                    />
                  ))}
                </div>
                <p className="font-mono text-sm leading-relaxed mb-6 opacity-80">
                  "{review.text}"
                </p>
                <p className="font-bold font-sans text-accent">
                  — {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black uppercase mb-4">BB</h2>
            <p className="font-mono text-sm opacity-60">
              Bloom & Brew Cafe.<br/>
              Est. 2024
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 font-mono text-sm opacity-80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@bloombrew.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123, Green Street, <br/>Urban District, City - 560001</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Opening Hours</h4>
            <ul className="space-y-2 font-mono text-sm opacity-80">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>9:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-6 text-accent">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center font-mono text-xs opacity-40">
          © 2024 Bloom & Brew. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
