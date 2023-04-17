import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { PlanetCanvas } from "./canvas";

const ProjectCard = ({ project, index }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 415 }}
      className="rounded-2xl sm:w-[360px] w-full mt-[2rem]"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="w-full orange-gradient pl-[2px] pb-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary p-5 rounded-[20px]">
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      {projects.map((project, index) => {
        return <ProjectCard key={index} index={index} project={project} />;
      })}
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
