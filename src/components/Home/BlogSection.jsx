
import './css/BlogSection.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

const blogPosts = [
  { id: 1, title: 'How thoughtful architecture elevates everyday living', date: 'Jun 9, 2026', location: 'Coimbatore', img: blog1 },
  { id: 2, title: 'Why spatial flow matters in residential architecture', date: 'Sep 5, 2025', location: 'Coimbatore', img: blog2 },
  { id: 3, title: 'Sustainable design principles in modern architecture', date: 'Feb 11, 2026', location: 'Coimbatore', img: blog3 },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="label-tag3">
          <span className="orange-square3"></span> Architectural Insights
        </div>
        <div className="title-wrapper-blog">
          <h2>Blog Articles</h2>
        </div>
        <div className="actions-wrapper">
          <p>We share insights on design, planning, and our process.</p>
          <button className="blog-btn">
    <span className="blog-btn-text">Read More</span>
    <span className="blog-btn-arrow">↗</span>
</button>
        </div>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="img-holder">
              <img src={post.img} alt={post.title} />
              <span className="cat-pill">Architecture</span>
            </div>
            <div className="meta-info">{post.date} • {post.location}</div>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;