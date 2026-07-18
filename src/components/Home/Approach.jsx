import { useState, useEffect, useRef } from 'react';
import './css/Approach.css';
import icon1 from '../../assets/construction-icon.png';
import icon2 from '../../assets/planning-icon.png';
import icon3 from '../../assets/delivery-icon.png';
import icon4 from '../../assets/landscape-icon.png';

const cards = [
  {
    icon: icon1,
    title: "Construction and Management",
    desc: "We oversee every construction stage carefully, coordinating teams and ensuring smooth on-site execution from start to finish."
  },
  {
    icon: icon2,
    title: "Architectural Planning & Design",
    desc: "We develop clear design strategies, refine concepts, and create detailed plans that guide each project with precision."
  },
  {
    icon: icon3,
    title: "Project Coordination & Delivery",
    desc: "We manage schedules, resources, and communication, keeping the entire project aligned and progressing efficiently."
  },
  {
    icon: icon4,
    title: "Exterior & Landscape Design",
    desc: "We shape outdoor spaces with intention, blending functionality, natural elements, and visual harmony into every environment."
  }
];

const useSectionInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const ArchitecturalApproach = () => {
  const [sectionRef, sectionInView] = useSectionInView();
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    if (!sectionInView) {
      setActiveCard(-1);
      return;
    }

    setActiveCard(-1);
    const timers = cards.map((_, index) =>
      setTimeout(() => setActiveCard(index), index * 1800)
    );

    return () => timers.forEach(clearTimeout);
  }, [sectionInView]);

  return (
    <section ref={sectionRef} className={`approach-section ${sectionInView ? 'section-active' : ''}`}>
      <div className="approach-inner">
        <div className="approach-header">
          <div className="title-row1 ">
            <span className="orange-square1">■</span>
            <h2 className="title-text1">Architectural Approach</h2>
            <span className="gold-star-start"></span>
          </div>

          <h1 className="main-title1 col-6">
            <div className='line1'>Our services cover all phases</div><div className='line2'>of architectural — strategy,</div><div className='line3'>design, development, and delivery</div>
          </h1>
        </div>

        <div className="approach-grid">
          {cards.map((item, index) => (
            <div
              className={`approach-card ${activeCard >= index ? 'active' : ''}`}
              key={index}
            >
              <span className="number">0{index + 1}.</span>
              <div className="card-line">
                <span className="spark-dot"></span>
              </div>
              <img src={item.icon} alt={item.title} className="card-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-btn-wrap">
          <a href="#start" className="cta-btn">
            <span className="cta-text">Start a Project</span>
            <span className="cta-arrow-box">
              <span className="arrow-diagonal">↗</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalApproach;