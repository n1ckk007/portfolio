import React from "react";
import AboutSection from "../components/about-section/AboutSection";
import FaqSection from "../components/faq-section/FaqSection";
import ServicesSection from "../components/services-section/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const AboutUsPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUsPage;
