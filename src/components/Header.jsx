import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Header = () => {
  return (
    <>
      <div className="pt-48 text-center text-3xl leading-none xl:text-[90px] lg:text-7xl md:text-6xl sm:text-5xl">
        <h1 className="font-sequelBold">Hamza Khan.</h1>
        <h2 className="font-sequelLight">
          Front-End Web Developer focused on creating modern and innovative
          websites to provide a unique digital experience.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-12 mt-16">
        <motion.a
          whileHover={{ rotateZ: 15 }}
          href="https://github.com/TheHamzaDev"
          title="View GitHub Page"
          target="_blank"
        >
          <GitHubIcon sx={{ fontSize: 55 }} />
        </motion.a>
        <motion.a
          whileHover={{ rotateZ: 15 }}
          href="https://www.linkedin.com/in/hamzakhandev/"
          title="View LinkedIn Page"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: 60 }} />
        </motion.a>
      </div>
    </>
  );
};
