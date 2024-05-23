import React, { useState } from "react";
// import "./price.css";
const WordpressPrice = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic"); // State to keep track of selected plan

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div className="container">
        <div className="price">
          <p className="title">OUR PRICING</p>
          <h3 className="secondaryHeading">
          Explore the Power of WordPress <br /> Choose the Perfect Plan for Your Business.
          </h3>
          {/* Buttons for smaller screens */}
          <div className="priceButtons">
            <button
              className={selectedPlan === "Basic" ? "active" : ""}
              onClick={() => handlePlanSelect("Basic")}
            >
              Basic
            </button>
            <button
              className={selectedPlan === "Advanced" ? "active" : ""}
              onClick={() => handlePlanSelect("Advanced")}
            >
              Advanced
            </button>
            <button
              className={selectedPlan === "Premium" ? "active" : ""}
              onClick={() => handlePlanSelect("Premium")}
            >
              Premium
            </button>
          </div>
        </div>
        <div className="priceContainer">
          <div data-aos="fade-up"
            className={`priceCard ${selectedPlan === "Basic" ? "active" : ""}`}
          >
            <div className="topCardData">
              <h5>Basic Plan</h5>
              <p>Best For Personal Use</p>
              <h3>RS. 17,000</h3>
            </div>
            <hr />
      

            <div className="featuresCardData">
              <p>Free Domain & Hosting - 1 Year</p>
              <p>Responsive Design</p>
              <p>Unlimited Bandwidth</p>
              <p>Self C-Panel</p>
              <p>Basic Website Analytics</p>
              <p>Social Media Integration</p>
              <p>Free SSL Certificate</p>
              <p>Basic SEO Optimization</p>
              <p>Support & Maintenance- 1 Year</p>
            </div>
          </div>
          <div data-aos="fade-up"
            className={`priceCard ${
              selectedPlan === "Advanced" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Premium Plan</h5>
              <p>Best For Large Enterprises</p>
              <h3>RS. 45,000</h3>
            </div>
            <hr />
            <div className="featuresCardData">
              <p>Free Domain & Hosting - 1 Year </p>
              <p>Responsive Design </p>
              <p>Unlimited Bandwidth </p>
              <p>Self C-Panel</p>
              <p>Social Media Integration </p>
              <p>Dynamic website Unlimited pages </p>
              <p>Free SSL Certificate </p>
              <p>Advance SEO Optimization </p>
              <p>Ecommerce </p>
              <p>Support & Maintenance-1 year</p>
              <p>Advanced Google analytics</p>
              <p>Live Chart Integration</p>
              <p>High Performance & Security</p>
              <p>3 Premium Theme Access</p>
              <p>Scalability Options</p>
              <p>Webiste Backup 1 Year</p>
              
            </div>
          </div>
          <div data-aos="fade-up"
            className={`priceCard ${
              selectedPlan === "Premium" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Advanced Plan</h5>
              <p>Best For Medium Businesses</p>
              <h3>RS. 30,000</h3>
            </div>
            <hr />
            <div className="featuresCardData">
              <p>Free Domain & Hosting - 1 Year </p>
              <p>Responsive Design </p>
              <p>Unlimited Bandwidth </p>
              <p>Premium Social Media Integration </p>
              <p>Dynamic website up to 20 Pages </p>
              <p>Free SSL Certificate</p>
              <p>SEO Optimization </p>
              <p>Blog Section </p>
              <p>Payment Integration</p>
              <p>Support & Maintenance- 1 year months</p>
              <p>Advanced Google analytics</p>
              <p>Integration Custom Features</p>
              <p>Website Backup - 1 Year Free</p>
              <p>Real Time Security Scan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordpressPrice;
