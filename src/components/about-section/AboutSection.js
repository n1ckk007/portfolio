import React from "react";
import home1 from "../../img/home1.png";
import {
  AboutContainer,
  Description,
  Hide,
  ImageContainer,
} from "./AboutSectionStyles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Description>
        <motion.div className="title">
          <Hide>
            {/* we want to animate to opacity 1 */}
            <motion.h2>Lorem ipsum dolor sit.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              {" "}
              Lorem <span>ipsum</span> dolor
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>Lorem</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perspiciatis aspernatur harum quas consequatur.
        </p>
        <button>Contact Me</button>
      </Description>
      <ImageContainer>
        <img src={home1} alt="Guy with a camera" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default AboutSection;
