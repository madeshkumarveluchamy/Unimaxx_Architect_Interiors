import React, { useState } from 'react';
import './css/ExperienceSection.css';

import kvnImg from '../../assets/kvn-residence.png';
import suriyaImg from '../../assets/suriya-villa.png';
import vallgetsImg from '../../assets/vallgets-residence.png';
import greenAppleImg from '../../assets/green-apple-residence.png';

const projects = [
  {
    id: 1,
    title: 'KVN Residence',
    location: 'Bangalore',
    img: kvnImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Suriya Villa',
    location: 'Coimbatore',
    img: suriyaImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Vallgets Residence',
    location: 'Coimbatore',
    img: vallgetsImg,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'Green Apple Residence',
    location: 'Coimbatore',
    img: greenAppleImg,
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const ExperienceSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="experience-section">
      <div className="exp-header">
        <div className="label">
          <span className="orange-box"></span>
          Concept → Reality
        </div>

        <h2 className="title">
            Experience-led<br />Design, Perfected.
          </h2>

        <div className="header-content">
          

          <div className="right-side">
            <p className="sub-text1 ">
              A visual library of interiors brought to life<br />
              from blueprint to beauty.
            </p>

            <button className="view-portfolio-btn">
              <span className="text">View Portfolio</span>
              <span className="arrow-box">↗</span>
            </button>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card" style={{ backgroundImage: `url(${p.img})` }}>
            <div className="video-overlay">
              <button
                className="play-button"
                aria-label={`Play ${p.title} video`}
                onClick={() => setSelectedVideo(p)}
              >
                <span className="play-ring ring-1"></span>
                <span className="play-ring ring-2"></span>
                <span className="play-icon">▶</span>
              </button>
            </div>

            <div className="card-footer">
              <img src={p.img} alt={p.title} className="footer-thumb" />
              <div className="footer-text">
                <h4>{p.title}</h4>
                <p>{p.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className="modal-video"
              src={selectedVideo.video}
              controls
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="modal-caption">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;