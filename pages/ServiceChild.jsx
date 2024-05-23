import React from "react";
import "./serviceChild.css";
import { useNavigate } from "react-router-dom";

const ServiceChild = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="servceChild_Heading">
        <h2 className="title">What we do</h2>
        <p className="sersecondryHeading">
          Find a team of digital marketers you can rely on. Every day, we build
          trust <br /> through communication, transparency, and results.
        </p>
      </div>
      <div className="servicechild_Grid">
        <div className="card firstCard">
          <h3>
            Save more and get visibility <br /> for your business.
          </h3>
          <button className="contactBtn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (3).png" alt="" />
            <h3>Graphic Design</h3>
            <p>
              Elevate your brand with our graphic design service, delivering
              captivating visuals that leave a lasting impression on your
              audience.
            </p>
          </div>
        </div>
        <div className="card" data-aos="fade-right">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (2).png" alt="" />
            <h3>Digital Marketing</h3>
            <p>
              Unlock your digital potential with our tailored marketing
              solutions, designed to amplify your brand and drive business
              growth online.
            </p>
          </div>
        </div>
        <div className="card" data-aos="fade-up">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (5).png" alt="" />
            <h3>App Development</h3>
            <p>
              Transforming ideas into intuitive apps, our development service
              blends innovation and user-centric design to meet your needs
              effectively
            </p>
          </div>
        </div>
        <div className="card" data-aos="fade-left">
          <div className="serviceContent">
            <img
              className="serviceIcon"
              src="/img/service (1).png"
              alt=""
            />
            <h3>Website Development</h3>
            <p>
              Our web development services empower your online presence,
              combining creativity and functionality to drive engagement
              and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceChild;
