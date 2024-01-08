/* eslint-disable no-unused-vars */
import React from "react";
import ProfileImg from "../assets/anil-profile-img2.png";
import Resume from "../assets/anil-resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className="w-full ">
      <div className="mt-8 mb-6 py-10 lg:max-w-5xl h-max mx-auto px-4 flex flex-col gap-11 lg:flex lg:flex-row lg:gap-0 items-center">
        <div className="w-full text-center lg:text-left flex-1">
          <p className="text-lg sm:text-2xl lg:text-3xl text-gray-500 dark:text-gray-200">
            Hello&#44; My name is
          </p>
          <br />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-cyan-900 dark:text-cyan-600">
            Anil Kumar
          </h1>
          <br />
          <p className="text-xl sm:text-3xl lg:text-4xl font-medium text-cyan-500 mb-9 dark:text-cyan-100">
            I{" "}
            <TypeAnimation
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
                className="text-4xl inline-block transition-all duration-500 ease-in-out hover:text-cyan-600 hover:scale-125 dark:text-white"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anilk749"
                target="_blank"
                rel="noreferrer"
                className="text-4xl inline-block transition-all duration-500 ease-in-out hover:text-cyan-600 hover:scale-125 dark:text-white"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:anilk66001@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-4xl inline-block transition-all duration-500 ease-in-out hover:text-cyan-600 hover:scale-125 dark:text-white"
              >
                <MdMail />
              </a>
            </li>
          </ul>
          <a
            href={Resume}
            className="inline-block text-base md:text-xl font-medium mt-8 text-white bg-cyan-600 px-5 py-2 md:px-7 md:py-3 rounded-md duration-500 ease-in-out hover:bg-cyan-900"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="flex-1">
          <img
            src={ProfileImg}
            alt="profile image"
            className="w-5/6 h-5/6 mx-auto rounded-blob-shape1 border bg-gray-300 ring-1 ring-cyan-400 ring-offset-2 shadow-lg shadow-slate-500 duration-1000 ease-in-out hover:rounded-blob-shape2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
