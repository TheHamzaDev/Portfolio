import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="text-light font-sequelBold text-base md:text-lg xl:text-xl fixed px-4 py-4 flex items-center justify-between w-full mix-blend-difference">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <motion.h3 whileHover={{ opacity: 0.5 }}>H — K</motion.h3>
      </Link>
      <motion.a
        whileHover={{ opacity: 0.5 }}
        href="mailto:hamzak1738@gmail.com"
      >
        Contact
      </motion.a>
    </nav>
  );
};
