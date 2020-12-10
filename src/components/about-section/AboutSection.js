import React from "react";
import home1 from "../../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Lorem ipsum dolor sit.</h2>
          </div>
          <div className="hide">
            <h2>
              {" "}
              Lorem <span>ipsum</span> dolor
            </h2>
          </div>
          <div className="hide">
            <h2>Lorem</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perspiciatis aspernatur harum quas consequatur.
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
