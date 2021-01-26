import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animations";
import styled from "styled-components";

const ContactUsPage = () => {
  return (
    <ContactContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TitleContainer>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </TitleContainer>
      <div>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>Send a message</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>Send a message</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>Send a message</h2>
          </SocialLinks>
        </Hide>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const TitleContainer = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUsPage;
