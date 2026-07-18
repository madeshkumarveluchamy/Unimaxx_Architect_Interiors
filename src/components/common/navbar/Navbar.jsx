import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/logo.png'; // Unga correct path
import { NavLink } from 'react-router-dom'; // NavLink-ah maathியாச்சு

const Navbar = () => {
  // Mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar-wrapper">
      
      {/* --- Left Side: Logo Box & Hamburger --- */}
      <div className="nav-mobile-header">
        <div className="nav-logo-box">
          <img src={logo} alt="Sky Kapture Interiors" />
        </div>

        {/* Toggle Button (Hamburger Icon) - Desktop la hide aagirukum */}
        <div className="nav-hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* --- Center: Navigation Links Pill --- */}
      <nav className={`nav-links-container ${isMobileMenuOpen ? 'show-menu' : ''}`}>
        <NavLink 
          end
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={toggleMenu}
        >
          HOME
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={toggleMenu}
        >
          PROJECTS
        </NavLink>
        
        <NavLink 
          to="/approach" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={toggleMenu}
        >
          APPROACH
        </NavLink>
        
        <NavLink 
          to="/our-studio" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={toggleMenu}
        >
          OUR STUDIO
        </NavLink>
        
        <NavLink 
          to="/contact-us" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
          onClick={toggleMenu}
        >
          INSIGHTS
        </NavLink>
      </nav>

      {/* --- Right Side: Yellow Split Button --- */}
      <div className="nav-project-btn-group">
        <button className="btn-text-part">Start a Project</button>
        <button className="btn-arrow-part">↗</button>
      </div>

    </header>
  );
};               

export default Navbar;