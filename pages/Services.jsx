// import React, { useEffect } from "react";
// import "./services.css";
// import Navbar from "../src/components/Navbar";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";

// const Services = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // You can adjust the duration as needed
//   }, []); // This runs once on component mount

//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="serviceBg">
//         {/* <div className='serviceNavbar'><Navbar/></div> */}
//         <div className="container">
//           <div className="services">
//             <div className="left_services_section">
//               <div className="leftContent">
//                 <p className="title">Our Services</p>
//                 <h3 className="secondryHeading">
//                   Our Services Solve Any Problems
//                 </h3>
//                 <p className="parasssss">
//                   We're your one-stop destination for software solutions. From
//                   app and website development to graphic design and digital
//                   marketing, we've got you covered. Count on us to solve any
//                   problem and drive your business forward."
//                 </p>
//                 <p className="parasssss marginPara">
//                   “We're a purpose-driven company offering cost-effective
//                   marketing tools for ambitious individuals and teams, guided by
//                   our core values.”
//                 </p>
//                 <button
//                   className="btn discoBtn"
//                   onClick={() => navigate("/contact")}
//                 >
//                   Discover More
//                 </button>
//               </div>
//             </div>

//             <div className="right_services_section">
//               <div className="cardContainer">
//                 <div className="childCard" data-aos="fade-up">
//                   <img
//                     className="serviceIcon"
//                     src="/img/service (1).png"
//                     alt=""
//                   />
//                   <h3>Website Development</h3>
//                   <p>
//                     Our web development services empower your online presence,
//                     combining creativity and functionality to drive engagement
//                     and success.
//                   </p>
//                 </div>
//                 <div className="childCard">
//                   <img
//                     className="serviceIcon"
//                     src="/img/service (5).png"
//                     alt=""
//                   />
//                   <h3>App Development</h3>
//                   <p>
//                     Transforming ideas into intuitive apps, our development
//                     service blends innovation and user-centric design to meet
//                     your needs effectively
//                   </p>
//                 </div>
//                 <div className="childCard">
//                   <img
//                     className="serviceIcon"
//                     src="/img/service (2).png"
//                     alt=""
//                   />
//                   <h3>Digital Marketing</h3>
//                   <p>
//                     Unlock your digital potential with our tailored marketing
//                     solutions, designed to amplify your brand and drive business
//                     growth online.
//                   </p>
//                 </div>
//                 <div className="childCard">
//                   <img
//                     className="serviceIcon"
//                     src="/img/service (3).png"
//                     alt=""
//                   />
//                   <h3>Graphic Design</h3>
//                   <p>
//                     Elevate your brand with our graphic design service,
//                     delivering captivating visuals that leave a lasting
//                     impression on your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;






import React, { useEffect } from "react";
import "./services.css";
import Navbar from "../src/components/Navbar";
import { useNavigate } from "react-router-dom";

import "aos/dist/aos.css";

const Services = () => {
  const navigate = useNavigate();



  return (
    <>
      <div className="serviceBg">
        {/* <div className='serviceNavbar'><Navbar/></div> */}
        <div className="container">
          <div className="services">
            <div className="left_services_section" data-aos="fade-right">
              <div className="leftContent">
                <p className="title">Our Services</p>
                <h3 className="secondryHeading">
                  Our Services Solve Any Problems
                </h3>
                <p className="parasssss">
                  We're your one-stop destination for software solutions. From
                  app and website development to graphic design and digital
                  marketing, we've got you covered. Count on us to solve any
                  problem and drive your business forward."
                </p>
                <p className="parasssss marginPara">
                  “We're a purpose-driven company offering cost-effective
                  marketing tools for ambitious individuals and teams, guided by
                  our core values.”
                </p>
                <button
                  className="btn discoBtn"
                  onClick={() => navigate("/contact")}
                >
                  Discover More
                </button>
              </div>
            </div>

            <div className="right_services_section">
              <div className="cardContainer">
                <div className="childCard" data-aos="fade-up">
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
                <div className="childCard" data-aos="fade-up">
                  <img
                    className="serviceIcon"
                    src="/img/service (5).png"
                    alt=""
                  />
                  <h3>App Development</h3>
                  <p>
                    Transforming ideas into intuitive apps, our development
                    service blends innovation and user-centric design to meet
                    your needs effectively
                  </p>
                </div>
                <div className="childCard" data-aos="fade-up">
                  <img
                    className="serviceIcon"
                    src="/img/service (2).png"
                    alt=""
                  />
                  <h3>Digital Marketing</h3>
                  <p>
                    Unlock your digital potential with our tailored marketing
                    solutions, designed to amplify your brand and drive business
                    growth online.
                  </p>
                </div>
                <div className="childCard" data-aos="fade-up">
                  <img
                    className="serviceIcon"
                    src="/img/service (3).png"
                    alt=""
                  />
                  <h3>Graphic Design</h3>
                  <p>
                    Elevate your brand with our graphic design service,
                    delivering captivating visuals that leave a lasting
                    impression on your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
