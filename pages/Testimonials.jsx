
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css"; // Your custom styles
import { Link, useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      text: "Nepal Tech Innovations exceeded our expectations with the website they developed for Om Shree Food . Not only is it visually stunning, but it's also user-friendly and functional. Our customers love the interface, and it has significantly improved our online presence. Thank you, Nepal Tech, for your exceptional work.",
      website : 'omfood',
      user: "Om Food",
      rating: "/img/rating.png",
      image: "/img/omfood.png"
    },
    {
      text: "Working with NepalTech was a game-changer for my business. They not only built us a powerful custom application but also provided exceptional support throughout. Their dedication and professionalism exceeded our expectations.",
      user: "Real Estate Innovations",
      rating: "./img/rating.png",
      image: "/img/realstate.png"
    },
    {
      text: "NepalTech has been an invaluable partner for our business. From designing captivating graphics to executing effective digital marketing strategies, they've helped us achieve remarkable growth.",
      user: "Chamling Real Estate",
      rating: "./img/rating.png",
      image: "/img/chamling.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 // Autoplay speed (3 seconds)
  };

  return (
    <div className="container">
      <div className="testimonials">
        <div className="left_testimonial">
          <img src="./img/testimonials.png" alt="" />
        </div>
        <div className="right_testimonial">
          <p className="title">Testimonials</p>
          <h3 className="secondryHeading">
            We Appreciate Your Feedbacks Very Much
          </h3>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonialsCard">
               <div className="testimonials_usersDetails">
                <img className="testimonial_User" src={testimonial.image} alt="" />
               <h2>{testimonial.user}</h2>
                <Link to={'https://omfood.com.np'} target="_blank"><p>{testimonial.website}</p></Link>
                <img className="rating" src={testimonial.rating} alt="" />
               </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
