import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Showcase = () => {
  const location = useLocation();
  const { icon, title, img, img2, img3, img4, desc, site, git } =
    location.state;

  return (
    <>
      <Link to="/">
        <motion.h3
          whileHover={{ opacity: 0.5 }}
          className="text-light font-sequelBold text-base md:text-lg xl:text-xl py-4 flex items-center justify-center mix-blend-difference underline"
        >
          Back Home
        </motion.h3>
      </Link>
      <div className="flex flex-col items-center justify-center text-center mt-24 lg:mt-48 leading-0">
        <img src={icon} alt="Logo" className="w-16" />
        <h1 className="font-sequelBold text-4xl xl:text-[90px] lg:text-7xl md:text-6xl sm:text-5xl mt-20 lg:mt-48">
          {title}
        </h1>
        <p className="font-sequelLight text-base xl:text-2xl lg:text-xl max-w-3xl mt-24 lg:mt-32">
          {desc}
        </p>
        <div className="flex items-center justify-start gap-2 mt-8 text-xl text-grey font-sequelLight">
          <motion.a
            whileHover={{ rotateZ: -12 }}
            href={site}
            alt="View Code"
            className="px-8 py-2 bg-black text-light rounded-full"
            target="_blank"
          >
            Live{" "}
          </motion.a>
          <motion.a
            whileHover={{ rotateZ: 12 }}
            href={git}
            alt="View Live Website"
            className="px-8 py-2 border-[1px] border-solid border-black text-black rounded-full"
            target="_blank"
          >
            Code
          </motion.a>
        </div>
      </div>
      <div className="mt-24 lg:mt-48 flex flex-col items-center justify-end gap-y-12">
        <img src={img} alt="Screenshot" />
        <img src={img2} alt="Screenshot" />
        {img3 && <img src={img3} alt="Screenshot" />}
        {img4 && <img src={img4} alt="Screenshot" />}
      </div>
    </>
  );
};
