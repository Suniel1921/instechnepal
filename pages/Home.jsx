import React from 'react'
import './home.css'
import Services from './Services'
import TechStack from './TechStack'
import OurProcess from './OurProcess'
import Price from './Price'
import Testimonials from './Testimonials'
import Footer from '../src/components/Footer'
import OurTeam from './OurTeam'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='main'>

                    <div class="triangleAnimate logo1Animate">
                        <img src="/img/circle.png" alt="" />
                    </div>
                    <div className='homeContents'>

                        <button className='btn mainBtn'>Ins Technology's</button>
                        <h3 className='heading'>Digital Solutions Agency For </h3>
                        <h3 className='heading'><span className='growthText'>Growth</span> Business</h3>
                        <p className='margin_para paras'>Digital Target is focused solely on direct response.</p>
                        <p className='paras'>Where Technology Pumps Through Our Veins, Fueling Direct Response Excellence.</p>
                        <p> We're Here to Help Grow Your Business.</p>

                        <div className='triangleAnimate logo3Animate'>
                            <img src="/img/smallcrossani.png" alt="" />
                        </div>

                    </div>

                    <div className='triangleAnimate logo2Animate'>
                        <img src="/img/smalltriangleani.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='services_component'> <Services /> </div>
            <div className='techstack'><TechStack /></div>
            <div className='techstack services_component'><OurProcess /></div>
            <div className='techstack services_component'><Price /></div>
            <div className='techstack services_component'><Testimonials /></div>
            {/* <div className='techstack services_component'><OurTeam /></div> */}
            <div className='techstack services_component'><Footer /></div>

        </>
    )
}

export default Home


