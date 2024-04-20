// Price.js
import React, { useState } from "react";
import '../price.css'
import '../package/seo.css'
import Navbar from "../../src/components/Navbar";

const Seo = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic"); // State to keep track of selected plan

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div className="seoBg">
        <div className="seoNavbar"><Navbar/></div> <hr />
      <div className="container">
        <div className="price">
          <p className="title">SEO Package</p>
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
            className={`seo_priceCard ${selectedPlan === "Basic" ? "active" : ""}`}
          >
            <div className="topCardData">
              <h5>Basic Plan</h5>
              <p>Best For Personal Use</p>
              <h3>RS. 8000</h3>
            </div>
            <hr />
            
            <div className="seo_featuresCardData">
            <h4>Initial Website Analysis</h4>
  <p>Upto 10 Keyword Ranking</p>
  <p>Site Audit</p>
  <p>Competitor Analysis</p>
  <p>Google Analytics Setup</p>
  <p>Google Search Console Setup</p>
  <p>Robots.Txt Creation</p>
  <p>Sitemap Creation</p>
  <h4>On Page Setup</h4>
  <p>Keyword Research</p>
  <p>Keyword Mapping</p>
  <p>Few Major Pages Meta And Heading Tag Optimization</p>
  <p>URL Optimization</p>
  <p>Image Optimization</p>
  <p>2 SEO Optimized Blog Articles</p>
  <p>Few Existing Content Optimization</p>
  <h4>Technical SEO</h4>
  <p>Canonical URL Addition</p>
  <p>Custom 404 Page Setup</p>
  <p>OG Tags</p>
  <p>Page Redirection</p>
  <p>Sitemap</p>
  <p>Robots.Txt</p>
  <p>Browser Compatibility Check</p>
  <p>Page Speed Optimization</p>
  <p>Broken Link Fixing</p>
  <p className="uncheck">Site Architecture</p>
  <p className="uncheck">Mobile Friendliness</p>
  <p className="uncheck">Solve Keyword Cannibalization</p>
  <p className="uncheck">Hreflang Tags</p>
  <p className="uncheck">Competitor Backlink Research</p>
  <p className="uncheck">Other Webmaster Optimization</p>
  <h4>Off Page SEO</h4>
  <p className="uncheck">Link Building</p>
  <p className="uncheck">Guest Blogging</p>
  <p className="uncheck">Directory Submission</p>
  <p>Quora Posting</p>
  <p>Reddit Posting</p>
  <p>Schema Implementation</p>
  <p className="uncheck">Conversion Tracking</p>
  <p className="uncheck">Infographic Creation And Sharing</p>
  <h4>Local SEO</h4>
  <p>GMB Setup & Optimization</p>
  <p className="uncheck">GMB Posting</p>
  <p>Google Map Creation</p>
  <p className="uncheck">Local Citation</p>
  <h4>Monthly Report</h4>
  <p >Work Done Report</p>
  <p>On Page Report</p>
  <p className="uncheck">Backlink Report</p>
  <p>Traffic By Country</p>
  <p>Traffic Comparison</p>
  <p>Top 10 Performing Pages</p>
  <p>Top 10 Keywords</p>
  <p>Clicks, Impression, Position</p>
            </div>
          </div>
          <div
            className={`seo_priceCard ${
              selectedPlan === "Advanced" ? "active" : ""
            }`}
          >
            <div className="topCardData">
              <h5>Professional Plan</h5>
              <p>Best For Large Enterprises</p>
              <h3>RS. 13000</h3>
            </div>
            <hr />
            <div className="seo_featuresCardData">
            <h4>Initial Website Analysis</h4>
