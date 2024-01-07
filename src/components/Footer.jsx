/* eslint-disable no-unused-vars */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import Logo from "../assets/anil-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-400 text-white shadow-inner dark:bg-neutral-800 dark:shadow-gray-600">
      <div className="max-w-5xl mx-auto px-4 py-12 text-center flex flex-col items-center gap-7">
        <img
          src={Logo}
          alt="company logo"
          width={200}
          className="dark:brightness-200"
        />
        <ul className="flex justify-center">
          <li className="mr-7">
            <a
              className="text-3xl inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125"
              href="https://www.linkedin.com/in/anil-kumar-66001"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              className="text-3xl mr-7 inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125"
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
              className="text-3xl mr-7 inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125"
            >
              <MdMail />
            </a>
          </li>
        </ul>
        <p className="text-sm md:text-base">
          Copyright &copy;2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
