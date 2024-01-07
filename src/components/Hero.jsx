/* eslint-disable no-unused-vars */
import React from "react";
import ProfileImg from "../assets/anil-profile-img2.png";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="w-full ">
      <div className="mt-8 mb-6 py-10 lg:max-w-5xl h-max mx-auto px-4 flex flex-col gap-11 lg:flex lg:flex-row lg:gap-0 items-center">
        <div className="w-full text-center lg:text-left flex-1">
          <p className="text-lg sm:text-2xl lg:text-3xl text-gray-500 dark:text-gray-200">
            Hello&#44; My name is
          </p>
          <br />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-cyan-900 dark:text-cyan-600">Anil Kumar</h1>
          <br />
          <p className="text-xl sm:text-3xl lg:text-4xl font-medium text-cyan-500 mb-9 dark:text-cyan-200">
            I <TypeAnimation
            sequence={[
              "'m a Frontend Developer.",
              2000,
              "'m a ReactJS Developer.",
              2000,
              " Build Websites.",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          </p>
          
          <ul className="flex gap-9 justify-center lg:justify-normal">
            <li>
              <a
                href="https://www.linkedin.com/in/anil-kumar-66001"
                target="_blank"
                rel="noreferrer"
                className="text-4xl inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125 dark:text-white"
              > 
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anilk749"
                target="_blank"
                rel="noreferrer"
                className="text-4xl inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125 dark:text-white"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:anilk66001@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-4xl inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-2 hover:scale-125 dark:text-white"
              >
                <MdMail />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src={ProfileImg}
            alt="profile image"
            className="w-5/6 h-5/6 mx-auto rounded-blob-shape1 border bg-gray-300 ring-1 ring-cyan-400 ring-offset-2 shadow-lg shadow-slate-500 duration-1000 hover:rounded-blob-shape2 hover:skew-x-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
