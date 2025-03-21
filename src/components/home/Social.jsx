import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/harshithareddy23/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="mailto:harshithachen23@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-envelope"></i>
      </a>

      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
