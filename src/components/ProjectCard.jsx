import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProjectCard = (props) => {
  return (
    <motion.div
      initial={{ y: "80px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center"
    >
      <div>
        <Link
          to={`/project/${props.title}`}
          state={{
            img: props.img,
            img2: props.img2,
            img3: props.img3,
            img4: props.img4,
            icon: props.icon,
            title: props.title,
            desc: props.desc,
            site: props.site,
            git: props.git,
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <motion.div whileHover={{ rotateZ: 3 }}>
            <img src={props.img} loading="lazy" alt="Project Image" />
            <div className="flex items-center justify-between text-xl py-2">
              <h3 className="font-sequelBold">{props.title}</h3>
              <p className="font-sequelLight text-grey">{props.type}</p>
            </div>
          </motion.div>
        </Link>
        <div className="flex items-center justify-start gap-2 mt-8 text-xl text-grey font-sequelLight">
          <motion.a
            whileHover={{ rotateZ: -12 }}
            href={props.site}
            alt="View Code"
            className="px-8 py-2 bg-black  text-light rounded-full"
            target="_blank"
          >
            Live{" "}
          </motion.a>
          <motion.a
            whileHover={{ rotateZ: 12 }}
            href={props.git}
            alt="View Live Website"
            className="px-8 py-2 border-[1px] border-solid border-black text-black rounded-full"
            target="_blank"
          >
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
