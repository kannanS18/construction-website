import React, { useState } from 'react';
import './Media.css';
const mediaData = [
  {
    year: 2024,
    releases: [
      { title: "Tera Build launches Smart Infrastructure Initiative", link: "#" },
      { title: "Awarded National Safety Excellence", link: "#" },
    ],
  },
  {
    year: 2023,
    releases: [
      { title: "Completion of Mega Airport Project", link: "#" },
      { title: "Green Construction Drive Announced", link: "#" },
    ],
  },
  {
    year: 2022,
    releases: [
      { title: "Tera Build Expands to Africa", link: "#" },
      { title: "Wins International Bridge Award", link: "#" },
    ],
  },
   {
    year: 2000,
    releases: [
      { title: "Tera Build Founded", link: "#" },
      { title: "First Major Dam Project Announced", link: "#" },
    ],
  },
];

export default function Media() {
 const [selectedYear, setSelectedYear] = useState(mediaData[0].year);

  const years = mediaData.map(item => item.year).sort((a, b) => b - a);
  const currentReleases = mediaData.find(item => item.year === selectedYear)?.releases || [];

  return (
    <div className="media-page">
      <div className="media-header">
        <h1>Media Releases</h1>
        <p>
          Since 2000, Tera Build has been featured in the media for its landmark projects, innovations, and achievements.
        </p>
      </div>
      <div className="media-content">
        <aside className="media-years">
          <ul>
            {years.map(year => (
              <li
                key={year}
                className={year === selectedYear ? "active" : ""}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </aside>
        <section className="media-releases">
          <h2>{selectedYear} Releases</h2>
          {currentReleases.length === 0 ? (
            <p className="media-empty">No releases for this year.</p>
          ) : (
            <ul>
              {currentReleases.map((release, idx) => (
                <li key={idx}>
                  <a href={release.link} target="_blank" rel="noopener noreferrer">
                    {release.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
