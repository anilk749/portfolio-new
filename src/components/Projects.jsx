import { motion } from "framer-motion";
import Card from "./ui/Card";
import NetflixImg from "../assets/Netflix-Clone.png";
import TindogImg from "../assets/tin-dog.png";
import GradingSoftwareImg from "../assets/grading-software.png";

const Projects = () => {
    const projects = [
        {
            img: NetflixImg,
            url: "https://react-netflex-clone.netlify.app/",
        },
        {
            img: TindogImg,
            url: "https://tindog-react-app.netlify.app",
        },
        {
            img: GradingSoftwareImg,
            url: "https://grading-software.netlify.app",
        },
    ];
    return (
        <section
            id="projects"
            className="w-full shadow-inner bg-neutral-300 dark:bg-neutral-800"
        >
            <div className="max-w-7xl md:w-[90%] mx-auto px-4 py-14 md:py-[100px]">
                <motion.h2
                    className="text-3xl text-center capitalize text-cyan-900 font-semibold mb-10 md:text-5xl dark:text-cyan-600"
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-5">
                    {projects.map(({ img, url }, index) => (
                        <motion.a
                            key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={(index) => ({
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: index * 0.3,
                                    duration: 0.8,
                                },
                            })}
                            viewport={{ once: true }}
                        >
                            <Card className="h-44 md:h-60 overflow-hidden rounded-xl">
                                <img
                                    src={img}
                                    alt=""
                                    className="h-full w-full duration-1000 hover:scale-110"
                                />
                            </Card>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
