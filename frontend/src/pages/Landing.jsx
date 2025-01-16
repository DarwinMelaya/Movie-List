import { Link } from "react-router-dom";
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Mobiflix</h1>
          <h2>Your Ultimate Movie Streaming Destination</h2>
          <p className="hero-description">
            Discover thousands of movies, from classics to the latest releases.
            Start your cinematic journey today.
          </p>
          <Link to="/home" className="cta-button">
            Explore Movies <span className="arrow">→</span>
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-film"></i>
          </div>
          <div className="feature-text">
            <h2>Extensive Movie Collection</h2>
            <p>
              Access a vast library of movies across all genres. From
              action-packed blockbusters to heartwarming dramas, we've got it
              all.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="feature-text">
            <h2>Create Your Watchlist</h2>
            <p>
              Save your favorite movies to watch later. Build your personal
              collection of must-watch films with our easy-to-use favorites
              feature.
            </p>
          </div>
        </div>
      </div>
      <footer className="landing-footer">
        <div className="footer-content">
          <p className="copyright">© 2024 MovieFlix. All rights reserved.</p>
          <p className="creator">Created by Darwin Melaya</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
