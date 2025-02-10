import { HeroImg } from "@/assets/images";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Container animation for staggered child elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Text animation (slide from below)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Image animation (slide from below)
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-primary h-auto sm:h-200 w-full relative py-10" ref={ref}>
      <motion.div
        className="h-full flex flex-col sm:flex-row sm:container justify-center items-center mx-auto gap-16 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-4 text-center sm:text-left"
          variants={textVariants}
        >
          <motion.div className="text-5xl text-left xl:7xl 2xl:text-8xl font-black text-secondary">
            <p>
              E BIM FIRMËN <br /> TONDE NË{" "}
              <span className="whitespace-nowrap text-white">Jetë</span>
            </p>
            <p>
              ME{" "}
              <span className="whitespace-nowrap text-white">Kreativitet</span>
            </p>
            <p>
              DHE <span className="whitespace-nowrap text-white">Pasion</span>
            </p>
          </motion.div>
          <motion.p
            className="text-lg text-left md:text-lg sm:text-xl font-medium text-white"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Jemi ofrues kryesor i zgjidhjeve për dizajn grafik, printime indoor
            & outdoor <br /> dhe marketing, operojm në rrethinën e Pollogut për
            më shumë se 20 vite
          </motion.p>

          <motion.a
            href="/#na kontakto"
            className="group flex flex-row gap-2 py-2 px-8 bg-secondary border-5 border-secondary font-bold text-primary hover:bg-white hover:text-secondary transition-colors w-auto self-start mt-4"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ÇOJE NI MESAZH
            <ChevronRight className=" group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-[570px] max-w-[570px] h-auto sm:h-[540px]"
          variants={imageVariants}
        >
          <motion.img
            src={HeroImg}
            alt="image"
            className="w-full h-full object-cover"
            variants={imageVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
