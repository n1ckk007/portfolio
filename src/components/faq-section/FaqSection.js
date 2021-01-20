import React from "react";
import { FaqContainer, Question, Answer } from "./FaqSectionStyles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <FaqContainer>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <Toggle>
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
      </Toggle>
      <Toggle>
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
      </Toggle>
      <Toggle>
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
      </Toggle>
      <Toggle>
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
      </Toggle>
    </FaqContainer>
  );
};

export default FaqSection;
