
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
      text: "Ins Technology exceeded our expectations with the website they developed for Hamro Rooms . Not only is it visually stunning, but it's also user-friendly and functional. Our customers love the interface, and it has significantly improved our online presence. Thank you, Ins Tech, for your exceptional work.",
      website : 'Hamro Rooms',
      user: "Suniel Sharma",
      rating: "/img/rating.png",
      image: "/img/asset 22.png"
    },
    {
      text: "Working with Ins Technology was a game-changer for my business. They not only built us a powerful custom application but also provided exceptional support throughout. Their dedication and professionalism exceeded our expectations.",
      user: "ICDO",
      rating: "./img/rating.png",
      image: "/img/asset 58.png"
    },
    {
      text: "Ins Technology has been an invaluable partner for our business. From designing captivating graphics to executing effective digital marketing strategies, they've helped us achieve remarkable growth.",
      user: "Chaha Tea",
      rating: "./img/rating.png",
      image: "/img/asset 49.png"
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
