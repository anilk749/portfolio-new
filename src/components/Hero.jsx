/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/anil-profile-img2.png";
import Resume from "../assets/anil-resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section id="home" className="w-full">
      <div className="py-14 md:py-20 lg:max-w-7xl md:w-[90%] mx-auto px-4 overflow-hidden">
        <div className="flex flex-col gap-11 lg:flex lg:flex-row lg:gap-0 items-center">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-start flex-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-200">
              Hello&#44; My name is
            </p>
            <br />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-cyan-900 dark:text-cyan-500">
              Anil Kumar
            </h1>
            <br />
            <p className="text-xl sm:text-3xl lg:text-4xl text-cyan-600 mb-9 dark:text-cyan-300">
              <span className="text-gray-600 dark:text-white">I&#39;m a</span>{" "}
              <TypeAnimation
                sequence={[
                  "Frontend Developer.",
                  2000,
                  "ReactJS Developer.",
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
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              href={Resume}
              className="inline-block text-base md:text-xl font-medium mt-8 text-white bg-gradient-to-r from-cyan-400 to-cyan-800 px-5 py-2 md:px-7 md:py-3 rounded-md "
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </motion.a>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 flex-1 p-4"
            initial={{ opacity: 0, translateX: 70 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <img
              src={ProfileImg}
              alt="profile image"
              width={400}
              height={400}
              className="overflow-hidden mx-auto rounded-blob-shape1 border bg-gray-300 ring-1 ring-cyan-400 ring-offset-2 shadow-lg shadow-slate-500 duration-1000 ease-in-out hover:rounded-blob-shape2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
