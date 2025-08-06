import React, { useRef, useEffect } from 'react';
import './Stories.css';
import bannerImg from '../assets/OB.jpg';
import story1 from '../assets/F.jpg'; 
import story2 from '../assets/coin.jpg';
import story3 from '../assets/NB.jpg';

function usePixelDissolveAnimation() {
  const ref = useRef();
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    let timeout;
    let lastIntersecting = null;
    const clearClasses = () => {
      img.classList.remove("pixel-dissolve-in");
      img.classList.remove("pixel-dissolve-out");
    };
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (lastIntersecting !== true) {
            clearClasses();
            void img.offsetWidth;
            img.classList.add("pixel-dissolve-in");
            timeout = setTimeout(() => {
              img.classList.remove("pixel-dissolve-in");
            }, 1100);
            lastIntersecting = true;
          }
        } else {
          if (lastIntersecting !== false) {
            clearClasses();
            void img.offsetWidth;
            img.classList.add("pixel-dissolve-out");
            timeout = setTimeout(() => {
              img.classList.remove("pixel-dissolve-out");
            }, 1100);
            lastIntersecting = false;
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(img);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      clearClasses();
    };
  }, []);
  return ref;
}

export default function Ourstories() {
  const imgRef1 = usePixelDissolveAnimation();
  const imgRef2 = usePixelDissolveAnimation();
  const imgRef3 = usePixelDissolveAnimation();

  return (
    <div className="ourstories-page">
      <div
        className="ourstories-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="ourstories-banner-overlay">
          <h1>Tera Build: Our Stories</h1>
          <p>
            From humble beginnings in 2000 to nation-building milestones, our journey is a story of vision, grit, and innovation.
          </p>
        </div>
      </div>
      <div className="ourstories-content">
        <div className="story-block">
          <img ref={imgRef1} src={story1} alt="First Project" className="dusty-img" />
          <div>
            <h2>Who We Are</h2>
            <p>
              TeraBuild is a forward-looking infrastructure and construction company with a deep commitment to quality, innovation, and nation-building. We specialize in delivering end-to-end solutions across residential, commercial, and industrial infrastructure segments. At TeraBuild, we don’t just construct buildings—we create enduring landmarks that shape the future.
              Backed by strong values, cutting-edge technology, and a skilled workforce, our capabilities span every stage of project development, from concept to commissioning. We serve both public and private sector clients with unwavering dedication to safety, sustainability, and performance excellence.
            </p>
          </div>
        </div>
        <div className="story-block reverse">
          <img ref={imgRef2} src={story2} alt="Innovation" className="dusty-img" />
          <div>
            <h2>Our Founder</h2>
            <p>
              TeraBuild was founded by a visionary civil engineer and entrepreneur whose passion for infrastructure excellence and sustainable growth laid the cornerstone for the company. With years of hands-on experience in delivering large-scale projects across India, our founder envisioned a construction firm that not only builds structures but also builds trust and long-term value.

              Guided by a deep understanding of engineering principles and a forward-thinking mindset, he established TeraBuild to challenge conventional construction norms and bring in a culture of precision, innovation, and integrity. His leadership continues to inspire the company’s mission to create iconic, resilient, and future-ready infrastructure that transforms communities and contributes to nation-building.
            </p>
          </div>
        </div>
        <div className="story-block">
          <img ref={imgRef3} src={story3} alt="Nation Building" className="dusty-img" />
          <div>
            <h2>The TeraBuild Innovation Centre – Chennai</h2>
            <p>
                Strategically headquartered in Chennai, TeraBuild operates at the intersection of tradition and technology. As one of South India’s rapidly emerging construction firms, we are committed to redefining the skyline through innovation, precision, and sustainable development.

                From Chennai, we manage a growing portfolio of projects across residential townships, commercial spaces, industrial facilities, and public infrastructure. Our operational hub is equipped with state-of-the-art planning tools, design labs, and collaborative workspaces that ensure seamless coordination across all project phases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}