import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p style={{color:"white"}}>
        @ {new Date().getFullYear()} Adil Ehtesham
      </p>

      <div className="footer-links">
           <a href="https://linkedin.com/in/adil-ehtesham-3919a5309/" className="social-btn linkedin" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="https://github.com/Adil0910" className="social-btn github" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
      </div>
    </footer>
  );
};

export default Footer;
