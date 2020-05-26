import React from "react";
import "./MainFooter.scss";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container flex">
        <div className="footer-title">Shortly</div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li className="link-title">Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="/#" className="icon facebook-icon">
            Facebook
          </a>
          <a href="/#" className="icon twitter-icon">
            Twitter
          </a>
          <a href="/#" className="icon pinterest-icon">
            Pinterest
          </a>
          <a href="/#" className="icon instagram-icon">
            Instagram
          </a>
        </div>
      </div>
      <div className="attribution">
        Challenge by Frontend Mentor. &nbsp; Coded by{" "}
        <a href="https://www.github.com/maticapuano" rel="noopener noreferrer">
          Matias Capuano
        </a>
        .
      </div>
    </footer>
  );
};

export default MainFooter;
