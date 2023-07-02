/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Paragraph = ({ className, paragraphClassName, text = "paragraph 1", hasParagraph = true }) => {
  return (
    <div className={`paragraph ${className}`}>
      {hasParagraph && <div className={`text-wrapper ${paragraphClassName}`}>{text}</div>}
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string,
  hasParagraph: PropTypes.bool,
};
