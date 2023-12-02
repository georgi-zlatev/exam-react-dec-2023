// Footer.js

import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">
        Georgi Zlatev - All rights reserved &copy; 2023
      </p>
      <p>
        <a href="https://github.com/georgi-zlatev" target="_blank" rel="noopener noreferrer" className="github-icon">
          <i className="fab fa-github"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
