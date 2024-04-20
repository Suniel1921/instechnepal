import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css"; // Your custom styles

const Testimonials = () => {
  const testimonials = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut eligendi, amet debitis, deserunt nisi assumenda quae voluptatum est nesciunt impedit velit dicta.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (2 seconds)
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
                <p>{testimonial}</p>
                <img className="rating" src="./img/rating.png" alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
