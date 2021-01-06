import React from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ProjectsPage = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Project>
        <h2>Proj 1</h2>
        <div className="line"></div>
        <Link to="/projects/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Project>
      <Project>
        <h2>Proj 2</h2>
        <div className="line"></div>
        <Link to="/projects/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Project>
      <Project>
        <h2>Proj 3</h2>
        <div className="line"></div>
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
`;

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default ProjectsPage;
