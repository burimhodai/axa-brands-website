"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Axa } from "@/assets/client-logos";
import { NAV_ITEMS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    closed: { y: "-100%" },
    open: { y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Make it invisible and positioned below the baseline
    visible: (i: number) => ({
      opacity: 1, // Make it fully visible
      y: 0, // Snap to baseline
      transition: { delay: 0.3 + i * 0.2 }, // Staggered transition for each item
    }),
  };

  return (
    <div id="ballina" className="bg-secondary h-26 w-full px-4 relative">
      <div className="sm:container flex items-center justify-between h-full mx-auto w-full xl:px-32">
        <img src={Axa} alt="logo" className="h-8 w-auto z-1001" />

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_ITEMS?.map((item, index) => (
            <a
              className={cn(
                "text-lg uppercase hover:cursor-pointer text-white hover:text-white/70 transition-colors font-poppins font-normal",
                {
                  "py-2 px-8 bg-primary border-primary border-3  text-white hover:bg-white hover:text-primary transition-colors":
                    index == 4,
                }
              )}
              key={index}
              href={`/#${item.name}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Animated Menu Button */}
        <motion.div
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-[1001]"
          onClick={toggleMobileMenu}
        >
          <motion.span
            className="w-7 h-1 bg-primary mb-1.5"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              translateY: isMobileMenuOpen ? 5 : 0,
            }}
          />
          <motion.span
            className="w-7 h-1 bg-primary"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              translateY: isMobileMenuOpen ? -5 : 0,
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Navbar Links - Conditionally Rendered */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-secondary fixed top-0 left-0 h-full w-full p-4 z-[1000]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex flex-col items-start flex-grow pt-[30vh]">
                {NAV_ITEMS?.map((item, index) => (
                  <motion.a
                    className="font-bold text-5xl uppercase hover:cursor-pointer text-white transition-colors mb-0" // Removed margin bottom
                    key={index}
                    href={`/#${item.name}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Left side social media links on mobile */}
                <div className="flex flex-row items-end justify-between w-full h-full pb-[15vh]">
                  <div className="flex flex-col">
                    <motion.a
                      className="font-regular text-lg uppercase text-white gap-1 flex flex-row align-bottom"
                      target="_blank"
                      href="https://www.facebook.com/AXAbrandscreation"
                      variants={itemVariants}
                      custom={NAV_ITEMS?.length + 0}
                      initial="hidden"
                      animate="visible"
                    >
                      Facebook <ArrowUpRight className=" text-primary" />
                    </motion.a>
                    <motion.a
                      className="font-regular text-lg uppercase text-white flex flex-row align-bottom"
                      target="_blank"
                      href="https://www.instagram.com/axabrands/"
                      variants={itemVariants}
                      custom={NAV_ITEMS?.length + 1}
                      initial="hidden"
                      animate="visible"
                    >
                      Instagram <ArrowUpRight className=" text-primary" />
                    </motion.a>
                    <motion.a
                      className="font-regular text-lg uppercase text-white flex flex-row align-bottom"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=38970625226"
                      variants={itemVariants}
                      custom={NAV_ITEMS?.length + 2}
                      initial="hidden"
                      animate="visible"
                    >
                      WhatsApp <ArrowUpRight className=" text-primary" />
                    </motion.a>
                  </div>

                  <div className="flex flex-col items-end">
                    <motion.div
                      className="font-regular text-lg uppercase text-white "
                      variants={itemVariants}
                      custom={NAV_ITEMS?.length + 1}
                      initial="hidden"
                      animate="visible"
                    >
                      +389 70 625 226
                    </motion.div>
                    <motion.div
                      className="font-regular text-lg uppercase text-white "
                      variants={itemVariants}
                      custom={NAV_ITEMS?.length + 2}
                      initial="hidden"
                      animate="visible"
                    >
                      info@axabrands.mk
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
