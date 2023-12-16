import React from "react";
import { motion } from "framer-motion";

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-screen h-screen bg-light fixed z-50 flex items-center justify-center overflow-x-hidden "
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-sequelBold text-4xl"
      >
        Hello.
      </motion.p>
    </motion.div>
  );
};
