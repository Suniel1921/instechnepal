// import React from 'react';
// import './footer.css';

// const Footer = () => {
//   return (
//     <>
//         <div className='container'>
//             <div className='footer'>
//                 <div>
//                 <h3>instechnepal</h3>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Footer





import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="footerContent">
          <div className="disclaimer">
            <p>Copyright &copy; 2024 || All Right Reserved</p>
            {/* <p>Terms & Conditions</p> */}
            {/* <p>Privacy Policy</p> */}
          </div>

          <div className="owner">
            <p>Ins Technology</p>
          </div>
          <div className="socailmediaIcon">
            <Link to={'https://www.facebook.com/instechcraft'} target="_blank"><p><FaFacebookSquare /></p></Link>
            <Link to={'https://www.instagram.com'} target="_blank"><p><FaSquareInstagram /></p> </Link>
            <Link to={'#'} target="_blank"><p><FaSquareXTwitter /></p> </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
