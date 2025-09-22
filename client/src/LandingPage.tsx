import React from "react";
import "./LandingPage.css";

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="chicken-silhouette">
          {/* White chicken silhouette using CSS */}
          <div className="chicken-body"></div>
          <div className="chicken-head"></div>
          <div className="chicken-comb"></div>
          <div className="chicken-beak"></div>
          <div className="chicken-eye"></div>
          <div className="chicken-wing"></div>
          <div className="chicken-tail"></div>
          <div className="chicken-legs">
            <div className="leg left-leg"></div>
            <div className="leg right-leg"></div>
          </div>
        </div>

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
