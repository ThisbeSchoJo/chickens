import React from "react";
import "./LandingPage.css";

interface LandingPageProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <button className="chicken-silhouette" onClick={onEnterApp}>
          <div className="chicken-emoji">🐓</div>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
