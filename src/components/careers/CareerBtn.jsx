import React, { useState } from 'react';
import WebCareer from './WebCareer';
import GraphicCareer from './GraphicCareer';
import MarketingCareer from './MarketingCareer';
import './careerBtn.css';

const CareerBtn = () => {
    const [selectedCareer, setSelectedCareer] = useState('webDev');

    const handleCareerSelect = (career) => {
        setSelectedCareer(career);
    };

    return (
        <div className='careerBtnContainer'>
            <div className='careerBtn'>
                <button
                    className={selectedCareer === 'webDev' ? 'active' : ''}
                    onClick={() => handleCareerSelect('webDev')}
                >
                    Web Development
                </button>
                <button
                    className={selectedCareer === 'graphic' ? 'active' : ''}
                    onClick={() => handleCareerSelect('graphic')}
                >
                    Graphic Design
                </button>
                <button
                    className={
                        selectedCareer === 'digitalMarketing' ? 'active' : ''
                    }
                    onClick={() => handleCareerSelect('digitalMarketing')}
                >
                    Digital Marketer
                </button>
                <div className='underline' style={{ left: `${selectedCareer === 'webDev' ? '0%' : selectedCareer === 'graphic' ? '33.33%' : '66.66%'}` }}></div>
            </div>
            <div className='careerContent'>
                {selectedCareer === 'webDev' && <WebCareer />}
                {selectedCareer === 'graphic' && <GraphicCareer />}
                {selectedCareer === 'digitalMarketing' && <MarketingCareer />}
            </div>
        </div>
    );
};

export default CareerBtn;
