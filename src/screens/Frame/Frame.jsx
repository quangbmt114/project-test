import React from "react";
import { Component } from "../../components/Component";
import { DivWrapper } from "../../components/DivWrapper";
import { Heading } from "../../components/Heading";
import { Heading2 } from "../../components/Heading2";
import { HeadingWrapper } from "../../components/HeadingWrapper";
import { Paragraph } from "../../components/Paragraph";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <Paragraph className="paragraph-1" paragraphClassName="paragraph-instance" text="How to start" />
        <div className="overlap">
          <Paragraph className="paragraph-1-instance" paragraphClassName="paragraph-2" text="Services" />
          <img
            className="keyboard-arrow-down"
            alt="Keyboard arrow down"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/keyboard-arrow-down-1.svg"
          />
        </div>
        <Paragraph className="paragraph-3" paragraphClassName="paragraph-instance" text="Technologies" />
        <Paragraph className="paragraph-4" paragraphClassName="paragraph-instance" text="Careers" />
        <Paragraph className="paragraph-5" paragraphClassName="paragraph-6" text="Contact us" />
        <div className="overlap-2">
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/rectangle-26.png"
          />
          <div className="rectangle-2" />
          <Heading className="heading-1" headingClassName="heading-1-instance" text="Our Services" />
          <Paragraph
            className="paragraph-7"
            paragraphClassName="paragraph-8"
            text="We specialize in helping you build a team of expert developers."
          />
        </div>
        <div className="button-primary">
          <div className="overlap-group-2">
            <div className="text-wrapper-3">BUILD A TEAM</div>
            <img
              className="img"
              alt="Arrow forward"
              src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/arrow-forward-1.svg"
            />
          </div>
        </div>
        <img
          className="keyboard-arrow-down-2"
          alt="Keyboard arrow down"
          src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/keyboard-arrow-down-1.svg"
        />
        <img
          className="line-2"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/line-27.svg"
        />
        <img
          className="logo"
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/logo-1@2x.png"
        />
        <div className="component-2">
          <img
            className="logo-2"
            alt="Logo"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/logo-2-1@2x.png"
          />
          <Paragraph className="paragraph-9" paragraphClassName="paragraph-10" text="Hire Permanent Staff" />
          <Paragraph className="paragraph-11" paragraphClassName="paragraph-10" text="Staff Augmentation" />
          <Paragraph className="paragraph-12" paragraphClassName="paragraph-10" text="Software Outsourcing" />
          <Paragraph className="paragraph-13" paragraphClassName="paragraph-10" text="Build Remote Office" />
          <Paragraph className="paragraph-14" paragraphClassName="paragraph-10" text="About Us" />
          <Paragraph className="paragraph-15" paragraphClassName="paragraph-10" text="Success Stories" />
          <div className="overlap-3">
            <Paragraph className="paragraph-16" paragraphClassName="paragraph-10" text="Privacy Policy" />
            <Paragraph className="paragraph-17" paragraphClassName="paragraph-10" text="+94 713249222" />
          </div>
          <div className="overlap-4">
            <Paragraph
              className="paragraph-18"
              paragraphClassName="paragraph-10"
              text={
                <>
                  Courtney Lanka (Private) Limited
                  <br />
                  Level 35
                  <br />
                  World Trade Center
                  <br />
                  Colombo 01
                </>
              }
            />
            <div className="text-wrapper-4">Contact Us</div>
          </div>
          <Paragraph
            className="paragraph-19"
            paragraphClassName="paragraph-10"
            text="Expertly trained, battle-tested, elite software developers on demand"
          />
          <div className="overlap-5">
            <Paragraph className="paragraph-20" paragraphClassName="paragraph-10" text="hello@courtney.lk" />
            <div className="text-wrapper-4">Terms &amp; Conditions</div>
          </div>
          <Paragraph className="paragraph-21" paragraphClassName="paragraph-22" text="Follow us" />
          <Paragraph className="paragraph-23" paragraphClassName="paragraph-24" text="© 2022 courtney" />
          <HeadingWrapper className="heading-4-instance" text="Company" />
          <HeadingWrapper className="heading-6" text="Services" />
          <Paragraph className="paragraph-25" paragraphClassName="paragraph-10" text="You Asked" />
          <Paragraph className="paragraph-26" paragraphClassName="paragraph-10" text="We Proceed" />
          <Paragraph className="paragraph-27" paragraphClassName="paragraph-10" text="Negotiate" />
          <Paragraph className="paragraph-28" paragraphClassName="paragraph-10" text="You Get" />
          <HeadingWrapper className="heading-7" text="How to Start" />
          <img
            className="line-3"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/line-32-1.svg"
          />
          <img
            className="phone-enabled"
            alt="Phone enabled"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/phone-enabled.svg"
          />
          <img
            className="email-2"
            alt="Email"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/email.svg"
          />
          <img
            className="location-on"
            alt="Location on"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/location-on.svg"
          />
          <img
            className="linked-in"
            alt="Linked in"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/linkedin-1.svg"
          />
          <img
            className="facebook"
            alt="Facebook"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/facebook-1.svg"
          />
          <img
            className="instagram"
            alt="Instagram"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/instagram-1.svg"
          />
          <img
            className="twitter"
            alt="Twitter"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/twitter-1.svg"
          />
          <img
            className="you-tube"
            alt="You tube"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/youtube-1.svg"
          />
          <img
            className="line-4"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/line-32-1.svg"
          />
        </div>
        <Paragraph
          className="paragraph-29"
          paragraphClassName="design-component-instance-node-2"
          text="From full-time remote engineering teams to hourly contractors, work with remote devs as needed"
        />
        <div className="group-2">
          <Paragraph
            className="paragraph-30"
            paragraphClassName="paragraph-31"
            text="IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development."
          />
          <DivWrapper className="heading-3-instance" headingClassName="heading-8" text="Staff Augmentation" />
        </div>
        <div className="group-3">
          <Paragraph
            className="paragraph-32"
            paragraphClassName="paragraph-33"
            text="Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting."
          />
          <DivWrapper
            className="heading-9"
            headingClassName="design-component-instance-node-2"
            text="Software Outsourcing"
          />
        </div>
        <div className="group-4">
          <Paragraph
            className="paragraph-34"
            paragraphClassName="paragraph-35"
            text="Building an extended team with Courtney is just like opening your own remote development center, but without the hassle."
          />
          <DivWrapper
            className="heading-9"
            headingClassName="design-component-instance-node-2"
            text="Dedicated Teams"
          />
        </div>
        <div className="group-5">
          <Paragraph
            className="paragraph-36"
            paragraphClassName="paragraph-37"
            text="Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom."
          />
          <DivWrapper className="heading-10" headingClassName="heading-11" text="Remote Office" />
        </div>
        <Heading2 className="heading-12" headingClassName="heading-13" text="Hire Permanent and Remote Developers" />
        <div className="management-wrapper">
          <img
            className="management"
            alt="Management"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/management-1@2x.png"
          />
        </div>
        <div className="outsourcing-wrapper">
          <img
            className="outsourcing"
            alt="Outsourcing"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/outsourcing-1@2x.png"
          />
        </div>
        <div className="link-wrapper">
          <img
            className="link"
            alt="Link"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/link-1@2x.png"
          />
        </div>
        <div className="shield-wrapper">
          <img
            className="shield"
            alt="Shield"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/shield-1@2x.png"
          />
        </div>
        <div className="overlap-6">
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/rectangle-34.png"
          />
          <div className="rectangle-4" />
          <Component
            arrowForward="https://generation-sessions.s3.amazonaws.com/124d41cc3dbec882f9e212964dd01c08/img/arrow-forward.svg"
            className="component-instance"
          />
        </div>
      </div>
    </div>
  );
};
