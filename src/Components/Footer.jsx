import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from "react-icons/fa";


export default function Footer() {
  return (
<footer className="construction-footer">
  <div className='Footer-line'></div>
    <div className="construction-footer-main"> 
         <div className="construction-footer-about">
          <img src={logo} alt="Terabuild Logo" className="construction-footer-logo" />
          <p className="construction-footer-description">
            Terabuild delivers world-class infrastructure and engineering solutions. We build the future with quality, safety, and sustainability at our core.
          </p>
          <div className="construction-footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
         <div className="construction-footer-links">
          <h2>We Build</h2>
          <ul>
            <li><Link to="/we-build/bridges">Bridges</Link></li>
            <li><Link to="/we-build/dams">Dams</Link></li>
            <li><Link to="/we-build/airports">Airports</Link></li>
            <li><Link to="/we-build/defence">Defence</Link></li>
          </ul>
        </div>
         <div className="construction-footer-links">
          <h2>Who We Are</h2>
          <ul>
            <li><Link to="/who-we-are/stories">Our Stories</Link></li>
            <li><Link to="/who-we-are/records">Records</Link></li>
            <li><Link to="/who-we-are/rewards">Rewards</Link></li>
            <li><Link to="/who-we-are/business">Business</Link></li>
          </ul>
        </div>
         {/* <div className="construction-footer-links">
          <h2>Unique Projects</h2>
          <ul>
            <li><Link to="/projects/iconic">Iconic Projects</Link></li>
            <li><Link to="/projects/landmark">Landmark Projects</Link></li>
          </ul>
        </div> */}
         <div className="construction-footer-links">
          <h2>Other Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/media">Media</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>
        <div className="construction-footer-contactus">
          <h2>Contact Us</h2>
          <ul className="construction-footer-contact-list">
            <li>
              <FaHeadset /> <a href="tel:+911234567890" className="construction-footer-phone">+91 12345 67890</a>
            </li>
            <li>
              <FaEnvelopeOpenText /> <a href="mailto:info@terabuild.com" className="construction-footer-email">info@terabuild.com</a>
            </li>
            <li>
              <FaMapMarkedAlt className="map-icon" /> Terabuild HQ, Infrastructure Ave, Metro City
            </li>
          </ul>
        </div>      
    </div>
    <div className="construction-footer-bottom">
        &copy; {new Date().getFullYear()} Terabuild. All rights reserved.
      </div>

</footer>
  )
}
