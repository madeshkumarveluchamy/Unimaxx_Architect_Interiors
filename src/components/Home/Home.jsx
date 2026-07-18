import { useState, useEffect } from 'react';
import './css/Home.css';

// Thumbnail images மட்டுமே import செய்கிறோம்
import thumb2 from '../../assets/thumb7.png';
import thumb1 from '../../assets/thumb4.png';
import thumb3 from '../../assets/thumb5.png';
import thumb4 from '../../assets/thumb6.png';

const thumbs = [
  {
    image: thumb2,
    title: 'Azure Hallway',
    link: '#1',
    // ஒவ்வொரு slide-க்கும் தேவையான மெயின் கன்டென்ட்டை இங்கே சேர்க்கிறோம்
    heading: 'Where Aesthetics Meet Purposeful Living',
    description: 'We create interiors that blend timeless elegance with modern functionality, reflecting your story and lifestyle. Let\'s build something beautiful together.',
  },
  {
    image: thumb1,
    title: 'Coastal Serenity',
    link: '#2',
    heading: 'Experience The Coastal Serenity',
    description: 'Bring the calm and soothing vibes of the ocean into your home with our specialized coastal design approach.',
  },
  {
    image: thumb3,
    title: 'Elegant Space',
    link: '#3',
    heading: 'Redefining Elegant Spaces',
    description: 'Luxurious textures and premium finishes that elevate your everyday living experience to a whole new level.',
  },
  {
    image: thumb4,
    title: 'Minimalist Dining',
    link: '#4',
    heading: 'The Beauty of Minimalist Dining',
    description: 'Less is more. Create a clutter-free, highly functional dining area that focuses on what truly matters.',
  },
];


const Home = () => {
  const [currentThumb, setCurrentThumb] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumb((prev) => (prev + 1) % thumbs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      
      {/* =========================================
          புதிதாக சேர்க்கப்பட்ட Background Slider 
          ========================================= */}
      {thumbs.map((thumb, index) => (
        <div
          key={`bg-${index}`}
          className={`hero-bg ${index === currentThumb ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${thumb.image})`,
          }}
        ></div>
      ))}
      
      {/* மெயின் கன்டென்ட் - பழையபடி அப்படியே இருக்கட்டும் */}
      <main className="main-content">
        <div className="left-indicator-bar">
          <div className="orange-dot"></div>
          <div className="vertical-line"></div>
          <div className="hollow-square"></div>
        </div>

        <div className="text-section">
          <h1 className="hero-title" key={`title-${currentThumb}`}>
            {thumbs[currentThumb].heading}
          </h1>
          <p className="hero-description" key={`desc-${currentThumb}`}>
            {thumbs[currentThumb].description}
          </p>

          <div className="thumbnail-card">
            <img
              key={currentThumb}
              src={thumbs[currentThumb].image}
              alt={thumbs[currentThumb].title}
              className="thumb-img thumb-fade"
            />
            <div className="thumbnail-footer">
              <span className="thumb-title">{thumbs[currentThumb].title}</span>
              <a href={thumbs[currentThumb].link} className="thumb-arrow">➔</a>
            </div>
          </div>

          <div className="action-row">
            <a href="#add" className="plus-btn">🞡</a>
            <a href="#book" className="book-call-btn">Book a Call</a>
          </div>
        </div>
      </main>

      <div className="watermark-wrap">
        <div className="huge-watermark">archiste</div>
      </div>
    </div>
  );
};

export default Home;