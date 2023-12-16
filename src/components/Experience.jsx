import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ y: "80px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="font-sequelLight text-grey text-lg xl:text-2xl lg:text-xl">
          Experience
        </h2>
        <hr className="w-full border-solid border-[1px] border-grey mt-4" />
        <div className="mt-12 lg:mt-20">
          <div className="flex items-center justify-between">
            <h3 className="font-sequelBold pr-5 text-xl xl:text-4xl lg:text-3xl md:text-2xl">
              Grape Software
            </h3>
            <p className="font-sequelLight text-grey text-base xl:text-2xl lg:text-xl">
              May 2023 - July 2023
            </p>
          </div>
          <h4 className="font-sequelLight mt-10 text-grey text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:mt-0">
            Front-End Web Developer
          </h4>
          <p className="font-sequelLight text-grey text-lg xl:text-2xl lg:text-xl w-10/12 lg:w-6/12 mt-12">
            Contributed to both designing and developing the prototype system to
            be showcased to current shareholders/investors.
          </p>
        </div>
        <hr className="w-full border-solid border-[1px] border-grey mt-24 lg:mt-36" />
        <div className="mt-12 lg:mt-20">
          <div className="flex items-center justify-between">
            <h3 className="font-sequelBold pr-5 text-xl xl:text-4xl lg:text-3xl md:text-2xl">
              Your Sunderland Student's Union
            </h3>
            <p className="font-sequelLight text-grey text-base xl:text-2xl lg:text-xl">
              Jun 2022 - Jul 2022
            </p>
          </div>
          <h4 className="font-sequelLight mt-10 text-grey text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:mt-0">
            Web Developer
          </h4>
          <p className="font-sequelLight text-grey text-lg xl:text-2xl lg:text-xl w-10/12 lg:w-6/12 mt-12">
            Focused on improving the current design, accessibility and fixing
            issues throughout the whole Your SU* website.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: "80px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="font-sequelLight text-grey text-lg xl:text-2xl lg:text-xl mt-48 lg:mt-64">
          Education
        </h2>
        <hr className="w-full border-solid border-[1px] border-grey mt-4" />
        <div className="mt-12 lg:mt-20">
          <div className="flex items-center justify-between">
            <h3 className="font-sequelBold text-xl xl:text-4xl lg:text-3xl md:text-2xl">
              The University Of Sunderland
            </h3>
            <p className="font-sequelLight text-grey text-base xl:text-2xl lg:text-xl">
              2020 - 2023
            </p>
          </div>
          <h4 className="font-sequelLight mt-10 text-grey text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:mt-0">
            BSc (Hons) Computer Science
          </h4>
        </div>
      </motion.div>
    </>
  );
};
