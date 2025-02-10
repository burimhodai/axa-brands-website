"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Category } from "../lib/types";
import { CATEGORIES, WORK_ITEMS } from "../lib/constants";

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("KREJT");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredItems = WORK_ITEMS.filter((item) =>
    activeCategory === "KREJT" ? true : item.category === activeCategory
  );

  // Container animation for staggered child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div id="xhi ofrojm ne?" className="bg-secondary">
      <div className="container mx-auto md:2xl:px-22 py-32 px-4" ref={ref}>
        <motion.h1
          className="text-4xl md:text-7xl font-black mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          PUNËT TONA
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-4 py-2 text-sm font-medium transition-colors text-white hover:cursor-pointer
              ${
                activeCategory === category
                  ? "bg-primary text-secondary"
                  : "hover:bg-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden bg-gray-100"
              variants={itemVariants}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} - ${item.name}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover effect for text */}
              <div className="absolute inset-0 bg-[#b93916]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.name}</p>
                  <p className="text-xs mt-2 text-[#D4F60C]">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
