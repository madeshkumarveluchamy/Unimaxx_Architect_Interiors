import React, { useState, useEffect } from "react";
import "../ProjectDetail/css/ProjectDetailPage.css";

import imgMainHero from "../../../../src/assets/residential.png";
import imgKitchenView from "../../../../src/assets/interiors.png";
import imgExteriorVilla from "../../../../src/assets/villa-ext.png";
import imgWarmNightView from "../../../../src/assets/villa-night.png";

import iconClient from "../../../../src/assets/icon-client.png";
import iconLocation from "../../../../src/assets/icon-location.png";
import iconServices from "../../../../src/assets/icon-services.png";
import iconDuration from "../../../../src/assets/icon-duration.png";
import iconArea from "../../../../src/assets/icon-area.png";
import iconFacing from "../../../../src/assets/icon-facing.png";

function ProjectDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [
    imgMainHero,
    imgKitchenView,
    imgExteriorVilla,
    imgWarmNightView,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
  };

  const mainImage = sliderImages[currentSlide];

  return (
    <div className="project-detail-container">
      <header className="project-detail-header">
        <div className="header-meta-left">
          <div className="solutions-tag">
            <span className="accent-square"></span>
            <p>
              End-to-End Solutions for
              <br />
              Modern Spaces
            </p>
          </div>

          <div className="project-title-wrapper">
            <span className="featured-pill">Featured Project</span>

            <div className="client-loc-row">
              <div className="meta-inline-item">
                <img src={iconClient} alt="Client" className="meta-icon" />
                <span>Mr. Kumaravel Pandian</span>
              </div>
              <div className="meta-inline-item">
                <img src={iconLocation} alt="Location" className="meta-icon" />
                <span>RS Puram, Coimbatore.</span>
              </div>
            </div>

            <h1 className="project-main-title">Horizon Glass Villa</h1>
            <p className="project-hero-desc">
              We believe a home should be a seamless extension of the people who
              live within it. Our residential practice blends architectural
              rigor with intimate interior design, crafting spaces that are as
              functional as they are beautiful.
            </p>
            <span className="brand-subtext">SKY KAPTURE INTERIORS</span>
          </div>
        </div>

        <div className="header-meta-right">
          <div className="studio-top-intro-para">
            <p>
              From structural form to the final interior detail, we craft
              contemporary environments designed for clarity, comfort, and
              timeless precision.
            </p>
          </div>
          <div className="header-preview-right">
            <img
              src={imgMainHero}
              alt="Horizon Glass Villa Cover"
              className="side-preview-img"
            />
          </div>
        </div>
      </header>

      <section className="property-metrics-bar">
        <div className="metric-box">
          <img src={iconServices} alt="Services" className="metric-icon" />
          <div className="metric-info">
            <h4>Services</h4>
            <p>Full Interior | Exterior</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconDuration} alt="Duration" className="metric-icon" />
          <div className="metric-info">
            <h4>Duration</h4>
            <p>Ongoing...</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconArea} alt="Total Area" className="metric-icon" />
          <div className="metric-info">
            <h4>Total Area</h4>
            <p>2,826 Sq. Ft</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconFacing} alt="Site Facing" className="metric-icon" />
          <div className="metric-info">
            <h4>Site Facing</h4>
            <p>South</p>
          </div>
        </div>
      </section>

      <div className="mesh-panel-box1">
        <img src={imgMainHero} alt="Mesh Panel Main Hero" />
      </div>

      <section className="detail-approach-specs">
        <div className="specs-col-left">
          <div className="approach-header-spine">
            <div>
              <h3>Our Approach</h3>
            </div>
          </div>
          <ul className="approach-bullet-points">
            <li>
              <span className="bullet-sq">▪</span> Spatial Planning & Layout
              Optimization
            </li>
            <li>
              <span className="bullet-sq">▪</span> Bespoke Furniture & Material
              Curation
            </li>
            <li>
              <span className="bullet-sq">▪</span> Lighting, Color & Texture
              Harmonization
            </li>
            <li>
              <span className="bullet-sq">▪</span> Smart technology integration
            </li>
            <li>
              <span className="bullet-sq">▪</span> Human Centric Comfort
              Solutions
            </li>
          </ul>
        </div>

        <div className="specs-col-right">
          <p className="narrative-p">
            We are currently crafting a premier 2,826 Sq. Ft. residence,
            blending architectural precision with aesthetic excellence. This
            project represents our commitment to building unbeatable,
            high-performance living spaces. By integrating comprehensive
            interior and exterior design solutions, we ensure every detail is
            perfectly balanced to create an exceptional home.
          </p>
          <p className="summary-fields-p">
            <strong>Services:</strong> We are providing full-suite
            architectural, interior, and exterior design services.
            <br />
            <strong>Duration:</strong> This project is currently in progress,
            moving steadily toward completion.
            <br />
            <strong>Total Area:</strong> The residence encompasses 2,826 Sq. Ft.
            of meticulously planned space.
          </p>
        </div>
      </section>

      <section className="gallery-split-mesh-grid">
        <div className="mesh-top-full">
          <img src={imgKitchenView} alt="Static Mesh Top View" />
        </div>

        <div className="mesh-bottom-split">
          <div className="mesh-panel-box">
            <img src={imgExteriorVilla} alt="Static Mesh Left View" />
          </div>
          <div className="mesh-panel-box">
            <img src={imgWarmNightView} alt="Static Mesh Right View" />
          </div>
        </div>
      </section>

      <section className="immersive-slider-wrapper">
        <div className="main-slider-viewport">
          <img
            key={currentSlide}
            src={mainImage}
            alt={`Horizon Glass Villa Layout ${currentSlide + 1}`}
            className="slider-active-image"
          />
          <button className="slider-nav-btn prev" onClick={handlePrevSlide}>
            <span>←</span>
          </button>
          <button className="slider-nav-btn next" onClick={handleNextSlide}>
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;


