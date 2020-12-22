import React from "react";
import { FaqContainer, Question, Answer } from "./FaqSectionStyles";

const FaqSection = () => {
  return (
    <FaqContainer>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <Question>
        <h4>How do i start?</h4>
        <Answer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
          </p>
        </Answer>
        <div className="faq-line"></div>
      </Question>
      <Question>
        <h4>How do i start?</h4>
        <Answer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
          </p>
        </Answer>
        <div className="faq-line"></div>
      </Question>
      <Question>
        <h4>How do i start?</h4>
        <Answer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
          </p>
        </Answer>
        <div className="faq-line"></div>
      </Question>
      <Question>
        <h4>How do i start?</h4>
        <Answer>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
          </p>
        </Answer>
        <div className="faq-line"></div>
      </Question>
    </FaqContainer>
  );
};

export default FaqSection;
