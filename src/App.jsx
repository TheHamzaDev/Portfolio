import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./components/Contact";
import { Showcase } from "./pages/Showcase";

import { Routes, Route, useLocation } from "react-router-dom";
import { PageLoader } from "./components/PageLoader";

function App() {
  const location = useLocation();

  return (
    <>
      <PageLoader />
      <main>
        <Navbar />
        <div className="px-4 pb-12 mx-auto max-w-7xl leading-8 text-black">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Portfolio />} />
            <Route path="/project/:id" element={<Showcase />} />
          </Routes>
          <motion.div
            initial={{ y: "80px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-grey mt-48 lg:mt-96"
          >
            <h3 className="font-sequelLight text-xl">Contact</h3>
            <p className="text-2xl">↓</p>
          </motion.div>
          <motion.section
            initial={{ y: "80px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center justify-center"
          >
            <Contact />
          </motion.section>
          <footer className="mt-48 lg:mt-96 flex item-center justify-center text-base xl:text-lg lg:text-md font-sequelLight text-grey">
            © 2023 — Hamza Khan.
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
