import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectsData } from "../projectsData";
import { motion } from "framer-motion";
import { pageAnimation } from "../pageAnimation";

const ProjectDetail = () => {
  const history = useHistory();
  // take out the URL from useHistory
  const currentUrl = history.location.pathname;
  const [projects] = useState(ProjectsData);
  const [project, setProject] = useState(null);
  // run as soon as component mounts
  useEffect(() => {
    const currentProject = projects.find(
      (stateProject) => stateProject.url === currentUrl
    );
    setProject(currentProject);
  }, [projects, currentUrl]);
  return (
    <>
      {/* make sure project is available & only when available render out content */}
      {project && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h1>{project.title}</h1>
            <img src={project.mainImg} alt="img" />
          </Headline>
          <Awards>
            {project.awards.map((award, i) => (
              <Award
                title={award.title}
                description={award.description}
                key={i}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="img" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default ProjectDetail;
