// import './footer.css'
// import { Link } from "react-router-dom";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <>
//       <div className="footer">
//         <hr />
//         <div className="footerContent">
//           <div className="disclaimer">
//             <p>Copyright &copy; 2024 || All Right Reserved</p>
//             {/* <p>Terms & Conditions</p> */}
//             {/* <p>Privacy Policy</p> */}
//           </div>

//           <div className="owner">
//             <p>Nepal Tech Innovations</p>
//           </div>
//           <div className="socailmediaIcon">
//             <Link to={'https://www.facebook.com/nepaltechinnov'} target="_blank"><p><FaFacebookSquare /></p></Link>
//             <Link to={'https://www.instagram.com/nepaltechinnov'} target="_blank"><p><FaSquareInstagram /></p> </Link>
//             <Link to={'https://www.twitter.com/nepaltechinnov'} target="_blank"><p><FaSquareXTwitter /></p> </Link>
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;






import './footer.css';
import { Link } from 'react-router-dom';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaChevronCircleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowCircle(true);
      } else {
        setShowCircle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
     {showCircle && (
        <div className="go_To_Top container" onClick={scrollToTop}>
          <FaChevronCircleUp />
        </div>
      )}
      <div className="footer">
        <hr />
        <div className="footerContent">
          <div className="disclaimer">
            <p>Copyright &copy; 2024 || All Right Reserved</p>
            {/* <p>Terms & Conditions</p> */}
            {/* <p>Privacy Policy</p> */}
          </div>

          <div className="owner">
            <p>Nepal Tech Innovations</p>
          </div>
          <div className="socailmediaIcon">
            <Link to={'https://www.facebook.com/nepaltechinnov'} target="_blank">
              <p>
                <FaFacebookSquare />
              </p>
            </Link>
            <Link to={'https://www.instagram.com/nepaltechinnov'} target="_blank">
              <p>
                <FaSquareInstagram />
              </p>
            </Link>
            <Link to={'https://www.twitter.com/nepaltechinnov'} target="_blank">
              <p>
                <FaSquareXTwitter />
              </p>
            </Link>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
