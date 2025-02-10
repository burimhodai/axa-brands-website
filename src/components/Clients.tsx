import { TRUSTED_COMPANIES } from "@/lib/constants";
import React from "react";
import { motion, useInView } from "framer-motion";

export const Clients: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-primary py-32" id="klientela">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          className="text-7xl font-black text-center text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          KLIENTËT
        </motion.h2>
        <motion.p
          className="text-white text-center sm:mb-16 mb-6 font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          KIT KTO NA BESOJN NEVE. TAJ KUR?
        </motion.p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TRUSTED_COMPANIES.map((company, index) => (
            <motion.div
              key={index}
              className="w-32 h-20 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={company.Logo || "/placeholder.svg"}
                alt={company.name}
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
