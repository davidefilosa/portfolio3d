import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12  min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] text-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("up", "", 0.2, 0.5)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
      >
        Experienced Data Analyst proficient in data anlysis, web development,
        and Python automation. Skilled in extracting insight from data, creating
        visually appealing websites and web applications, and automating tasks
        using Python. Experise in data visualization, statistical analysis and
        working with diverse data sources. Proactive, detail-orientated, and
        able to work in a cross-functional teams. Strong communication skills
        and abillity to meeet tight deadlines. A valuable asset for oranizations
        seeking data-driven insights, web development expertise, and Python
        automation solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
