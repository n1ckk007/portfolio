import React, { useState } from "react";

const Toggle = ({ children }) => {
  // when u wrap u have access to the contents via children
  const [toggle, setToggle] = useState(true);
  //   set toggle to reverse of toggle
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};

export default Toggle;
