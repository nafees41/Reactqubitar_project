import React, { useState } from "react";
import "./AngularJs.css";
import Slider from "react-slick";
import angular_side from "../../../images/WebDevelopment/angular_side-1.png";
import angular_sides from "../../../images/WebDevelopment/Sliderimage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from "react-star-rating-component";

AOS.init();

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "block"}}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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
    speed: 2000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [rating, setRating] = useState(0);
  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  return (
    <section id="angularjs">
      <div className="container angular-alignment mt-5 mb-5 px-2">
        <h1
          className="angular-heading"
          data-aos="fade-up"
          data-aos-duration="1000">
          Testimonial
        </h1>
        <p className="angular-para">
          A testimonial is an honest endorsement or review from a customer
          describing how a product or service met their expectations or resolved
          their problems.
        </p>
      </div>
      <div className="container px-4 responsive-testmonial">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Slider {...settings}>
              <div className="container px-4">
                <div className="row testmonial-card">
                  <div className="col-xs-6 col-sm-12 col-md-7 col-lg-7 col-xl-8 px-5 angular_side">
                    <h4 className="underpara mt-3">Jonh Almeda</h4>
                    <div className="container">
                      <div style={{display:"flex"}}>
                        <StarRatingComponent
                          name="rateMe4"
                          starCount={5}
                          value={rating}
                          onStarClick={onStarClick}
                          starColor="#ffb400"
                          emptyStarColor="#ffd27d"
                        />
                        <span>(5.0)</span>
                      </div>
                    </div>
                    <p className="underpara">
                      Proin sed libero enim sed faucibus turpis. At imperdiet
                      dui accumsan sit amet nulla facilisi morbi tempus. Ut sem
                      nulla pharetra diam sit amet nisl.
                    </p>
                  </div>
                  <div className="col-xs-6 col-sm-12 col-md-5 col-lg-5 col-xl-4  angular-img">
                    <img
                      src={angular_side}
                      className="img-fluid rounded-circle"
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="container mb-5">
                <div className="row testmonial-card">
                  <div className="col-xs-6 col-sm-12 col-md-7 col-lg-7 col-xl-8 px-5 angular_side">
                    <h4 className="underpara mt-3">Abhishek Gupta</h4>
                    <div className="container">
                      <div style={{ display: "flex" }}>
                        <StarRatingComponent
                          name="rateMe4"
                          starCount={5}
                          value={rating}
                          onStarClick={onStarClick}
                          starColor="#ffb400"
                          emptyStarColor="#ffd27d"
                        />
                        <span>(3.0)</span>
                      </div>
                    </div>
                    <p className="underpara">
                      Proin sed libero enim sed faucibus turpis. At imperdiet
                      dui accumsan sit amet nulla facilisi morbi tempus. Ut sem
                      nulla pharetra diam sit amet nisl.
                    </p>
                  </div>
                  <div className="col-xs-6 col-sm-12 col-md-5 col-lg-5 col-xl-4 angular-img">
                    <img
                      src={angular_side}
                      className="img-fluid rounded-circle"
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomArrows;
