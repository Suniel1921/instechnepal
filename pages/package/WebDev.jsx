import React from 'react';
import '../package/webDev.css';
import Navbar from '../../src/components/Navbar';
import ButtonPrice from './../../src/components/button/ButtonPrice';

const WebDev = () => {
  // const features = [
  //   '24/7 Support',
  //   'CMS website design',
  //   'Responsive & Interactive Design',
  //   'Number of pages / menus / categories as per initial requirement',
  //   'Search Engine friendly',
  //   'Social Media Integration',
  //   'Advanced Real Time Search',
  //   'CSV Import Of Product',
  //   'Advance Product Offer',
  //   'Blog Design',
  //   'Checkout Easy',
  //   'Static/Dynamic',
  //   'Single Vendor/Multi Vendor',
  //   'Shopping Cart',
  //   'Logo Design',
  //   'Payment Integration',
  //   'Custom Website',
  //   'Newsletter Subscription'
  // ];

  // // Features to show untick icon
  // const untickFeatures = ['Custom Website', 'Newsletter Subscription', 'Payment Integration', 'Shopping Cart', 'Advanced Real Time Search'];

  return (
    // <div className="webDevBg"> 
      
    //   <hr />
    //   <div className='webDevContainer'>
    //   <div className="container">
    //     <div className='webDevContent'>
    //       <h2>Website Development Packages</h2>
    //       <p className='pricingpara'>Explore our diverse range of website design and development packages tailored to suit your specific needs. <br /> Whether you're seeking a customized solution or interested in our pre-designed options, simply share your   <br /> requirements with us, and we'll promptly provide you with a personalized quote. Unlock the <br /> perfect web presence for your business today.</p>
    //     </div>
    //     <div className='pricing'>
    //       <table className='webDevTable'>
    //         <thead>
    //           <tr>
    //             <th>Features</th>
    //             <th>Basic</th>
    //             <th>Standard</th>
    //             <th>Premium</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {features.map((feature, index) => (
    //             <tr key={index}>
    //               <td>{feature}</td>
    //               <td>{untickFeatures.includes(feature) ? '\u2717' : '\u2713'}</td>
                  
    //               <td>&#10003;</td>
    //               <td>&#10003;</td>
                  
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    // </div>

  <>
  <div className='webDevBg'>
    <div className='webDevNavbar'><Navbar/></div>
    <ButtonPrice/>
    </div>
    </>
  );
};

export default WebDev;
