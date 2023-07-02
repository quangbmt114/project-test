/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DivWrapper = ({ className, headingClassName, text = "Heading 3" }) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className={`heading-4 ${headingClassName}`}>{text}</div>
    </div>
  );
};

DivWrapper.propTypes = {
  text: PropTypes.string,
};
