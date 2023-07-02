/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HeadingWrapper = ({ className, text = "Heading 4" }) => {
  return (
    <div className={`heading-wrapper ${className}`}>
      <div className="heading-3">{text}</div>
    </div>
  );
};

HeadingWrapper.propTypes = {
  text: PropTypes.string,
};
