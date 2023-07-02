/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cancel } from "../../icons/Cancel";
import "./style.css";

export const AtomInput = ({ lines, type, className, textClassName, text = "Placeholder text" }) => {
  return (
    <div className={`atom-input ${type} ${lines} ${className}`}>
      {["input", "placeholder"].includes(type) && (
        <div className={`text ${textClassName}`}>
          {type === "input" && <>Input text</>}

          {type === "placeholder" && <>{text}</>}
        </div>
      )}

      {["chip", "placeholder-carrot"].includes(type) && (
        <>
          <div className="caret">
            {(lines === "multiple" || type === "chip") && (
              <div className="line">
                {type === "chip" && (
                  <>
                    <div className="text-2">Chip text</div>
                    <Cancel className="cancel-1" />
                  </>
                )}
              </div>
            )}
          </div>
          <div className="text-3">
            {type === "placeholder-carrot" && <>{text}</>}

            {type === "chip" && (
              <div className="base">
                <div className="text-2">Chip text</div>
                <Cancel className="cancel-1" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

AtomInput.propTypes = {
  lines: PropTypes.oneOf(["multiple", "single"]),
  type: PropTypes.oneOf(["chip", "placeholder-carrot", "placeholder", "input"]),
  text: PropTypes.string,
};
