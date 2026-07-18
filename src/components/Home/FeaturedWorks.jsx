
import './css/FeaturedWorks.css';

import img1 from '../../assets/project1.png';
import img2 from '../../assets/project2.png';
import img3 from '../../assets/project3.png';
import img4 from '../../assets/project4.png';
import Icon from '../../assets/icon-design.png'

const FeaturedWorks = () => {
  const works = [
    { id: 1, title: 'Ridgeway Cultural Pavilion', cat: 'Commercial', loc: 'Coimbatore, TN', img: img1 },
    { id: 2, title: 'Seaside Cliff Residence', cat: 'Residential', loc: 'Coimbatore, TN', img: img2 },
    { id: 3, title: 'The Grove Workspace', cat: 'Commercial', loc: 'Coimbatore, TN', img: img3 },
    { id: 4, title: 'Modern Timber Structure', cat: 'Architectural', loc: 'Coimbatore, TN', img: img4 },
  ];

  return (
    <section className="featured-section">
      <div className="work-header">
        <div className="label-row">
          <span className="orange-square">■</span>
          <div className="label-container">
            <span className="label-text">Recent Work</span>
            <div className="label-underline"></div>
          </div>
        </div>
        <div className="title-wrapper1">
          <h2 className="section-title">Featured Works</h2>
          <p className="section-desc-wrk">We craft thoughtful, contemporary architecture built on precision & clarity</p>
        </div>
      </div>

      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.img} alt={work.title} className="work-img" />
            <div className="overlay">


<div className="project-info">
  <div className="title-row-icon">
    <img src={Icon} alt="Project Icon" className="project-icon" /> 
    <h3 className="project-title">{work.title}</h3>
</div>
  <div className="tags">
    <span className="tag">{work.cat}</span>
    <span className="tag">{work.loc}</span>
  </div>
</div>
             <button className="client-project-btn">
  <span className="featured-text">View Detailed Project</span>
  <span className="featured-arrow-box">↗</span>
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedWorks;