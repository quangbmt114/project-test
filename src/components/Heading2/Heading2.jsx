/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Heading2 = ({ className, headingClassName, text = "Heading 2" }) => {
  return (
    <div className={`heading-2 ${className}`}>
      <div className={`heading-5 ${headingClassName}`}>{text}</div>
    </div>
  );
};

Heading2.propTypes = {
  text: PropTypes.string,
};
