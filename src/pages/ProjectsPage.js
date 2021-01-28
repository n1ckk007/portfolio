import React from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  frameSlider,
  frameSliderContainer,
} from "../animations";
import { useScroll } from "../components/useScroll";

const ProjectsPage = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={frameSliderContainer}>
        <Frame1 variants={frameSlider}></Frame1>
        <Frame2 variants={frameSlider}></Frame2>
        <Frame3 variants={frameSlider}></Frame3>
        <Frame4 variants={frameSlider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Proj 1</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/projects/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Proj 2</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/projects/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Proj 3</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/projects/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Project>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default ProjectsPage;
