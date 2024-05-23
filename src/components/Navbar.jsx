import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa"; // Updated import
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    const handleHambugerMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img className='logos' src="/img/nepalTechlogopng.png" alt="mainLogo" />
            </Link>
            <ul className={`navlink ${menu ? 'show' : ''}`}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/service'}>Services</Link>
                </li>
                <li>
                    <Link to={'#'}>Pricing</Link>
                    <div className="mega-menu">
                        <p className='menu_child' onClick={() => navigate('/service/web-development')}>Web Development Package</p>
                        <p className='menu_child' onClick={() => navigate('/service/seo')}>SEO Optimization Package</p>
                        <p className='menu_child' onClick={() => navigate('/service/social-media')}>Social Media Management</p>
                    </div>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/career'}>Career</Link>
                </li>
            </ul>
            <div className='hamburgerMenu' onClick={handleHambugerMenu}>
                {menu ? <FaTimes className="hamburgerMenuIcon close" /> : <FaBars className="hamburgerMenuIcon" />} {/* Updated icon */}
            </div>
        </div>
    );
};

export default Navbar;
