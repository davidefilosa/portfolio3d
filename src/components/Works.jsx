import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { PlanetCanvas } from "./canvas";

const Works = () => {
  return (
    <>
      <section className="z-0 h-screen w-full relative" id="work">
        <PlanetCanvas />
        <div className="absolute top-0 right-0 sm:mr-[100px] mt-[125px] mr-auto p-10">
          <motion.div variants={textVariant(0.5)}>
            <p className={styles.sectionSubText}>About me</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("up", "", 0.2, 0.5)}
            className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
          >
            Experienced Data Analyst proficient in data anlysis, web
            development, and Python automation. Skilled in extracting insight
            from data, creating visually appealing websites and web
            applications, and automating tasks using Python.
          </motion.p>
        </div>
        <div className="absolute xs:bottom-10 bottom-1 w-full flex justify-center items-center">
          <a href="#projects">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Works;
