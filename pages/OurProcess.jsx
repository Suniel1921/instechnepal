import React from 'react'
import './ourProcess.css'
import { SiPaloaltonetworks } from "react-icons/si";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaBugSlash } from "react-icons/fa6";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const OurProcess = () => {
    return (
        <>
            <div className='container'>
                <div className='ourProcess'>
                    <div className="left_ourProcess">
                        <p className='title'>Our Process</p>
                        <h3 className='secondryHeading'>We Make Your Business Digitally.</h3>
                        <p>We transform your business into a digital powerhouse, leveraging technology to streamline operations, enhance customer experiences, and drive growth. With our expertise in digital solutions, we propel your business into the digital age, ensuring agility, innovation, and lasting success.</p>
                        <div className='process_List'>
                            <div className='process_childs'>
                                <div className='process_child'>
                                    <p className='number_circle'><SiPaloaltonetworks/></p>
                                    <h4>Requirement Analysis</h4>
                                </div>
                                <p className='process_para'>Understand client needs, goals, and project scope. Define clear objectives and specifications for the development process.</p>
                            </div>
                            <div className='process_childs'>
                                <div className='process_child'>
                                    <p className='number_circle'><FaPersonDotsFromLine/></p>
                                    <h4>Design and Planning</h4>
                                </div>
                                <p className='process_para'>Create wireframes, prototypes, and architecture. Plan development phases, set timelines, allocate resources, and establish communication channels.</p>
                            </div>
                            <div className='process_childs'>
                                <div className='process_child'>
                                    <p className='number_circle'><RiComputerFill/></p>
                                    <h4>Development</h4>
                                </div>
                                <p className='process_para'>Implement the planned design and functionality using appropriate technologies. Follow coding standards, conduct testing, and ensure compatibility across devices and platforms.</p>
                            </div>
                            <div className='process_childs'>
                                <div className='process_child'>
                                    <p className='number_circle'><FaBugSlash/></p>
                                    <h4>Testing and Quality Assurance</h4>
                                </div>
                                <p className='process_para'>Perform comprehensive testing to identify and rectify bugs, errors, and inconsistencies. Ensure functionality, performance, security, and user experience meet expectations.</p>
                            </div>
                            <div className='process_childs'>
                                <div className='process_child'>
                                    <p className='number_circle'><AiOutlineDeploymentUnit/></p>
                                    <h4>Deployment and Maintenance</h4>
                                </div>
                                <p className='process_para'>Deploy the developed solution to the production environment. Provide ongoing support, maintenance, and updates. Monitor performance, gather feedback, and iterate for continuous improvement.</p>
                            </div>


                        </div>
                    </div>
                    <div className="right_ourProcess">
                        <img src="/img/process.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess