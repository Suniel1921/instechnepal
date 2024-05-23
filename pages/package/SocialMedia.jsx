import React, { useState } from "react";
import "../price.css";
import "../package/socialmedia.css";
import Navbar from "../../src/components/Navbar";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic"); // State to keep track of selected plan
  const [expandedQuestion, setExpandedQuestion] = useState(null); // State to track expanded question
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleQuestionClick = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };


  // FAQ data
  const faqData = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time based on your business needs. Please contact our support team for assistance with plan changes.",
    },
    {
      question: "Is there a contract or commitment period?",
      answer:
        "No, our plans are offered on a month-to-month basis with no long-term contracts. You can cancel or modify your subscription anytime without any penalties.",
    },
    {
      question: " How can social media management benefit my business?",
      answer : "Social media boosts brand awareness, engagement, website traffic, leads, and customer satisfaction."
    },
    {
      question: "Common social media management mistakes to avoid?",
      answer : "Common mistakes to avoid in social media management include inconsistent posting, ignoring customer feedback, overposting or overposting irrelevant content, not optimizing content for each platform, and neglecting to track and analyze metrics."
    },
    {
      question : " Are there hidden costs in Social Media Marketing?",
      answer : "No, there are no such hidden costs. However, just to be clear, the advertising cost and VAT is excluded from the package."
      
    }
   
  ];

  return (
    <>
      <div className="socialMediaBg">
        <div className="socialMediaNavbar">
          <Navbar />
        </div>{" "}
        <hr />
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
              className={`socialMedia_priceCard ${
                selectedPlan === "Basic" ? "active" : ""
              }`}
            >
              <div className="topCardData">
                <h5>Basic Plan</h5>
                <p>Best For Personal Use</p>
                <h3>Rs.9,999/months</h3>
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
                <h3>Rs 14,999/months</h3>
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
                <h3>19,999/months </h3>
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
            <p className="note">Note: Package can be customzed as per you need.</p>
            <li className="note">All of above Packages are Exclusive of VAT </li>
          {/* FAQ Section */}
          <div className="faqsHeading">
            <h3>FAQs</h3>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="faqSection">
            <div className="leftFaqs">
              {faqData.map((faq, index) => (
                <div
                  className="faqItem"
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className="faqsSection">
                  <h4 className="faqsQuestion"> {faq.question} 
                    <FaPlusCircle className="plusIcon" style={{ marginLeft: "30px" }} /></h4>
                  {expandedQuestion === index && <p>{faq.answer}</p>}</div>
                </div>
              ))}
            </div>

            <div className="rightFaqs">
              <div className="faqsBox">
                <h3>Questions ?</h3>
                <h3>Is your answer not covered?</h3>
                <p>Let us help you with all your <br /> unanswered question. Contact us</p>
                <button onClick={()=>navigate('/contact')} className="faqsBtn">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
