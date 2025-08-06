import React, { useState, useEffect, useRef } from 'react';
import airport from '../assets/airport.jpg';
import dam from '../assets/dam.jpg';
import sky from '../assets/sky.jpg';
import metro from '../assets/metro.webp';
import office from '../assets/office.jpg';
import './Home.css';

const images = [
  { src: airport, name: "International Airport (DEN)", location: "Denver, Colorado, USA." },
  { src: dam, name: "Baihetan Dam, China", location: "Yunnan, China." },
  { src: sky, name: "Merdeka 118, Kuala Lumpur", location: "Kuala Lumpur, Malaysia." },
  { src: metro, name: "Chennai Metro Construction", location: "Chennai, India." }
];
const details = [
  { src: airport, name: "International Airport (DEN)", location: "Denver International Airport (DEN) is the largest airport in the U.S. by land area and a major hub for domestic and international travel. Known for its iconic peaked roof and efficient design, DEN serves as a gateway to the Rocky Mountain region." },
  { src: dam, name: "Baihetan Dam, China", location: "The Baihetan Dam in China is one of the world's largest and most powerful hydropower projects, located on the Jinsha River. It features a double-curved arch design and boasts a massive 16-gigawatt capacity, contributing significantly to China's clean energy goals." },
  { src: sky, name: "Merdeka 118, Kuala Lumpur", location: "Merdeka 118 in Kuala Lumpur is the second tallest building in the world, standing at 678.9 meters with 118 floors. Its design is inspired by Malaysia’s cultural heritage and serves as a symbol of national pride and progress." },
  { src: metro, name: "Chennai Metro Construction", location: "Chennai Metro is a modern rapid transit system in Chennai, India, featuring two operational lines spanning approximately 54 km with 41–43 stations, seamlessly connecting key hubs including the airport. Launched in June 2015, it now serves around 346,000 passengers daily and is expanding with three more lines under Phase II through 2028 ." }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const aboutRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);
  const [charsIn, setCharsIn] = useState(false);

useEffect(() => {
  if (aboutInView) {
    // Wait for Abouttext fade-in (0.7s + 0.7s delay)
    const timer = setTimeout(() => setCharsIn(true), 500);
    return () => clearTimeout(timer);
  } else {
    setCharsIn(false);
  }
}, [aboutInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setAboutInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  // Character-by-character animation for About text
  const aboutText = `At Terabuild, we are more than just builders  we are nation shapers.
As one of India’s emerging leaders in construction, Terabuild is committed to delivering world class infrastructure solutions that drive growth, innovation, and progress.
From concept to commissioning,we provide comprehensive EPC (Engineering, Procurement, and Construction) services with a focus on quality, safety, and sustainability.
With a single source responsibility model,we handle complex industrial and 
commercial infrastructure projects across sectors with precision and pride.`;

  return (
    <div className='home'>
      <div className='slideshow-container'>
        {images.map((img, i) => (
          <React.Fragment key={i}>
            <img
              src={img.src}
              alt={img.name}
              className={`slide slide-${i}${i === index ? ' active' : ''}`}
            />
            <div
              className={`slide-caption slide-caption-${i}${i === index ? ' active' : ''}`}
            >
              {img.name}
            </div>
            <div
              className={`slide-location slide-location-${i}${i === index ? ' active' : ''}`}
            >
              {img.location}
            </div>
          </React.Fragment>
        ))}
        <div className="slideshow-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <div className='home-About' ref={aboutRef}>
        <div className={`Aboutimg${aboutInView ? " in-view" : ""}`}>
          <img src={office} alt="Office Building" />
        </div>
<div className={`Abouttext${aboutInView ? " in-view" : ""}${charsIn ? " chars-in" : ""}`}>
  <h2>
    Foundations for the Future
    <span className="about-underline"></span>
  </h2>
  <p>
    {aboutText.split('').map((char, i) => (
      <span
        className={`about-char${charsIn ? " animate" : ""}`}
        style={{ animationDelay: charsIn ? `${i * 0.002}s` : "0s" }}
        key={i}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </p>
</div>
      </div>

            <div className="three-img-row">
        {details.map((img, i) => (
          <div className="img-card" key={i}>
            <img src={img.src} alt={img.name} className="img-card-img" />
            <div className="img-card-name">{img.name}</div>
            <div className="img-card-overlay">
              <div className="img-card-location">{img.location}</div>
              <div className="img-card-details">{img.details}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}