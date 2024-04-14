import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>

            <div className='navbar'>
                {/* <h2>instech</h2> */}
                <img className='logos' src="./img/logo.png" alt="" />
                <ul className='navlink'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/contact'}>Contact</Link> 

                </ul>
            </div>

        </>
    )
}

export default Navbar