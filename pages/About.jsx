import React from 'react';
import './about.css';
import Footer from '../src/components/Footer';
import OurTeam from './OurTeam';

const About = () => {
  return (
    <>
        <div className='container'>
            <div className='about'>
            <div className="left_about">
              <img className='aboutImg' src="./img/asset 11.png" alt="" />
            </div>
            <div className="right_about">
              <h3 className='aboutHeading'>We Have Creative Team To Build Your Website Better</h3>
              <p className='aboutPara'>Proin laoreet leo vel enim gravida, at porttitor metus ultricies. Cras eu velit enim. Vivamus blandit, dolor ut aliquet rutrum, ex elit mattis sapien, non molestie felis neque et nulla. Sed euismod turpis id nibh suscipit semper. Pellentesque dapibus risus arcu.</p>

              <div className='points'>
                <div>
                <h3>Quality Assurance</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad debitis sequi quia!.</p>
                </div>
                <div>
                <h3>Certified professionals</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad debitis sequi quia!.</p>
                </div>
               <div>
               <h3>Real Experiences</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad debitis sequi quia!.</p>
               </div>
              </div>
            </div>
            </div>
        </div>

       <div className='services_component'> <OurTeam/></div>
        <div className='aboutFooter services_component'><Footer/></div>
    </>
  )
}

export default About