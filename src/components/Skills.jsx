import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import Card from "./Card";

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
    <section id="skills" className="max-w-5xl mx-auto my-10">
      <div className="p-4">
        <h2 className="text-3xl text-cyan-900 font-semibold text-center mb-10 md:text-5xl dark:text-cyan-600">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon }) => (
            <Card key={title} className="flex justify-center items-center p-3 duration-500 hover:bg-gray-300 hover:scale-105 hover:translate-y-2 hover:ring-cyan-300 hover:ring-2 hover:ring-offset-2">
              {icon}
              <span className="ml-3 text-lg md:text-xl text-gray-500 font-medium">
                {title}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
