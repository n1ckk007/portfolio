import React from "react";
import home1 from "../../img/home1.png";
import {
  AboutContainer,
  Description,
  Hide,
  ImageContainer,
} from "./AboutSectionStyles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../animations";
import Wave from "../wave/Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Lorem ipsum dolor sit.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              Lorem <span>ipsum</span> dolor
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Lorem</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perspiciatis aspernatur harum quas consequatur.
        </motion.p>
        <motion.button variants={fade}>
          <Link to="/contact">Contact Me</Link>
        </motion.button>
      </Description>
      <ImageContainer>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </ImageContainer>
      <Wave />
    </AboutContainer>
  );
};

export default AboutSection;
