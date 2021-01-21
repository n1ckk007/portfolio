import { motion } from "framer-motion";
import styled from "styled-components";

export const FaqContainer = styled.div`
  min-height: 90vh;
  padding: 5rem 10rem;
  color: white;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

export const Question = styled(motion.div)`
  padding: 3rem 0rem;
  cursor: pointer;
`;

export const Answer = styled.div`
  padding: 2rem 0rem;

  p {
    padding: 1rem 0rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
