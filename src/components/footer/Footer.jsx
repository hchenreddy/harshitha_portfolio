import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"><strong>Harshitha Chenreddy</strong></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        {/* Social Links - Only LinkedIn and GitHub */}
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/harshithareddy23/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/harshithachen23"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          © 2025 Harshitha Chenreddy. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
