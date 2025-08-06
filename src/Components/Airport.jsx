import React, { useState, useEffect, useRef } from 'react';
import a1 from '../assets/A1.jpg';
import a2 from '../assets/A2.jpg';
import a3 from '../assets/A3.jpg';
import a4 from '../assets/A4.jpg';
import a5 from '../assets/A5.jpg';
import a6 from '../assets/A6.jpg';
import a7 from '../assets/A7.jpg';
import './Airport.css';

const airportImages = [a1, a2, a3, a4, a5, a6, a7];

export default function Airport() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const detailRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % airportImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (detailRef.current) observer.observe(detailRef.current);
    return () => observer.disconnect();
  }, []);

  const prevImg = () => setIndex((prev) => (prev - 1 + airportImages.length) % airportImages.length);
  const nextImg = () => setIndex((prev) => (prev + 1) % airportImages.length);

  return (
    <div className='airport'>
      <div className="airport-slider">
        <img
          src={airportImages[index]}
          alt={`Airport ${index + 1}`}
        />
        <div className="airport-slider-title">
          Airports
        </div>
        <button className="airport-arrow left" onClick={prevImg} aria-label="Previous">
          &#8592;
        </button>
        <button className="airport-arrow right" onClick={nextImg} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="airport-detail-layout" ref={detailRef}>
        <div className={`airport-detail-content${inView ? " animate" : ""}`}>
          <h1 className="airport-detail-title">
            Building Airport
            <span className={`airport-title-underline${inView ? " animate" : ""}`}></span>
          </h1>
          <p className="airport-detail-desc">
            At Tera Build, we are at the forefront of designing and constructing world-class airports. Our expertise spans across terminal buildings, runways, taxiways, and advanced airport infrastructure. We deliver projects that meet international standards, ensuring efficiency, safety, and sustainability for the future of air travel.
          </p>
        </div>
        <div className="airport-detail-img-wrap">
          <div className={`airport-square airport-square-top${inView ? " animate" : ""}`}></div>
          <img src={a1} alt="Airport" className={`airport-detail-img${inView ? " animate" : ""}`} />
          <div className={`airport-square airport-square-bottom${inView ? " animate" : ""}`}></div>
        </div>
      </div>
      <div className="airport-gallery-grid">
        <div className="airport-gallery-img-wrap item1">
          <img src={airportImages[0]} alt="Airport 1" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Denver International</span>
        </div>
        <div className="airport-gallery-img-wrap item2">
          <img src={airportImages[1]} alt="Airport 2" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Changi Airport</span>
        </div>
        <div className="airport-gallery-img-wrap item3">
          <img src={airportImages[2]} alt="Airport 3" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Heathrow Terminal 5</span>
        </div>
        <div className="airport-gallery-img-wrap item4">
          <img src={airportImages[3]} alt="Airport 4" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Incheon International</span>
        </div>
        <div className="airport-gallery-img-wrap item5">
          <img src={airportImages[4]} alt="Airport 5" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Haneda Airport</span>
        </div>
        <div className="airport-gallery-img-wrap item6">
          <img src={airportImages[5]} alt="Airport 6" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Dubai International</span>
        </div>
        <div className="airport-gallery-img-wrap item7">
          <img src={airportImages[6]} alt="Airport 7" className="airport-gallery-img" />
          <div className="airport-gallery-img-overlay"></div>
          <span className="airport-gallery-img-label">Beijing Daxing</span>
        </div>
      </div>
    </div>
  );
}