import React from 'react';
import { Link } from 'react-router-dom'; // Itha puthusa add pannirukom
import './Footer.css';

// 3 முறை ../ போட்டு முயற்சி செய்யவும்:
import fbIcon from "../../../assets/facebook.png";
import pinIcon from "../../../assets/pinterest.png";
import inIcon from "../../../assets/linkedin.png";
import igIcon from "../../../assets/instagram.png";

import footerDesign from "../../../assets/footer-bg.png";
import footerDesign1 from "../../../assets/footer-bg1.png";

const Footer = () => {
  return (
    <footer className="footer-section">
    <img src={footerDesign} alt="Design" className="footer-bg-design" />
     <img src={footerDesign1} alt="Design" className="footer-bg1-design" />
      <div className="footer-wrapper">
        <div className="footer-links">
          {/* <a> tags-a thookitu <Link> tags add pannirukom. Path-um App.jsx padi correct aakirukom */}
          <Link to="/" className='hello'>Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Approach">Approach</Link>
          <Link to="/our-studio">Our Studio</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>

       <div className="footer-center">
  <div className="info-box">
    <h4>Location :</h4>
    <p>
      63A, TNHB Colony, sowbagaya nagar,<br />
      Civil Aerodrome Post, Coimbatore,<br />
      Tamil Nadu 641014
    </p>

   <p className="contact-line">
  <span className="phone-under">Call us:99949 68165</span>
</p>

<p className="mail-line">
  <span className="mail-under">Email:Admin@skykapture.com</span>
</p>

  </div>

          <div className="newsletter-box">
            <h4>Studio Notes :</h4>
            <div className="input-group">
              <input type="email" placeholder="Enter Your Mail ID......." />
            </div>
            <button className="submit-btn">
  <span className="submit-text">Submit</span>
  <span className="submit-arrow-box">↗</span>
</button>
          </div>
        </div>

        <div className="footer-right">
          <h4>Studio Updates :</h4>
          <div className="social-icons">
            <img src={fbIcon} alt="Facebook" className="social-icon" />
            <img src={pinIcon} alt="Pinterest" className="social-icon" />
            <img src={inIcon} alt="LinkedIn" className="social-icon" />
            <img src={igIcon} alt="Instagram" className="social-icon" />
          </div>
        </div>
      </div>

      <div className="footer-brand">
        <h1>SKY Kapture + Interiors</h1>
      </div>
    </footer>
  );
};

export default Footer;