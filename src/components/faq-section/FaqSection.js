// detects if layout changes
import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import { scrollReveal } from "../../animations";
import { useScroll } from "../useScroll";
import { FaqContainer, Answer } from "./FaqSectionStyles";
import Toggle from "./Toggle";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FaqContainer
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="How do i start">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="How do i start">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="How do i start">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id.
            </p>
          </Answer>
        </Toggle>
      </AnimateSharedLayout>
    </FaqContainer>
  );
};

export default FaqSection;
