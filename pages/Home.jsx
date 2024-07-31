import React, { useEffect, useState } from 'react'
import './home.css'
import Services from './Services'
import TechStack from './TechStack'
import OurProcess from './OurProcess'
import Price from './Price'
import Testimonials from './Testimonials'
import Footer from '../src/components/Footer'
import OurTeam from './OurTeam'
import Navbar from '../src/components/Navbar'
import ButtonPrice from '../src/components/button/ButtonPrice'
import { FaTimes } from 'react-icons/fa';

const Home = () => {
    const serviceWords = ["App Development", "Web Development", "Social Media", "SEO Optimization"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % serviceWords.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const isPopupShown = localStorage.getItem('popupShown');
        if (!isPopupShown) {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
            const timer = setTimeout(() => {
                localStorage.removeItem('popupShown');
            }, 60000);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <img src="/img/inss.png" alt="Popup" />
                        <FaTimes className="close-icon" onClick={closePopup} />
                    </div>
                </div>
            )}

            <div className='homeContainer'>
                <div className='homeNavbar'><Navbar /></div>

                <div className='container'>
                    <div className='main'>

                        <div className="triangleAnimate logo1Animate">
                            <img src="/img/circle.png" alt="" />
                        </div>
                        <div className='homeContents'>

                            <button className='btn mainBtn'>Your Complete Digital Partner</button>

                            <h3 className='heading'>Digital Solutions Agency For <br /> <p className='growthCenter'><span className='growthText' >Growth </span> Business</p></h3>
                            <h4 className='serviceHeading'>Services We Provide</h4>
                            <div className='serviceText'>
                                {serviceWords.map((word, index) => (
                                    <span key={index} className={`word ${index === currentWordIndex ? 'animate' : ''}`}>
                                        {word}
                                    </span>
                                ))}
                            </div>

                            <div className='triangleAnimate logo3Animate'>
                                <img src="/img/smallcrossani.png" alt="" />
                            </div>

                        </div>

                        <div className='triangleAnimate logo2Animate'>
                            <img src="/img/smalltriangleani.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='services_component'> <Services /> </div>
            <div className='techstack'><TechStack /></div>
            <div className='techstack services_component'><OurProcess /></div>
            <div className='techstack services_component'><ButtonPrice /></div>
            <div className='techstack services_component'><Testimonials /></div>
        </>
    )
}

export default Home
