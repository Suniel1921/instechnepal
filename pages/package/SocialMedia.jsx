// Price.js
import React, { useState } from "react";
import "../price.css"
import '../package/socialmedia.css'
import Navbar from "../../src/components/Navbar";

const SocialMedia = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic"); // State to keep track of selected plan

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
     <div className="socialMediaBg">
        <div className="socialMediaNavbar"><Navbar/></div> <hr />
     <div className="container">
        <div className="price">
          <p className="title">Social media management</p>
          <h3 className="secondaryHeading">
            Choose Best Plan For Your Business
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
            className={`socialMedia_priceCard ${selectedPlan === "Basic" ? "active" : ""}`}
          >
            <div className="topCardData">
              <h5>Basic Plan</h5>
              <p>Best For Personal Use</p>
              <h3>Rs.7000/months</h3>
            </div>
            <hr />
           

            <div className="socialMedia_featuresCardData">
              <p>Planning And Strategy</p>
              <p>Profile / Cover Image Creation [Included]</p>
              <p>10 Graphical Banners </p>
              <p>2 GIFs (10 Secs) Or 1 Video(20 Secs Or Less)</p>
              <p>Platforms: Facebook,Instagram</p>
              <p>1 Free Festive Post </p>
              <p>Content Calendar</p>
              <p>Organic Promotion</p>
              <p>Monthly Reporting</p>
              <p>Keyword Based Content </p>
              <p>Direct Advertisement + Ads Manager</p>
            </div>
          </div>
          <div
            className={`socialMedia_priceCard ${
              selectedPlan === "Advanced" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Premium Plan</h5>
              <p>Best For Large Enterprises</p>
              <h3>Rs 12000/months</h3>
            </div>
            <hr />
            <div className="socialMedia_featuresCardData">
              <p>Social Media Management </p>
              <p>Planning And Strategy </p>
              <p>Profile / Cover Image Creation [Included]</p>
              <p>15 Graphical Banners </p>
              <p>3 GIFs (10 Secs) / 3 Video (20 Secs Or Less)</p>
              <p>Platforms: Facebook,Instagram, Tiktok And LinkedIn </p>
              <p>Competitor Analysis </p>
              <p>5 Free Festive Post </p>
              <p>Content Calendar </p>
              <p>Organic Promotion</p>
              <p>Lead Generation</p>
              <p>Customer Review Weekly Meeting</p>
            </div>
          </div>
          <div
            className={`socialMedia_priceCard ${
              selectedPlan === "Premium" ? "active" : ""
            }`}
          >
            

            <div className="topCardData">
              <h5>Advanced Plan</h5>
              <p>Best For Medium Businesses</p>
              <h3>18000/months </h3>
            </div>
            <hr />
            <div className="socialMedia_featuresCardData">
              <p>Social Media Management </p>
              <p>Planning And Strategy </p>
              <p>Profile / Cover Image Creation [Included]</p>
              <p>20 Graphical Banners </p>
              <p>4 GIFs (15 Secs) / 3 Video (60 Secs Or Less)</p>
              <p>DyPlatforms: Facebook,Instagram, Tiktok And LinkedIn </p>
              <p>Competitor Analysis </p>
              <p>8 Free Festive Post </p>
              <p>Content Calendar </p>
              <p>Organic Promotion</p>
              <p>Lead Generation</p>
              <p>Customer Review Weekly Meeting</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default SocialMedia;
