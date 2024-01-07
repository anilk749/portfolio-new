import Card from "./Card";
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
    <section id="projects" className="max-w-5xl mx-auto my-10">
      <div className="p-4">
        <h2 className="text-3xl text-center capitalize text-cyan-900 font-semibold mb-10 md:text-5xl dark:text-cyan-600">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-5">
          {projects.map(({ img, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noreferrer">
              <Card className="h-44 md:h-60 overflow-hidden rounded-xl duration-1000 hover:scale-105">
                <img
                  src={img}
                  alt=""
                  className="h-full w-full"
                />
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
