import React from "react";
import "./about.css";
import OurTeam from "./OurTeam";
import Navbar from "../src/components/Navbar";

const About = () => {
  return (
    <>
     
       <div className="aboutBg">
       <div className="aboutNavbar"> <Navbar /> </div>   {/* fix this later */}
      <div className="container">
       <div className="about">
          <div className="left_about">
            {/* <img className="aboutImg" src="./img/asset 11.png" alt="" /> */}
          </div>
          <div className="right_about">
            <h3 className="aboutHeading">
              We Have Creative Team To Build Your Business Better
            </h3>
            <p className="aboutPara">
            At the heart of our operations lies a dynamic and innovative team dedicated to sculpting success for your business. With a potent blend of creativity, expertise, and passion, we strive to craft bespoke solutions tailored to your unique needs. Trust our seasoned professionals to navigate the complexities of the market landscape and propel your business towards unparalleled growth and prosperity.
            </p>

            <div className="points">
              <div>
                <h3>Quality Assurance</h3>
                <p>
                Ensuring excellence through rigorous testing and commitment to standards.
                </p>
              </div>
              <div>
                <h3>Certified professionals</h3>
                <p>
                Trusted experts with certified qualifications ensuring top-notch services and solutions.
                </p>
              </div>
              <div>
                <h3>Real Experiences</h3>
                <p>
                Genuine encounters providing authentic insights and invaluable learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div className="services_component">
        <OurTeam />
      </div>
    </>
  );
};

export default About;
