import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../components/Projects";
import { ProjectCard } from "../components/ProjectCard";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Experience } from "../components/Experience";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center text-grey mt-40 lg:mt-80">
        <h3 className="font-sequelLight text-xl">Selected Projects</h3>
        <p className="text-2xl">↓</p>
      </div>
      <section className="flex flex-col items-center justify-center mt-20 gap-24 lg:gap-48">
        {PROJECTS.length > 0 &&
          PROJECTS.map((projects) => (
            <ProjectCard key={projects.id} {...projects} />
          ))}
      </section>
      <motion.div
        initial={{ y: "80px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-grey mt-48 lg:mt-80"
      >
        <h3 className="font-sequelLight text-xl">About Me</h3>
        <p className="text-2xl">↓</p>
      </motion.div>
      <section className="flex flex-col items-center justify-center mt-20 font-sequelLight text-4xl text-center leading-none">
        <About />
      </section>
      <section className="w-full mt-48 lg:mt-80">
        <Experience />
      </section>
    </>
  );
};
