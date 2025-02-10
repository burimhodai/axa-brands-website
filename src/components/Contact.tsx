import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { sendEmail } from "@/lib/sendEmail";
import { motion, useInView } from "framer-motion";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Container animation for the entire form
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Text and button animation (slide from below)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Message field animation (slide from below)
  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        await sendEmail(form.current); // Now it only expects 1 argument
        setMessage("Mesazhi u dërgua me sukses!");
        setIsSuccess(true);
        form.current.reset();
      } catch (error) {
        console.error("Email sending failed:", error);
        setMessage("Diçka shkoi keq. Ju lutemi provoni përsëri.");
        setIsSuccess(false);
      }
    }
  };

  return (
    <section
      id="na kontakto"
      className="flex bg-primary h-fit 2xl:py-32 py-10 items-center"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-5xl lg:text-7xl font-black text-secondary"
            variants={textVariants}
          >
            FOLIM?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl font-medium text-white mt-4"
            variants={textVariants}
          >
            A ini të interesaum të{" "}
            <span className="whitespace-nowrap text-white">bisedoni</span> ose
            të{" "}
            <span className="whitespace-nowrap text-white">bashkëpunoni</span>?
            <br />
            Ne ina ktau për të ju ndajf. Çoje ni mesazh.
          </motion.p>
        </motion.div>

        {/* Form */}
        <div className="flex justify-center">
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            name="contact-form"
            method="post"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={messageVariants}>
                <label
                  htmlFor="from_name"
                  className="mb-2 font-medium text-white"
                >
                  Emri
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="block w-full bg-secondary text-white h-12 px-4 py-2 border border-solid border-secondary text-sm focus:outline-none ring-2 ring-secondary"
                  required
                />
              </motion.div>
              <motion.div variants={messageVariants}>
                <label
                  htmlFor="from_email"
                  className="mb-2 font-medium text-white"
                >
                  Emaili jot
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="block w-full h-12 px-4 py-2 border border-solid border-secondary text-sm bg-secondary text-white focus:outline-none ring-2 ring-secondary"
                  required
                />
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div className="mb-6" variants={messageVariants}>
              <label htmlFor="message" className="mb-2 font-medium text-white">
                Mesazhi
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={5000}
                className="block w-full bg-secondary text-white min-h-36 h-auto px-4 py-2 border border-solid border-secondary text-sm focus:outline-none ring-2 ring-secondary"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button and Message */}
            <motion.div
              className="flex flex-col items-center"
              variants={messageVariants}
            >
              <button
                type="submit"
                className="hover:cursor-pointer group flex flex-row gap-2 py-2 px-8 bg-secondary border-5 border-secondary font-bold text-primary hover:bg-white hover:text-secondary transition-colors w-auto mt-4"
              >
                Dërgo mesazhin
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              {message && (
                <p
                  className={`mt-4 text-sm ${
                    isSuccess ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
