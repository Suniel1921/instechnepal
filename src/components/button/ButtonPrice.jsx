import React, { useState } from 'react';
import WordpressPrice from './WordpressPrice';
import CodingPrice from './CodingPrice';
import './buttonPrice.css';

const ButtonPrice = () => {
    const [showWordpressPrice, setShowWordpressPrice] = useState(false);
    const [showCodingPrice, setShowCodingPrice] = useState(true);

    const handleWordpressPrice = () => {
        setShowWordpressPrice(true);
        setShowCodingPrice(false);
    }

    const handleCodingPrice = () => {
        setShowWordpressPrice(false);
        setShowCodingPrice(true);
    }

    return (
        <div className='buttonContainer'>
            
            <div className='button'>
                <button className='priceBtn'
                    style={{backgroundColor: showCodingPrice ? '#7372f9' : '#fff'}}
                    onClick={handleCodingPrice}
                >
                   Custom Coding Website
                </button>
                <button className='priceBtn'
                    style={{backgroundColor: showWordpressPrice ? '#7372f9' : '#fff'}}
                    onClick={handleWordpressPrice}
                >
                    Wordpress Website
                </button>
            </div>

            <div className="container">
            <p className='note'>Please note that our pricing is flexible and depends on the unique requirements of your project. Get in touch with us to discuss <br /> your needs, and we'll provide a tailored quote that matches your budget and objectives.</p>
            {/* <p className='note'>Note: Our pricing is customized to suit your specific needs. Please contact us for a personalized quote tailored to your requirements. <br /> We look forward to discussing how NepalTech can best serve you!</p> */}
            </div>
            {showCodingPrice && <CodingPrice />}
            {showWordpressPrice && <WordpressPrice />}
        </div>
    );
}

export default ButtonPrice;

