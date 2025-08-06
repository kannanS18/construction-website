import React , { useState, useEffect, useRef } from 'react'
import d1 from '../assets/D1.jpg';
import d2 from '../assets/D2.jpg';
import d3 from '../assets/D3.jpg';
import d4 from '../assets/D4.jpg';
import d5 from '../assets/D5.jpg';
import d6 from '../assets/D6.jpg';
import d7 from '../assets/D7.jpg';
import './Dam.css';
const damImages = [d1, d2, d3, d4, d5, d6, d7];
export default function Dams() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const detailRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % damImages.length);
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

  const prevImg = () => setIndex((prev) => (prev - 1 + damImages.length) % damImages.length);
  const nextImg = () => setIndex((prev) => (prev + 1) % damImages.length);

  return (
    <div className='dam'>
      <div className="dam-slider">
        <img
          src={damImages[index]}
          alt={`Dam ${index + 1}`}
        />
        <div className="dam-slider-title">
          Dams
        </div>
        <button className="dam-arrow left" onClick={prevImg} aria-label="Previous">
          &#8592;
        </button>
        <button className="dam-arrow right" onClick={nextImg} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="dam-detail-layout" ref={detailRef}>
        <div className={`dam-detail-content${inView ? " animate" : ""}`}>
          <h1 className="dam-detail-title">
            Building Dam
            <span className={`dam-title-underline${inView ? " animate" : ""}`}></span>
          </h1>
          <p className="dam-detail-desc">
            At Tera Build, we excel in constructing robust and innovative dams that support water management, irrigation, and power generation. Our expertise covers a wide range of dam types and technologies, ensuring safety, sustainability, and long-term performance for communities and industries.
          </p>
        </div>
        <div className="dam-detail-img-wrap">
          <div className={`dam-square dam-square-top${inView ? " animate" : ""}`}></div>
          <img src={d1} alt="Dam" className={`dam-detail-img${inView ? " animate" : ""}`} />
          <div className={`dam-square dam-square-bottom${inView ? " animate" : ""}`}></div>
        </div>
      </div>
      <div className="dam-gallery-grid">
        <div className="dam-gallery-img-wrap item1">
          <img src={damImages[0]} alt="Dam 1" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Three Gorges Dam</span>
        </div>
        <div className="dam-gallery-img-wrap item2">
          <img src={damImages[1]} alt="Dam 2" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Hoover Dam</span>
        </div>
        <div className="dam-gallery-img-wrap item3">
          <img src={damImages[2]} alt="Dam 3" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Itaipu Dam</span>
        </div>
        <div className="dam-gallery-img-wrap item4">
          <img src={damImages[3]} alt="Dam 4" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Bhakra Nangal</span>
        </div>
        <div className="dam-gallery-img-wrap item5">
          <img src={damImages[4]} alt="Dam 5" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Kariba Dam</span>
        </div>
        <div className="dam-gallery-img-wrap item6">
          <img src={damImages[5]} alt="Dam 6" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Grande Dixence</span>
        </div>
        <div className="dam-gallery-img-wrap item7">
          <img src={damImages[6]} alt="Dam 7" className="dam-gallery-img" />
          <div className="dam-gallery-img-overlay"></div>
          <span className="dam-gallery-img-label">Sardar Sarovar</span>
        </div>
      </div>
    </div>
  );
}
