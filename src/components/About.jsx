/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useScroll } from "framer-motion";
import AboutImg from "../assets/about-me-img.jpg";
const About = () => {
    const { scrollYProgress } = useScroll();
    return (
        <section
            id="about"
            className="w-full shadow-inner bg-neutral-300 dark:bg-neutral-800"
        >
            <div className="max-w-7xl md:w-[90%] mx-auto px-4 py-14 md:py-[100px]">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-3xl text-center mb-10 md:mb-12 md:text-5xl font-semibold text-cyan-900 dark:text-cyan-600"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={AboutImg}
                            alt="A laptop image"
                            className="w-64 h-64 md:w-80 mx-auto md:h-80 object-cover self-center duration-300 rounded-tl-3xl rounded-br-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 text-base sm:text-lg text-gray-700 text-pretty self-center overflow-hidden dark:text-gray-100"
                    >
                        I&apos;m a Frontend Developer based in Chandigarh who is
                        passionate about delivering value to businesses through
                        technology. I love the challenge of finding creative
                        solutions to problems, and I enjoy collaborating with
                        teams to achieve great results. I am dedicated to
                        keeping up-to-date with the latest technologies and
                        trends. I pay great attention to detail in the design
                        and development of projects. My ultimate goal is to
                        create software that is both user-friendly and impactful
                        in achieving the desired objectives.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
