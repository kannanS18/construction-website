import React, { useState, useEffect, useRef } from 'react';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import b7 from '../assets/b7.jpg';
import './Bridge.css';

const bridgeImages = [b1, b2, b3, b4, b5, b6, b7];

export default function Bridge() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const detailRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % bridgeImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (detailRef.current) observer.observe(detailRef.current);
    return () => observer.disconnect();
  }, []);

  const prevImg = () => setIndex((prev) => (prev - 1 + bridgeImages.length) % bridgeImages.length);
  const nextImg = () => setIndex((prev) => (prev + 1) % bridgeImages.length);

  return (
    <div className='bridge'>
      <div className="bridge-slider">
        <img
          src={bridgeImages[index]}
          alt={`Bridge ${index + 1}`}
        />
        <div className="bridge-slider-title">
          Bridges
        </div>
        <button className="bridge-arrow left" onClick={prevImg} aria-label="Previous">
          &#8592;
        </button>
        <button className="bridge-arrow right" onClick={nextImg} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="bridge-detail-layout" ref={detailRef}>
        <div className={`bridge-detail-content${inView ? " animate" : ""}`}>
          <h1 className="bridge-detail-title">
            Building Bridge
            <span className={`bridge-title-underline${inView ? " animate" : ""}`}></span>
          </h1>
          <p className="bridge-detail-desc">
            At Tera Build, we take pride in pioneering the design and execution of landmark bridges in India and beyond. With a strong track record of delivering world-class structures, we specialize in advanced bridge construction techniques including incremental launching, segmental construction, cable-stayed systems, precast & pre-stressed concrete, and steel-concrete composite methods. Backed by our Heavy Civil Infrastructure division, our bridge-building capabilities reflect engineering ingenuity, precision, and an unwavering commitment to quality.
          </p>
        </div>
        <div className="bridge-detail-img-wrap">
          <div className={`bridge-square bridge-square-top${inView ? " animate" : ""}`}></div>
          <img src={b1} alt="Bridge" className={`bridge-detail-img${inView ? " animate" : ""}`} />
          <div className={`bridge-square bridge-square-bottom${inView ? " animate" : ""}`}></div>
        </div>
      </div>
<div className="bridge-gallery-grid">
  <div className="bridge-gallery-img-wrap item1">
    <img src={bridgeImages[0]} alt="Bridge 1" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Puente Nuevo</span>
  </div>
  <div className="bridge-gallery-img-wrap item2">
    <img src={bridgeImages[1]} alt="Bridge 2" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Brooklyn Bridge</span>
  </div>
  <div className="bridge-gallery-img-wrap item3">
    <img src={bridgeImages[2]} alt="Bridge 3" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Golden Gate</span>
  </div>
  <div className="bridge-gallery-img-wrap item4">
    <img src={bridgeImages[3]} alt="Bridge 4" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Charles Bridge (England)</span>
  </div>
  <div className="bridge-gallery-img-wrap item5">
    <img src={bridgeImages[4]} alt="Bridge 5" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Vasco da Gama Bridge (Brazil)</span>
  </div>
  <div className="bridge-gallery-img-wrap item6">
    <img src={bridgeImages[5]} alt="Bridge 6" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Akashi Kaikyo Bridge (Japan)</span>
  </div>
  <div className="bridge-gallery-img-wrap item1b">
    <img src={bridgeImages[6]} alt="Bridge 1 repeat" className="bridge-gallery-img" />
    <div className="bridge-gallery-img-overlay"></div>
    <span className="bridge-gallery-img-label">Helix Bridge (Singapore)</span>
  </div>
</div>
    </div>
  );
}
