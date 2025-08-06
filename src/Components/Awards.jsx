import React, { useState } from 'react';
import './Awards.css';
import bannerImg from '../assets/AW1.jpg';
import award1 from '../assets/AW1.jpg';
import award2 from '../assets/AW2.jpg';
import award3 from '../assets/AW3.jpg';

const awards = [
  {
    img: award1,
    title: "National Safety Award 2024",
    desc: "Recognized for outstanding safety practices and zero-incident record in major infrastructure projects.",
    details: "This prestigious award was presented by the National Safety Council for our exemplary safety standards, rigorous training programs, and a culture of zero tolerance for unsafe practices. Our team’s dedication to safety has set new benchmarks in the industry.",
  },
  {
    img: award2,
    title: "Innovation in Construction 2023",
    desc: "Awarded for pioneering use of sustainable materials and digital project management.",
    details: "Our innovative approach to construction, including the use of eco-friendly materials and advanced digital tools, has enabled us to deliver projects faster, safer, and with a reduced environmental footprint.",
  },
  {
    img: award3,
    title: "Best Urban Development Project",
    desc: "Honored for excellence in urban township planning and execution.",
    details: "This award recognizes our commitment to creating vibrant, sustainable urban spaces that enhance quality of life and foster community development.",
  },
  // Add more awards as needed
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div className="awards-page">
      <div
        className="awards-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="awards-banner-overlay">
          <h1>Our Awards & Recognitions</h1>
          <p>
            Celebrating our journey of excellence, innovation, and commitment to quality.
          </p>
        </div>
      </div>
      <div className="awards-content">
        {awards.map((award, idx) => (
          <div
            className="award-block"
            key={idx}
            tabIndex={0}
            onClick={() => setSelectedAward(award)}
            style={{ cursor: 'pointer' }}
          >
            <div className="award-img-wrap">
              <img src={award.img} alt={award.title} className="award-img" />
            </div>
            <div>
              <h2>{award.title}</h2>
              <p>{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedAward && (
        <div
          className="award-modal"
          onClick={() => setSelectedAward(null)}
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="award-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedAward.img} alt={selectedAward.title} className="award-modal-img" />
            <h2>{selectedAward.title}</h2>
            <p style={{ fontWeight: 600 }}>{selectedAward.desc}</p>
            <div style={{ margin: '18px 0', color: '#223050' }}>{selectedAward.details}</div>
            <button onClick={() => setSelectedAward(null)} className="award-modal-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}