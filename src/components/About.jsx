import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.9)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Software Engineer with a keen interest in <br className='sm:block hidden' />
            full-stack development, distributed computing and AI.
          </p>
        </div>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        {/* <br />
        <h2 className={styles.sectionSubText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
       As a recent graduate in Computer Science from Singapore Management University (SMU), specializing in AI and Cybersecurity, I am deeply committed to leveraging technology to solve complex problems and create innovative solutions. 
       Passionate about pushing the boundaries of what's possible, I thrive on challenges that demand creative thinking and technical expertise. 
       With a strong academic background and hands-on experience in software development, data analytics, and infrastructure engineering, 
       I am dedicated to making a meaningful impact through my work.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
