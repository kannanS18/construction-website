import React, { useState } from "react";
import { NavLink, Link} from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [dropdown, setDropdown] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
    setDropdown("");
  };

  // For mobile: open dropdown as a full-screen menu
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 900;

  // Show main menu if no dropdown is open, otherwise show only the dropdown
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={handleNavClick}>
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <div
        className={`burger${menuOpen ? " open" : ""}`}
        onClick={() => {
          setMenuOpen((prev) => !prev);
          setDropdown("");
        }}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links${menuOpen ? " active" : ""}`}>
        {/* Main menu (hide if a dropdown is open on mobile) */}
        {(!isMobile || !dropdown) && (
          <>
             <NavLink to="/" className="nav-main-btn" onClick={handleNavClick}>
              Home
            </NavLink>
            <div
              className="dropdown"
              onClick={() => isMobile ? setDropdown("weBuild") : undefined}
              onMouseEnter={() => !isMobile && setDropdown("weBuild")}
              onMouseLeave={() => !isMobile && setDropdown("")}
            >
              
              <span className="nav-main-btn">
                We Build
                {/* {isMobile && <span className="arrow">›</span>} */}
              </span>
              {!isMobile && (
                <ul className={`dropdown-menu${dropdown === "weBuild" ? " show" : ""}`}>
                  <li><NavLink to="/we-build/bridges" onClick={handleNavClick}>Bridges</NavLink></li>
                  <li><NavLink to="/we-build/dams" onClick={handleNavClick}>Dams</NavLink></li>
                  <li><NavLink to="/we-build/airports" onClick={handleNavClick}>Airports</NavLink></li>
                  <li><NavLink to="/we-build/defence" onClick={handleNavClick}>Defence</NavLink></li>
                  
                </ul>
              )}
            </div>
            <div
              className="dropdown"
              onClick={() => isMobile ? setDropdown("whoWeAre") : undefined}
              onMouseEnter={() => !isMobile && setDropdown("whoWeAre")}
              onMouseLeave={() => !isMobile && setDropdown("")}
            >
              <span className="nav-main-btn">
                Who We Are
                {/* {isMobile && <span className="arrow">›</span>} */}
              </span>
              {!isMobile && (
                <ul className={`dropdown-menu${dropdown === "whoWeAre" ? " show" : ""}`}>
                  <li><NavLink to="/who-we-are/stories" onClick={handleNavClick}>Our Stories</NavLink></li>
                  <li><NavLink to="/who-we-are/records" onClick={handleNavClick}>Records</NavLink></li>
              
                </ul>
              )}
            </div>
            <NavLink to="/services" className="nav-main-btn" onClick={handleNavClick}>
              Services
            </NavLink>

            <NavLink to="/media" className="nav-main-btn" onClick={handleNavClick}>
              Media
            </NavLink>

          </>
        )}

        {/* Mobile dropdown full-screen menu */}
        {isMobile && dropdown === "weBuild" && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-dropdown-header" onClick={() => setDropdown("")}>
              <span className="back-arrow">←</span> Back to Menu
            </div>
            <ul>
              <li><NavLink to="/we-build/bridges" onClick={handleNavClick}>Bridges</NavLink></li>
              <li><NavLink to="/we-build/dams" onClick={handleNavClick}>Dams</NavLink></li>
              <li><NavLink to="/we-build/airports" onClick={handleNavClick}>Airports</NavLink></li>
              <li><NavLink to="/we-build/defence" onClick={handleNavClick}>Defence</NavLink></li>
            </ul>
          </div>
        )}
        {isMobile && dropdown === "whoWeAre" && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-dropdown-header" onClick={() => setDropdown("")}>
              <span className="back-arrow">←</span> Back to Menu
            </div>
            <ul>
              <li><NavLink to="/who-we-are/stories" onClick={handleNavClick}>Our Stories</NavLink></li>
              <li><NavLink to="/who-we-are/records" onClick={handleNavClick}>Records</NavLink></li>
              
            </ul>
          </div>
        )}
        {/* {isMobile && dropdown === "projects" && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-dropdown-header" onClick={() => setDropdown("")}>
              <span className="back-arrow">←</span> Back to Menu
            </div>
            <ul>
              <li><NavLink to="/projects/iconic" onClick={handleNavClick}>Iconic Projects</NavLink></li>
              <li><NavLink to="/projects/landmark" onClick={handleNavClick}>Landmark Projects</NavLink></li>
            </ul>
          </div>
        )} */}
      </div>
    </nav>
  );
}