
import '../../pages/Project/css/ProjectWrk.css'; 
import { Link } from 'react-router-dom';

import img1 from '../../../src/assets/project1.png';
import img2 from '../../../src/assets/project2.png';
import img3 from '../../../src/assets/project3.png';
import img4 from '../../../src/assets/project4.png';
import Icon from '../../../src/assets/icon-design.png'

const ProjectWrk = () => {
  const works = [
    { id: 1, title: 'Ridgeway Cultural Pavilion', cat: 'Commercial', loc: 'Coimbatore, TN', img: img1 },
    { id: 2, title: 'Seaside Cliff Residence', cat: 'Residential', loc: 'Coimbatore, TN', img: img2 },
    { id: 3, title: 'The Grove Workspace', cat: 'Commercial', loc: 'Coimbatore, TN', img: img3 },
    { id: 4, title: 'Modern Timber Structure', cat: 'Architectural', loc: 'Coimbatore, TN', img: img4 },
  ];

  return (
    <section className="featured-section">
      <div className="work-header">
        <div className="label-row2">
          <span className="orange-square-box">■</span>
          <div className="label-container">
            <span className="label-text1">Recent Work</span>
            <div className="label-underline"></div>
          </div>
        </div>
        <div className="title-wrapper1">
          <h2 className="section-title1">Signature Spaces</h2>
          <p className="section-desc-wrk1">From structural form to the final interior detail, we craft contemporary environments designed for clarity, comfort, and timeless precision.</p>
        </div>
      </div>

      <div className="works-grid1">
        {works.map((work) => (
          <div key={work.id} className="work-card1">
            <img src={work.img} alt={work.title} className="work-img1" />
            <div className="overlay1">
              


<div className="project-info">
  <div className="title-row-icon">
    <img src={Icon} alt="Project Icon" className="project-icon" /> 
    <h3 className="project-title1">{work.title}</h3>
</div>
  <div className="tags1">
    <span className="tag1">{work.cat}</span>
    <span className="tag1">{work.loc}</span>
  </div>
</div>
             

{/* Pazhaya <button> tag-ai complete-ah eduthuttu intha Link module-ai apply pannunga pa */}
<Link to="/projectdetail" className="client-project-btn1" style={{ textDecoration: 'none', display: 'inline-flex' }}>
  <span className="featured-text1">View Detailed Project</span>
  <span className="featured-arrow-box1">↗</span>
</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectWrk;