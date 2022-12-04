import React from "react";
import "./Footer.scss";
import styled from "styled-components";

const SocialLinks = styled.a`
  text-decoration: none;
  color: black;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:visited {
    color: black;
  }

  &.underline-effect:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    display: inline-block;
    height: 1.3em;
    width: 100%;
    border-bottom: 1.5px solid;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  &.underline-effect:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <span>Jonty Sachdeva</span>
          <br />
          <span>Frontend Developer</span>
        </div>
        <div className="social-links">
          <SocialLinks
            className="underline-effect"
            href="https://www.linkedin.com/in/jonty-sachdeva-20001b149/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </SocialLinks>
          ,&nbsp;
          <SocialLinks
            className="underline-effect"
            href="https://www.instagram.com/jontysachdevaa/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </SocialLinks>
          ,&nbsp;
          <SocialLinks
            className="underline-effect"
            href="https://github.com/jontysachdeva10"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </SocialLinks>
        </div>
        <div style={{ width: "15rem" }}>
          <span>Built by Jonty Sachdeva</span>
          <br />
          <span>Design inspired from various portfolios</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
