import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Background image container */}
      <div className="background-container">
        <div className="content">
          <h1>Welcome to Our Educational Platform</h1>
          <p>Explore resources and content to boost your knowledge and skills.</p>
          <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
            <button className="explore-btn">Explore Now</button>
          </a>
        </div>
      </div>

      {/* Feature sections */}
      <div className="feature-sections">
        <div className="feature-card">
          <h3>Courses</h3>
          <p>Discover a variety of online courses in technology, business, and more.</p>
        </div>
        <div className="feature-card">
          <h3>Webinars</h3>
          <p>Join live sessions with industry experts to learn about the latest trends.</p>
        </div>
        <div className="feature-card">
          <h3>Resources</h3>
          <p>Access e-books, articles, and tutorials to deepen your understanding.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-box">
          <h4>About Us</h4>
          <p>Our mission is to make quality education accessible to everyone.</p>
        </div>
        <div className="footer-box">
          <h4>Contact</h4>
          <p>Email: sandhyanaik3249@gmail.com</p>
          <p>Phone: 8431556194</p>
        </div>
        <div className="footer-box">
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
