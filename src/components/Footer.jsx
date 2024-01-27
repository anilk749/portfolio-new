/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Logo from "../assets/anil-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-300 shadow-inner dark:text-white dark:bg-slate-800 dark:shadow-slate-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-7xl md:w-[90%] mx-auto px-4 py-10 md:pt-16 flex flex-col items-center gap-9"
      >
        <div className="">
          <img
            src={Logo}
            alt="company logo"
            width={200}
            className="w-56 sm:w-64 dark:brightness-200"
          />
        </div>
        <ul className="flex justify-center gap-7 list-none">
          <li>
            <a
              className="text-3xl inline-block transition-all duration-500 ease-in-out hover:text-cyan-600 hover:scale-125"
              href="https://www.linkedin.com/in/anil-kumar-66001"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              className="text-3xl  inline-block transition-all duration-500 hover:text-cyan-600 hover:scale-125"
              href="https://github.com/anilk749"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="mailto:anilk66001@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-3xl inline-block transition-all duration-500 hover:text-cyan-600 hover:scale-125"
            >
              <MdMail />
            </a>
          </li>
        </ul>
        <p className="text-sm md:text-lg font-normal">
          Created by <span className="text-cyan-500">Anil</span>
          &nbsp;&#8739;&nbsp;&copy;2023 All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
