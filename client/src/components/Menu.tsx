import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";

const menuItems = [
  { name: "Avocado Toast", price: "₹350", desc: "Sourdough, poached egg, chili flakes" },
  { name: "Truffle Mushroom Pasta", price: "₹450", desc: "Creamy sauce, parmesan, parsley" },
  { name: "Classic Cappuccino", price: "₹220", desc: "Double shot espresso, steamed milk" },
  { name: "Matcha Latte", price: "₹280", desc: "Ceremonial grade matcha, oat milk" },
  { name: "Berry Smoothie Bowl", price: "₹380", desc: "Mixed berries, granola, honey" },
  { name: "Croissant Sandwich", price: "₹290", desc: "Ham, cheese, arugula, mustard" },
];

export function Menu() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-primary">
            Menu
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex justify-between items-start border-b border-primary/10 pb-4 hover:border-accent/50 transition-colors"
            >
              <div>
                <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="font-mono text-sm text-primary/60">
                  {item.desc}
                </p>
              </div>
              <span className="font-mono font-bold text-lg">{item.price}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.a
            href="https://swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-[#FC8019] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Order on Swiggy
          </motion.a>
          
          <motion.a
            href="https://zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-[#CB202D] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <UtensilsCrossed className="w-5 h-5" />
            Order on Zomato
          </motion.a>
        </div>
      </div>
    </section>
  );
}
