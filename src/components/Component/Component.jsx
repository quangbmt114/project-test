/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomInput } from "../AtomInput";
import { Heading2 } from "../Heading2";
import "./style.css";

export const Component = ({
  className,
  arrowForward = "https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/arrow-forward-2.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <Heading2
        className="heading-instance"
        headingClassName="heading-2-instance"
        text="Connect With Your Next Great Hire Today!"
      />
      <div className="company">Company</div>
      <div className="input-field">
        <AtomInput
          className="atom-input-instance"
          lines="single"
          text="Placeholder"
          textClassName="design-component-instance-node"
          type="placeholder"
        />
      </div>
      <div className="your-name">Your Name</div>
      <div className="atom-input-wrapper">
        <AtomInput
          className="atom-input-instance"
          lines="single"
          text="Placeholder"
          textClassName="design-component-instance-node"
          type="placeholder"
        />
      </div>
      <div className="phone-number">Phone Number</div>
      <div className="atom-input-instance-wrapper">
        <AtomInput
          className="atom-input-instance"
          lines="single"
          text="Placeholder"
          textClassName="design-component-instance-node"
          type="placeholder"
        />
      </div>
      <div className="email">Email</div>
      <div className="input-field-2">
        <AtomInput
          className="atom-input-instance"
          lines="single"
          text="Placeholder"
          textClassName="design-component-instance-node"
          type="placeholder"
        />
      </div>
      <div className="project-detail">Project Detail</div>
      <div className="input-field-3">
        <AtomInput
          className="atom-input-2"
          lines="single"
          text="Placeholder"
          textClassName="design-component-instance-node"
          type="placeholder"
        />
      </div>
      <p className="by-sending-this-form">
        <span className="span">By sending this form I confirm that I have read and accept the</span>
        <span className="text-wrapper-2"> Privacy Policy</span>
      </p>
      <img
        className="check-box"
        alt="Check box"
        src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/check-box-1.svg"
      />
      <div className="group">
        <div className="overlap-group">
          <div className="GET-CONSULTATION">GET CONSULTATION</div>
          <img className="arrow-forward" alt="Arrow forward" src={arrowForward} />
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  arrowForward: PropTypes.string,
};
