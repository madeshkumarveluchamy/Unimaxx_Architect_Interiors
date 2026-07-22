import { useState } from 'react';
import './css/faqSection.css';

const faqsData = [
  { 
    question: 'What services does Calibre offer?',
    answer: 'We provide full-service interior design, home styling, space planning, and renovation support for residential and select commercial projects.' 
  },
  { 
    question: 'How does a typical project start?',
    answer: 'We begin with an initial consultation to understand your vision and requirements.'
  },
  { 
    question: 'Do you handle renovations as well as design?',
    answer: 'Yes, we provide end-to-end renovation support alongside our design services.' 
  },
  { 
    question: 'Can you work with an existing space or furniture?', 
    answer: 'Absolutely, we can integrate your existing pieces into our design plans.' 
  },
  { 
    question: 'What is the typical project timeline?', 
    answer: 'Timelines vary based on project scope, which we discuss during our initial assessment.' 
  },
];

const FaqsSection = () => {
  // 0 means the first question is open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="sk-faq-section">
      <div className="sk-faq-header">
        <div className="sk-faq-labels-wrapper1">
          <span className="sk-faq-orange-square4"></span> Client Resources
        </div>
        <h1 className="sk-faq-title">Got Questions?</h1>
        <p className="sk-faq-sub">We've answered some of the most common questions about our services.</p>
        <button className="sk-faq-btn">
          <span className="sk-faq-btn-text">Contact Us</span>
          <span className="sk-faq-btn-arrow">↗</span>
        </button>
      </div>

      <div className="sk-faq-accordion">
        {faqsData.map((item, index) => (
          <div 
            key={index} 
            className={`sk-faq-item ${activeIndex === index ? 'sk-faq-active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="sk-faq-question">
              <span>{item.question}</span>
              <span className="sk-faq-icon">{activeIndex === index ? '—' : '+'}</span>
            </div>
            
            {/* The wrapper that handles the animation (NO && condition here!) */}
            <div className={`sk-faq-answer-wrapper ${activeIndex === index ? 'sk-faq-open' : ''}`}>
              <div className="sk-faq-answer">
                <div className="sk-faq-answer-inner">
                  {item.answer}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;