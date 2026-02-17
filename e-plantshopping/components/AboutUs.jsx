import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">🌿 Paradise Nursery</h1>

        <p className="landing-description">
          Welcome to Paradise Nursery — your trusted destination for premium
          indoor plants that bring freshness, positivity, and elegance into
          your home and workspace.
        </p>

        <p className="landing-subtext">
          We specialize in a curated collection of aromatic and medicinal
          plants designed to enhance well-being and improve air quality.
          Whether you are a beginner plant parent or an experienced gardener,
          we have something perfect for you.
        </p>

        <Link to="/products">
          <button className="primary-btn">
            Get Started 🌱
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
