import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <img className='logos' src="/img/logo.png" alt="mainLogo" />
            {/* <h3>intech</h3> */}
            
            <ul className='navlink'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'#'}>Services</Link>
                    <div className="mega-menu">
                        <Link to={'/app-development'}>App Development</Link>
                        <Link to={'/website-development'}>Website Development</Link>
                        <Link to={'/ui-ux-design'}>UI/UX Design</Link>
                        <Link to={'/digital-marketing'}>Digital Marketing</Link>
                    </div>
                </li>
                <li>
                    <Link to={'#'}>Pricing</Link>
                    <div className="mega-menu">
                       <p className='menu_child' onClick={() => navigate('/service/web-development')}>Web Development Package</p>
                       <p className='menu_child' onClick={()=>navigate('/service/seo')}>SEO Optimization Package</p>
                       <p className='menu_child' onClick={()=>navigate('/service/social-media')}>Social Media Management</p>
                       
                    </div>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className='hamburgerMenu'>
                <TbMenuDeep />
            </div>
        </div>
    );
};

export default Navbar;
