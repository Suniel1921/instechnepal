import React from "react";
import "./about.css";
import OurTeam from "./OurTeam";
import Navbar from "../src/components/Navbar";
import "./servicesPage.css";
import ServiceChild from "./ServiceChild";

const ServicePage = () => {
  return (
    <>
      <div className="servicePageBg">
        <div className="servicesPageNavbar">
          <Navbar />
        </div>
        {/* fix this later */}
        <div className="container">
          <div className="servicePage">
            <div className="left_servicePage">
              {/* <img className="aboutImg" src="./img/asset 11.png" alt="" /> */}
            </div>
            <div className="right_servicePage">
              <h3 className="servicePage_Heading">
              Elevate Your Digital Presence with Nepal Tech Innovations.
              </h3>
              <p className="servicePage_Para">At Nepal Tech Innovations, we specialize in development, marketing, and design solutions. Our expert team ensures your digital presence shines with innovative web applications, effective marketing strategies, and captivating designs tailored to your brand. Whether you're looking to expand your online reach, increase engagement, or enhance your brand image, we're here to help you achieve your goals.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="services_component what_we_do">
        <ServiceChild />
      </div>
    </>
  );
};

export default ServicePage;
