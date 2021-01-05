import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../pageAnimation";

const ContactUsPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Contact
    </motion.div>
  );
};

export default ContactUsPage;
