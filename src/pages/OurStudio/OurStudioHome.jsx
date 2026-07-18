import React, { useState, useRef } from "react"; // Ithu thaan miss aagi irunthathu
import Navbar from "../../components/common/navbar/Navbar";
import { motion, useInView } from "framer-motion";
import "./css/OurStudioHome.css";

// Importing Existing Assets
import ceoImg from '../../assets/ceoimage.png'; 
import serviceIcon1 from '../../assets/ourstudioicon1.png'; 
import serviceIcon2 from '../../assets/ourstudioicon2.png'; 
import serviceIcon3 from '../../assets/ourstudioicon3.png'; 

// --- TEAM IMAGES PLACEHOLDERS ---
import teamImg1 from '../../assets/ceoimage.png'; 
import teamImg2 from '../../assets/studioteam1.png'; 
import teamImg3 from '../../assets/studioteam2.png'; 
import teamImg4 from '../../assets/studioteam3.png'; 
import ProjectFAQ from '../Project/ProjectFAQ';

// ==========================================
// SLOT COUNTER ANIMATION COMPONENT
// ==========================================
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value));

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Calibre offer?",
      answer: "We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <span ref={ref} className="studio-counter-slot-wrapper">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit))) return <span key={i} className="studio-counter-static-char">{digit}</span>;
        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="studio-counter-digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{ duration: 2.5, ease: [0.45, 0.05, 0.55, 0.95], delay: i * 0.1 }}
              className="studio-counter-digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span> {digit}</span>
                </>  
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
const OurStudioHome = () => {
  
  // Teams Data
  const teamMembers = [
    { name: "Ananya K", role: "Senior Project Manager", img: teamImg1, linkedin: "#", instagram: "#" },
    { name: "Arjun Mehta", role: "Principal Architect", img: teamImg2, linkedin: "#", instagram: "#" },
    { name: "Priya Selvan", role: "Lead Design Architect", img: teamImg3, linkedin: "#", instagram: "#" },
    { name: "Rohan", role: "Lead Structural Consultant", img: teamImg4, linkedin: "#", instagram: "#" }
  ];

  // FAQ Data & State
  const faqs = [
    {
      question: "What services does Calibre offer?",
      answer: "We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects."
    }
    // Neenga venumna innum questions ithula add pannikalam
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // Opens the first FAQ by default

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <div className="studio-home-page-container">
        <div className="studio-home-content-wrapper">
          {/* A. ABOUT US & COUNTERS SECTION */}
          <main className="studio-home-grid-layout">
            <div className="studio-home-header-block">
              <div className="studio-home-section-title">
                <span className="studio-home-yellow-square"></span>
                <h2>Our Studio</h2>
              </div>
              <div className="studio-home-title-underline"></div>
            </div>

            <div className="studio-home-about-indicator">
              <span className="studio-home-number">01</span>
              <span className="studio-home-dash">—</span>
              <span className="studio-home-text">ABOUT US</span>
            </div>

            <article className="studio-home-text-right">
              <h1 className="studio-home-hero-heading">
                Shaping purposeful spaces through clarity and craftsmanship.
                Where innovative design meets structural integrity. Transforming
                your vision into timeless, inhabitable art
              </h1>
              <p className="studio-home-hero-description">
                An architecture firm specializes in designing innovative,
                functional, and sustainable buildings, blending creativity with
                engineering expertise to transform spaces and meet the unique
                needs of clients
              </p>

              <div className="studio-counter-container">
                <div className="studio-counter-metric-row studio-counter-border-bottom">
                  <h2 className="studio-counter-metric-number">
                    <SlotCounter value={360} baseDirection="up" />
                    <span className="studio-counter-metric-suffix">+</span>
                  </h2>
                  <div className="studio-counter-metric-text">
                    Successful
                    <br />
                    Projects Done
                  </div>
                </div>

                <div className="studio-counter-metric-row studio-counter-border-bottom">
                  <h2 className="studio-counter-metric-number">
                    <SlotCounter value={12} baseDirection="up" />
                  </h2>
                  <div className="studio-counter-metric-text me-5">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>

                <div className="studio-counter-metric-row">
                  <h2 className="studio-counter-metric-number">
                    <SlotCounter value={97} baseDirection="up" />
                    <span className="studio-counter-metric-suffix">%</span>
                  </h2>
                  <div className="studio-counter-metric-text">
                    Client
                    <br />
                    Success Rate
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* B. CEO QUOTE SECTION */}
          <section className="ceo-section">
            <div className="ceo-container">
              <div className="ceo-text-content">
                <div className="ceo-quote-icon-box">
                  <span className="ceo-quote-mark">“</span>
                </div>
                <h2 className="ceo-quote-text">
                  "OUR MISSION IS TRANSFORMING VISIONARY IDEAS INTO ENDURING
                  STRUCTURAL REALITIES."
                </h2>
                <p className="ceo-author">Sky Kapture, Founder</p>
              </div>
              <div className="ceo-image-wrapper">
                <img src={ceoImg} alt="CEO & Founder" className="ceo-image" />
              </div>
            </div>
          </section>

          {/* C. SERVICES SECTION */}
          <section className="studio-services-section">
            <div className="studio-services-header-row">
              <div className="studio-services-indicator">
                <span className="studio-services-number">02</span>
                <span className="studio-services-dash">—</span>
                <span className="studio-services-text">AWARDS</span>
              </div>
              <h2 className="studio-services-main-title">
                We offer wide range of
                <br />
                services
              </h2>
              <div className="studio-services-spacer"></div>
            </div>

            <div className="studio-services-grid">
              <div className="studio-services-card studio-services-border-right">
                <div className="studio-services-icon-wrapper">
                  <img
                    src={serviceIcon1}
                    alt="Innovative Vision"
                    className="studio-services-icon"
                  />
                </div>
                <h3 className="studio-services-card-title">
                  Innovative Vision
                </h3>
                <p className="studio-services-card-desc">
                  Stux creates unique architectural designs that redefine modern
                  living spaces
                </p>
                <span className="studio-services-card-num">(01)</span>
              </div>

              <div className="studio-services-card studio-services-border-right">
                <div className="studio-services-icon-wrapper">
                  <img
                    src={serviceIcon2}
                    alt="Affordable Price"
                    className="studio-services-icon"
                  />
                </div>
                <h3 className="studio-services-card-title">Affordable Price</h3>
                <p className="studio-services-card-desc">
                  We provide premium architectural solutions at highly
                  competitive market prices.
                </p>
                <span className="studio-services-card-num">(02)</span>
              </div>

              <div className="studio-services-card">
                <div className="studio-services-icon-wrapper">
                  <img
                    src={serviceIcon3}
                    alt="Expert Team"
                    className="studio-services-icon"
                  />
                </div>
                <h3 className="studio-services-card-title">Expert Team</h3>
                <p className="studio-services-card-desc">
                  Precision and detail define every structure built by our
                  experts.
                </p>
                <span className="studio-services-card-num">(03)</span>
              </div>
            </div>
          </section>

          {/* D. TEAMS SECTION */}
          <section className="studio-team-section">
            <div className="studio-team-header-row">
              <div className="studio-team-indicator">
                <span className="studio-team-number">03</span>
                <span className="studio-team-dash">—</span>
                <span className="studio-team-text">TEAMS</span>
              </div>
              <h2 className="studio-team-main-title">
                Our Creative Team Behind
                <br />
                success
              </h2>
              <div className="studio-team-spacer"></div>
            </div>

            <div className="studio-team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="studio-team-card">
                  <div className="studio-team-image-box">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="studio-team-img"
                    />
                    <div className="studio-team-social-panel">
                      <a
                        href={member.linkedin}
                        className="studio-team-social-icon studio-team-ln"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          fill="#202A44"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                      <a
                        href={member.instagram}
                        className="studio-team-social-icon studio-team-ig"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          fill="none"
                          stroke="#202A44"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <button className="studio-team-trigger-btn">
                        <span className="studio-team-plus-symbol">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="studio-team-info">
                    <h3 className="studio-team-name">{member.name}</h3>
                    <p className="studio-team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <ProjectFAQ />
    </div>
  );
}

export default OurStudioHome;