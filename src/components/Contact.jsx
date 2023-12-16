import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { Validation } from "../utils/Validation";

export const Contact = () => {
  const form = useRef();
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleInput = (e) => {
    const newObj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newObj);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    console.log(values.user_name);
    console.log(values.user_email);
    console.log(values.message);

    if (
      values.user_name !== "" &&
      values.user_email !== "" &&
      values.message !== ""
    ) {
      emailjs
        .sendForm(
          "service_d49jbk6",
          "template_8dxhnn3",
          form.current,
          "--HkawgKiQPt8KIwl"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setSent(true);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleValidation}
        className="flex flex-col items-left justify-center w-full font-sequelLight"
      >
        <label className="font-sequelBold">Name</label>
        <input
          type="text"
          name="user_name"
          className="px-4 py-2"
          onChange={handleInput}
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
        <label className="mt-8 font-sequelBold">Email</label>
        <input
          type="email"
          name="user_email"
          className="px-5 py-2"
          onChange={handleInput}
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <label className="mt-8 font-sequelBold">Message</label>
        <textarea name="message" className="px-5 py-2" onChange={handleInput} />
        {errors.message && <p className="text-red-600">{errors.message}</p>}
        {sent && <p className="text-green-700">Message successfully sent!</p>}
        <motion.input
          whileHover={{ opacity: 0.7 }}
          type="submit"
          value="Send Message"
          className="mt-20 px-20 py-3 bg-black text-[#f4f1ea] rounded-full cursor-pointer"
        />
      </form>
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
