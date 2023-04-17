import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <section>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center items-center sm:gap-10 gap-5 mt-[50px]">
        {technologies.map((tech, index) => {
          return (
            <motion.div
              variants={fadeIn("up", "spring", 0.25 * index, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className={`${
                index % 2 === 0 ? "orange-gradient" : "blue-pink-gradient"
              }  p-[1px] rounded-[30px] shadow-card w-[150px]  h-[150px] flex justify-center items-center`}
              key={index}
            >
              <div className="bg-primary w-[100%] h-[100%] flex justify-center items-center">
                <img src={tech.icon} className="w-16 h-16 object-contain" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
