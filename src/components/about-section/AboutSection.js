import React from "react";
import home1 from "../../img/home1.png";
import {
  AboutContainer,
  Description,
  Hide,
  ImageContainer,
} from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Description>
        <div className="title">
          <Hide>
            <h2>Lorem ipsum dolor sit.</h2>
          </Hide>
          <Hide>
            <h2>
              {" "}
              Lorem <span>ipsum</span> dolor
            </h2>
          </Hide>
          <Hide>
            <h2>Lorem</h2>
          </Hide>
        </div>
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
