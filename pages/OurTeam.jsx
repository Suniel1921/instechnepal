import React from 'react';
import './ourteam.css';

const OurTeam = () => {
    return (
        <div className="container">
        <div className='teamHeading'>
                    <p className='title'>OUR TEAM</p>
                    <h3 className='secondryHeading'>MEET OUR TEAM</h3>
                </div>
            <div className="ourTeam">
                <div className="teamCard">
                    <img className='teamImg' src="./img/sunitamam.jpg" alt="" />
                    <h4>Sunita Dulal</h4>
                    <p>Front-end Developer</p>
                </div>
                <div className="teamCard">
                    <img className='teamImg' src="./img/sunil.png" alt="" />
                    <h4>Suniel Sharma</h4>
                    <p>Android Developer</p>
                </div>
                <div className="teamCard">
                    <img className='teamImg' src="./img/nabinDai.jpg" alt="" />
                    <h4>Nabin Choudhary</h4>
                    <p>FullStack Developer</p>
                </div>
                <div className="teamCard">
                    <img className='teamImg' src="./img/sirumam.jpg" alt="" />
                    <h4>Siru siru</h4>
                    <p>Digital Marketer</p>
                </div>
                <div className="teamCard">
                    <img className='teamImg' src="./img/saneepDai.jpg" alt="" />
                    <h4>Sanjeep </h4>
                    <p>Sr. Graphic Designer</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
