import React, { useState } from "react";
import "./price.css";
const Price = () => {
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
            Choose Best Plan For Your Business Wordpress
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
          <div
            className={`priceCard ${selectedPlan === "Basic" ? "active" : ""}`}
          >
            <div className="topCardData">
              <h5>Basic Plan</h5>
              <p>Best For Personal Use</p>
              <h3>RS. 35,000</h3>
            </div>
            <hr />

            <div className="featuresCardData">
              <p>Free Domain & Hosting - 1 Year</p>
              <p>Responsive Design</p>
              <p>Unlimited Bandwidth</p>
              <p>Basic Social Media Integration</p>
              <p>Dynamic website up to 10 Pages</p>
              <p>Free SSL Certificate</p>
              <p>Basic SEO Optimization</p>
              <p>Support & Maintenance- 3 months</p>
              <p>Basic Admin Panel</p>
            </div>
          </div>
          <div
            className={`priceCard ${
              selectedPlan === "Advanced" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Premium Plan</h5>
              <p>Best For Large Enterprises</p>
              <h3>RS. 70,000</h3>
            </div>
            <hr />
            <div className="featuresCardData">
              <p>Free Domain & Hosting - 1 Year </p>
              <p>Responsive Design </p>
              <p>Unlimited Bandwidth </p>
              <p>Advanced Social Media Integration </p>
              <p>Dynamic website Unlimited pages </p>
              <p>Free SSL Certificate </p>
              <p>Advance SEO Optimization </p>
              <p>Blog Section with Custom Layout </p>
              <p>Support & Maintenance-1 year</p>
              <p>Advanced integration with Google analytics</p>
              <p>Advanced Admin Panel with Charts </p>
            </div>
          </div>
          <div
            className={`priceCard ${
              selectedPlan === "Premium" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Advanced Plan</h5>
              <p>Best For Medium Businesses</p>
              <h3>RS. 50,000</h3>
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
              <p>Support & Maintenance-6 months</p>
              <p>Basic integration with Google analytics</p>
              <p>Advanced Admin Panel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
