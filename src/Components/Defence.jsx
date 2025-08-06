import React, { useState, useEffect, useRef } from 'react';
import de1 from '../assets/DE1.jpg';
import de2 from '../assets/DE2.jpg';
import de3 from '../assets/DE3.jpg';
import de4 from '../assets/DE4.jpg';
import './Defence.css';
const defenceImages = [de1, de2, de3, de4];
export default function Defence() {
const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const detailRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % defenceImages.length);
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

  const prevImg = () => setIndex((prev) => (prev - 1 + defenceImages.length) % defenceImages.length);
  const nextImg = () => setIndex((prev) => (prev + 1) % defenceImages.length);

  return (
    <div className='defence'>
      <div className="defence-slider">
        <img
          src={defenceImages[index]}
          alt={`Defence ${index + 1}`}
        />
        <div className="defence-slider-title">
          Defence
        </div>
        <button className="defence-arrow left" onClick={prevImg} aria-label="Previous">
          &#8592;
        </button>
        <button className="defence-arrow right" onClick={nextImg} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="defence-detail-layout" ref={detailRef}>
        <div className={`defence-detail-content${inView ? " animate" : ""}`}>
          <h1 className="defence-detail-title">
            Defence Infrastructure
            <span className={`defence-title-underline${inView ? " animate" : ""}`}></span>
          </h1>
          <p className="defence-detail-desc">
            Backed by over eight decades of expertise in managing mega infrastructure projects, we have firmly established ourselves as a trusted name in strengthening the nation's defence capabilities. Our Defence Infrastructure division offers comprehensive EPC (Engineering, Procurement, and Construction) and turnkey design-and-build solutions, taking complete responsibility from concept to commissioning. We specialize in constructing a wide range of critical defence establishments, including Army bases, Air Force stations, Naval facilities, ordnance factories, workshops, warehouses, weapon testing ranges, and secure underground structures for armament storage. Our capabilities also extend to high-altitude shelters, pre-engineered buildings, blast-proof installations, surveillance-enabled watch towers, and specialized Electrical & Mechanical (E&M) works. With a focus on precision, security, and reliability, we are committed to delivering defence infrastructure projects that meet the most stringent standards and strategic requirements.
          </p>
        </div>
        <div className="defence-detail-img-wrap">
          <div className={`defence-square defence-square-top${inView ? " animate" : ""}`}></div>
          <img src={de1} alt="Defence" className={`defence-detail-img${inView ? " animate" : ""}`} />
          <div className={`defence-square defence-square-bottom${inView ? " animate" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}
