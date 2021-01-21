import { motion } from "framer-motion";
import React, { useState } from "react";
import { Question } from "./FaqSectionStyles";

const Toggle = ({ children, title }) => {
  // when u wrap u have access to the contents via children
  const [toggle, setToggle] = useState(true);
  //   set toggle to reverse of toggle
  return (
    // layout to let framer motion know that it's going to change
    <Question layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </Question>
  );
};

export default Toggle;
