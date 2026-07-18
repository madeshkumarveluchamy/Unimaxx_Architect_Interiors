import  { useState } from 'react';
import './css/ServicesSection.css';

import img1 from '../../assets/res-design.png';
import img2 from '../../assets/renovations.png';
import img3 from '../../assets/comm-design.png';
import img4 from '../../assets/styling.png';
import img5 from '../../assets/e-design.png';

const ServicesSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const services = [
    { id: '001', title: 'Residential Design', desc: 'Complete home interiors that reflect your style functional, beautiful, and deeply personal.', count: '100+', img: img1 },
    { id: '002', title: 'Interior Renovations', desc: 'We rework layouts, update materials, and give tired spaces a fresh, modern edge.', count: '55+', img: img2 },
    { id: '003', title: 'Commercial Interior Design', desc: 'Smart, branded spaces for offices, cafés, and retail that engage and perform.', count: '25+', img: img3 },
    { id: '004', title: 'Styling & Decor', desc: 'Finishing touches—furniture, art, and accents that bring personality and polish.', count: '40+', img: img4 },
    { id: '005', title: 'Virtual E-Design', desc: 'Virtual E-Design service, layouts and furnishing plans without leaving your home.', count: '50+', img: img5 },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="title-row">
          <span className="orange-square2">■</span>
          <div className="title-box">
            <h2 className="title-text">End-to-End Architectural</h2>
            <div className="title-underline" />
            <h2 className="title-text">Solutions</h2>
          </div>
        </div>
      
        <h1 className="pg-title">Personalized Care.<br />Inspired Spaces.</h1>
        
        <div>
        <p className="subtitle1">Creative solutions tailored for every style and <br/> every space.</p>
        <button className="view-all-btn3">
          <span className="text3">View All Services</span>
          <span className="arrow-box3"><span className="arr-diagonal1">↗</span></span>
        </button>
        </div>
      </div>

      <div className="services-list">
        {services.map((item, index) => {
          const isActive = index === activeIdx;
          return (
            <div
              key={item.id}
              className={`service-item ${isActive ? 'active-service' : ''}`}
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(null)}
              onFocus={() => setActiveIdx(index)}
              onBlur={() => setActiveIdx(null)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
            >
              <div className="vertical-line-container">
                <span className="orange-square-small">■</span>
                <span className="item-id">({item.id})</span>

                <div className="vertical-line1" aria-hidden="true">
                  <span className="vertical-fill" />
                </div>
              </div>

              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="count">{item.count}</div>
                <span className="sub-text">Transformed Spaces</span>
              </div>

              <img src={item.img} alt={item.title} className="service-img" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;