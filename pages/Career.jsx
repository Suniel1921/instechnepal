import React from 'react'
import Navbar from '../src/components/Navbar'
import './career.css'
import CareerBtn from '../src/components/careers/CareerBtn'

const Career = () => {
  return (
    <div className='services_component career'>
        <div className="servicesPageNavbar"><Navbar/></div>
        <div className='container'>
            <h3>welcome to the carrer page of Nepal Tech Innovation</h3>
        <div className='careerContainer'>
            <div className="leftCareer" data-aos="fade-right">
                <h2 className='careerHeading'>Career</h2>
                <p>At Nepal Tech Innovations, we believe in building a team of passionate individuals who are committed to making a difference. <br /> Join us and become part of a dynamic workplace where your talents are valued and your ideas are encouraged.</p>
            </div>
            <div className="rightCareer" data-aos="fade-left">
                <img src="/img/careerImg.png" alt="" />
            </div>

        </div>

        <div className='openJobSection'>
            <h4>Opened jobs</h4>
            <h2>Let's Find You An Open Jobs</h2>
            <CareerBtn/>
            {/* <p>Thank you for considering a career at Nepal Tech Innovations. While we don't have any current openings, <br /> we're always looking for talented individuals to join our team. Stay connected with us for future opportunities!</p> */}
        </div>
      
    </div>
    </div>
  )
}

export default Career
