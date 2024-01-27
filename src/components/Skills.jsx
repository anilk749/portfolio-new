import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiTailwindcss,
    SiGit,
    SiNodedotjs,
    SiNpm,
    SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import Card from "./ui/Card";

const Skills = () => {
    const skills = [
        {
            title: "HTML5",
            icon: <SiHtml5 className="text-red-600 text-3xl" />,
        },
        {
            title: "CSS3",
            icon: <SiCss3 className="text-sky-700 text-3xl" />,
        },
        {
            title: "Bootstrap",
            icon: <SiBootstrap className="text-purple-800 text-3xl" />,
        },
        {
            title: "Tailwind",
            icon: <SiTailwindcss className="text-cyan-700 text-3xl" />,
        },
        {
            title: "Javascript",
            icon: <SiJavascript className="text-yellow-400 text-3xl" />,
        },
        {
            title: "React",
            icon: <SiReact className="text-cyan-400 text-3xl" />,
        },
        {
            title: "Git & GitHub",
            icon: <SiGit className="text-red-600 text-3xl" />,
        },
        {
            title: "NodeJS",
            icon: <SiNodedotjs className="text-lime-600 text-3xl" />,
        },
        {
            title: "NPM",
            icon: <SiNpm className="text-red-500 text-3xl" />,
        },
    ];
    return (
        <section id="skills" className="w-full shadow-inner">
            <div className="max-w-7xl md:w-[90%] mx-auto px-4 py-14 md:py-[100px]">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-3xl text-cyan-900 font-semibold text-center mb-8 md:text-5xl dark:text-cyan-600"
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map(({ title, icon, index }) => (
                        <motion.div
                            key={title}
                            custom={index}
                            initial={{ opacity: 0, y: 40 }}
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
                            <Card className="flex justify-center items-center p-6 md:p-8 rounded-xl duration-500 ease-in-out shadow-neutral-500/40 hover:shadow-xl hover:-translate-y-1">
                                {icon}
                                <span className="ml-3 text-lg md:text-xl text-gray-600 font-medium">
                                    {title}
                                </span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
