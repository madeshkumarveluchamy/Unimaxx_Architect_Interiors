import '../../pages/Project/css/ProjectWrk.css'; 
import { Link } from 'react-router-dom';

import img1 from '../../../src/assets/project1.png';
import img2 from '../../../src/assets/project2.png';
import img3 from '../../../src/assets/project3.png';
import img4 from '../../../src/assets/project4.png';
import Icon from '../../../src/assets/icon-design.png';

const ProjectWrk = () => {
  const works = [
    { id: 1, title: 'Ridgeway Cultural Pavilion', cat: 'Commercial', loc: 'Coimbatore, TN', img: img1 },
    { id: 2, title: 'Seaside Cliff Residence', cat: 'Residential', loc: 'Coimbatore, TN', img: img2 },
    { id: 3, title: 'The Grove Workspace', cat: 'Commercial', loc: 'Coimbatore, TN', img: img3 },
    { id: 4, title: 'Modern Timber Structure', cat: 'Architectural', loc: 'Coimbatore, TN', img: img4 },
  ];

  return (
    <section className="story-project-featured-section">
      <div className="story-project-work-header">
        <div className="story-project-label-row2">
          <span className="story-project-orange-square-box">■</span>
          <div className="story-project-label-container">
            <span className="story-project-label-text1">Recent Projects</span>
            <div className="story-project-label-underline"></div>
          </div>
        </div>
        <div>
          <h2 className="story-project-section-title1">Signature Spaces</h2>
        </div>
        <div className="story-project-title-wrapper1">
          <p className="story-project-section-desc-wrk1">
            From structural form to the final interior detail, we craft contemporary environments designed for clarity, comfort, and timeless precision.
          </p>
        </div>
      </div>

      <div className="story-project-works-grid1">
        {works.map((work) => (
          <div key={work.id} className="story-project-work-card1">
            <img src={work.img} alt={work.title} className="story-project-work-img1" />
            <div className="story-project-overlay1">
              
              <div className="story-project-project-info">
                <div className="story-project-title-row-icon">
                  <img src={Icon} alt="Project Icon" className="story-project-project-icon" /> 
                  <h3 className="story-project-project-title1">{work.title}</h3>
                </div>
                <div className="story-project-tags1">
                  <span className="story-project-tag1">{work.cat}</span>
                  <span className="story-project-tag1">{work.loc}</span>
                </div>
              </div>
              
              <Link to="/projectdetail" className="story-project-client-project-btn1" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <span className="story-project-featured-text1">View Detailed Project</span>
                <span className="story-project-featured-arrow-box1">↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectWrk;