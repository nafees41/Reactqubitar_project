import React, { useState } from 'react';
import "./AngularJs.css";
import Slider from "react-slick";
import angular_side from "../../../images/WebDevelopment/angular_side-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from 'react-star-rating-component';

AOS.init();

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const CustomArrows = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [rating, setRating] = useState(0);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  return (
    <section id="angularjs">
      <div className="container mt-5 mb-5">
        <h1
          className="angular-heading"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Testimonial
        </h1>
        <p className="angular-para">
          A testimonial is an honest endorsement or review from a customer
          describing how a product or service met their expectations or resolved
          their problems.
        </p>
      </div>
      <Slider {...settings}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 angular_side custom_box_a ">
              <h4 className="underpara mt-3">Jonh Almeda</h4>
              <div className="container">
      <div style={{display:'flex'}}>
         <StarRatingComponent
          name="rateMe4"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
          starColor="#ffb400"         // Change this line for the filled star color
          emptyStarColor="#CCCCCC"     // Change this line for the empty star color
        />
          <span>(5.0) </span>
      </div>
    </div>

              <p className="underpara">
                Proin sed libero enim sed faucibus turpis. At imperdiet dui
                accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
                pharetra diam sit amet nisl.
              </p>
            </div>
            <div className="col-md-4 angular-img cutom_box_b">
              <img
                src={angular_side}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div>
          <h1
            className="angular-heading"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Slide Number Two
          </h1>
          <p className="angular-para">
            Our focus on creating a visually appealing,
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default CustomArrows;
