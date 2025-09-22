import React from "react";
import "./LandingPage.css";

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="chicken-silhouette">🐓</div>

        <div className="landing-text">
          <h1>Chickens</h1>
          <p>Manage your flock with ease</p>
        </div>

        <button className="enter-btn" onClick={onEnterApp}>
          Enter App
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
