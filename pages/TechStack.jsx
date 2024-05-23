import React from 'react'
import './techstack.css'

const TechStack = () => {
    return (
        <>
            <div className="myskill_container">
                <div className="container myskill">
                    <div className="myskill_left" data-aos="zoom-in">
                        <p className=' title'><strong className='strong'>TECHNOLOGIES WE USE</strong></p>
                        <h3 className='teachHeading'>We Use Latest Tech Stack for Your Business...</h3>
                        <p className='techpara'>We use the latest technology stack to develop custom, scalable solutions that meet your unique needs. Our adaptability to evolving trends ensures we consistently deliver exceptional results for your business.</p>

                    </div>

                    <div className="myskill_right">

                        <div className='circle'>
                            <img className='nodejs' src="/language/nodejs2.png" alt="" />
                            <img className='reactjs' src="/language/react.png" alt="" />
                            <img className='expressjs logo' src="/language/express.png" alt="" />
                            <img className='mongodb logo' src="/language/mongodb1.png" alt="" />
                            {/* <img className='mysql logo' src="/language/mysql1.png" alt="" />  */}


                            <div className="boldcircle">
                                <img className='linux' src="/language/linux.png" alt="" />
                                <img className='nginix' src="/language/nginix.png" alt="" />
                                <img className='aws' src="/language/aws1.png" alt="" />
                                <img className='docker' src="/language/docker.png" alt="" />
                                <img className='photoshop' src="/language/photoshop.png" alt="" />
                                <img className='tailwind' src="/language/tailwindcss.png" alt="" />
                                <img className='js' src="/language/js.png" alt="" />
                                <img className='bootstrap' src="/language/bootstrap.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default TechStack