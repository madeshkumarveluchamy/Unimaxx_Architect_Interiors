import React from 'react';
import './css/TeamSection.css';

import dhiyaImg from '../../assets/dhiya.png';
import preethiImg from '../../assets/preethi.png';
import saiImg from '../../assets/sai.png';

const teamData = [
  { id: 1, name: 'Dhiya Shree', role: 'Interior Architect', img: dhiyaImg },
  { id: 2, name: 'Preethi', role: 'Studio Leadership', img: preethiImg },
  { id: 3, name: 'Sai Sundhar', role: 'Design Lead', img: saiImg },
];

const TeamSection = () => {
  return (
    /* This outer wrapper acts as the 'rail' for the sticky effect just like your reference */
    <section className="team-outer-pin">
      <div className="team-header">
        <div className="team-section-title">
          <span className="orange-box"></span> Creative Collective
        </div>
        <div className="section-tag">PEOPLE WITH PASSION</div>
      </div>

      <div className="team-body locked-row">
        {/* LEFT SIDE: The Stacking / Overlapping Cards */}
        <div className="team-stacking-scroller">
          {teamData.map((member, index) => (
            <div 
              key={member.id} 
              className="team-overlap-card"
              style={{ top: '130px' }} // Dynamic Docking Offset from reference
            >
              <div className="team-image-wrap">
                <img src={member.img} alt={member.name} className="team-image" />
              </div>
              <div className="team-details">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Pinned Text Section */}
        <div className="team-pinned-sidebar">
          <div className="team-sidebar-inner">
            <h1>Our Team of <br/>Experts</h1>
            <p>
             We’re always interested in thoughtful architects and designers who value clarity,<br/>discipline, and material integrity. If you share our approach, we’d like to hear from you.
            </p>
            <div className="join-team">
              <span>Join Our Team</span>
              <div className="arrow-box">
                <span>🡥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;