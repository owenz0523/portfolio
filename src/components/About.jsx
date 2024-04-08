import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Typewriter from "typewriter-effect";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            onCompositionStart={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
            justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20p] font-bold text-center">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I am a(n){" "}
        <span className="text-[#99EDC3] inline align-middle">
        <Typewriter
          options={{
            strings: ["Full Stack Developer", "App Developer", "AI Developer", "Programmer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            color: "#915EFF",
          }}
        />
        </span>
      </motion.p>
              <ul className="list-none hidden sm:flex flex-row gap-10 my-10 justify-center items-center">
                <li
                  className="flex items-center border border-white text-secondary
                justify-center rounded-full cursor-pointer px-5 py-2.5 text-base font-medium 
                transition duration-600 ease-in-out no-underline hover:bg-[#915eff] hover:text-white"
                >
                  <a
                    href="https://drive.google.com/file/d/1OPOPjkzG4axPmELqslo8r32DKGXOvbf9/view?usp=sharing"
                    target="_blank"
                    className="text-white text-[18px] font-medium cursor-pointer"
                  >
                    Resume
                  </a>
                </li>
                <li
                  className="flex items-center border border-white text-secondary
                justify-center rounded-full cursor-pointer px-5 py-2.5 text-base font-medium 
                transition duration-600 ease-in-out no-underline hover:bg-[#915eff] hover:text-white"
                >
                  <a
                    href="https://github.com/owenz0523"
                    target="_blank"
                    className="text-white text-[18px] font-medium cursor-pointer"
                  >
                    Github
                  </a>
                </li>
                <li
                  className="flex items-center border border-white text-secondary
                justify-center rounded-full cursor-pointer px-5 py-2.5 text-base font-medium 
                transition duration-600 ease-in-out no-underline hover:bg-[#915eff] hover:text-white"
                >
                  <a
                    href="https://www.linkedin.com/in/owenzhang052/"
                    target="_blank"
                    className="text-white text-[18px] font-medium cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service}/>
                ))}
              </div>
    </>
  );
};

export default SectionWrapper(About, "about")