<p>Upto 20 Keyword Ranking</p>
<p>Site Audit</p>
<p>Competitor Analysis</p>
<p>Google Analytics Setup</p>
<p>Google Search Console Setup</p>
<p>Robots.Txt Creation</p>
<p>Sitemap Creation</p>
<p>On Page Setup</p>
<p>Keyword Research</p>
<p>Keyword Mapping</p>
<p>Major Pages Meta And Heading Tag Optimization</p>
<p>URL Optimization</p>
<p>Image Optimization</p>
<p>4 SEO Optimized Blog Articles</p>
<p>Existing Major Page Content Optimization</p>
<h4>Technical SEO</h4>
<p>Canonical URL Addition</p>
<p>Custom 404 Page Setup</p>
<p>OG Tags</p>
<p>Page Redirection</p>
<p>Sitemap</p>
<p>Robots.Txt</p>
<p>Browser Compatibility Check</p>
<p>Page Speed Optimization</p>
<p>Broken Link Fixing</p>
<p>Site Architecture</p>
<p>Mobile Friendliness</p>
<p>Solve Keyword Cannibalization</p>
<p>Hreflang Tags</p>
<p className="uncheck">Competitor Backlink Research</p>
<p className="uncheck">Bing Webmaster Optimization</p>
<h4>Off Page SEO</h4>
<p>Link Building</p>
<p className="uncheck">Guest Blogging</p>
<p>Few Directory Submission</p>
<p>Few Weekly Post On Quora</p>
<p>Few Weekly Post On Reddit</p>
<p>Schema Implementation</p>
<p className="uncheck">Conversion Tracking</p>
<p>Few Infographic Creation And Sharing</p>
<h4>Local SEO</h4>
<p>GMB Setup & Optimization</p>
<p>GMB Posting</p>
<p>Google Map Creation</p>
<p>Few Local Citation</p>
<h4>Monthly Report</h4>
<p>Work Done Report</p>
<h4>On Page Report</h4>
<p>Backlink Report</p>
<p>Traffic By Country</p>
<p>Traffic Comparison</p>
<p>Top 10 Performing Pages</p>
<p>Top 10 Keywords</p>
<p>Clicks, Impressions, Position add this in p tag separately</p>

            </div>
          </div>
          <div
            className={`seo_priceCard ${
              selectedPlan === "Premium" ? "active" : ""
            }`}
          >
            

            <div className="topCardData">
              <h5>Premium Plan</h5>
              <p>Best For Medium Businesses</p>
              <h3>RS. 18000</h3>
            </div>
            <hr />
            <div className="seo_featuresCardData">
            <h4>Initial Website Analysis</h4>
<p>Upto 40 Keyword Ranking</p>
<p>Site Audit</p>
<p>Competitor Analysis</p>
<p>Google Analytics Setup</p>
<p>Google Search Console Setup</p>
<p>Robots.Txt Creation</p>
<p>Sitemap Creation</p>
<h4>On Page Setup</h4>
<p>Keyword Research</p>
<p>Keyword Mapping</p>
<p>Major Pages Meta And Heading Tag Optimization</p>
<p>URL Optimization</p>
<p>Image Optimization</p>
<p>6 SEO Optimized Blog Articles</p>
<p>Existing Major Page Content Optimization</p>
<h4>Technical SEO</h4>
<p>Canonical URL Addition</p>
<p>Custom 404 Page Setup</p>
<p>OG Tags</p>
<p>Page Redirection</p>
<p>Sitemap</p>
<p>Robots.Txt</p>
<p>Browser Compatibility Check</p>
<p>Page Speed Optimization</p>
<p>Broken Link Fixing</p>
<p>Site Architecture</p>
<p>Mobile Friendliness</p>
<p>Solve Keyword Cannibalization</p>
<p>Hreflang Tags</p>
<p>Competitor Backlink Research</p>
<p>Bing Webmaster Optimization</p>
<h4>Off Page SEO</h4>
<p>Link Building</p>
<p>Guest Blogging</p>
<p>Few Directory Submission</p>
<p>Active On Quora</p>
<p>Active On Reddit</p>
<p>Schema Implementation</p>
<p>Conversion Tracking</p>
<p>Monthly 1 Infographic Creation And Sharing</p>
<h4>Local SEO</h4>
<p>GMB Setup & Optimization</p>
<p>GMB Posting</p>
<p>Google Map Creation</p>
<p>Local Citation</p>
<h4>Monthly Report</h4>
<p>Work Done Report</p>
<p>On Page Report</p>
<p>Backlink Report</p>
<p>Traffic By Country</p>
<p>Traffic Comparison</p>
<p>Top 10 Performing Pages</p>
<p>Top 10 Keywords</p>
<p>Clicks, Impression, Position</p>

            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Seo;


