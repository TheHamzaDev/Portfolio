import React from "react";
import { SKILLS } from "./Skills";
import { Technologies } from "./Technologies";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-14 max-w-4xl leading-0 text-xl xl:text-4xl lg:text-3xl md:text-2xl">
        <motion.p
          initial={{ y: "80px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          I am a recent graduate of the University Of Sunderland with a passion
          for front-end web development. Proficient in{" "}
          <span className="font-sequelBold">
            React.JS, Tailwind CSS, and Framer Motion
          </span>
          , I am dedicated to creating user-friendly and visually appealing
          websites.
        </motion.p>
        <motion.p
          initial={{ y: "80px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          While learning popular technologies such as{" "}
          <span className="font-sequelBold">TypeScript</span>, I also keep up to
          date with new and popular UI/UX trends to create more enjoyable
          projects. If you would like to, contact me by{" "}
          <motion.a
            whileHover={{ opacity: 0.5 }}
            href="mailto:work.hamzakhan@gmail.com"
          >
            <span className="font-sequelBold underline">email</span>
          </motion.a>{" "}
          or send a message through{" "}
          <motion.a
            whileHover={{ opacity: 0.5 }}
            href="https://www.linkedin.com/in/hamzakhandev/"
            alt="View LinkedIn Page"
            target="_blank"
          >
            <span className="font-sequelBold underline">LinkedIn.</span>
          </motion.a>
        </motion.p>
      </div>
      <motion.section
        initial={{ y: "80px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full grid grid-cols-2 gap-y-36 items-center mt-48 lg:mt-64 md:grid-cols-3 lg:grid-cols-4"
      >
        {SKILLS.length > 0 &&
          SKILLS.map((skill) => <Technologies key={skill.id} {...skill} />)}
      </motion.section>
    </>
  );
};
