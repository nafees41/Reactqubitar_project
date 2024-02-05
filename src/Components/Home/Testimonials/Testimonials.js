import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import star from "../../../images/Star.png";
import cimg from "../../../images/client-img.png";
import t1 from "../../../images/t1.png";
import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Gallery() {
  return (
    <section className="testimonials mt-5 mb-5">
      <div className="container px-5">
        <div className="row">
          <div className="col-lg-4 col-md-2">
            <h1 className="testi-heading mt-2">Testimonials</h1>
            <p className="testi-para mt-4">
              At Qubitars we take pride in providing high-quality solutions that
              meet the unique needs of our clients. But don't just take our word
              for it – here's what some of our satisfied clients have to say:
            </p>
          </div>
          <div className="col-lg-8 col-md-8 new-tesimonails">
            <Swiper
              className="mySwiper testimonials-feed-back"
              // pagination={
              //   true
              // }
              navigation={true}
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={15}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 7,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              }}
            >
              <SwiperSlide>
                <div className="client-card">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">5 Rating</span>
                  </span>
                  <p
                    className="client-card-desc mt-4"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    "We were impressed with Qubitars NFT development expertise
                    from the start. They helped us navigate the complex world of
                    NFTs and created a collection that exceeded our
                    expectations. We look forward to working with them again on
                    future projects."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all "> - Michael G., CEO</span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">4.9 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    Working with Qubitars on our website development was a
                    fantastic experience. Their team was professional,
                    responsive, and delivered a final product that exceeded our
                    expectations. We're thrilled with our new website and the
                    increased traffic it has brought to our business!"
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">-Sarah Emmet</span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">4.9 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "The team at Qubitars did an amazing job on our website
                    redesign. They took the time to understand our goals and
                    vision, and brought it to life in a beautiful, user-friendly
                    website. We've received nothing but positive feedback from
                    our customers since launching the new site."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">Mark Robert </span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">5 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "We couldn't be happier with the mobile app Qubitars
                    developed for our business. It has improved our workflow and
                    efficiency tremendously. The team was great to work with and
                    was always available to answer our questions and address any
                    issues."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">Alex Gold </span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">4.9 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "Our mobile app development project with Qubitars was a huge
                    success. They delivered the app on time and within our
                    budget, and it has since become an important tool for our
                    customers. We would highly recommend their services to
                    anyone looking to develop a mobile app."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">John Komb </span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">5 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "The team at Qubitars was instrumental in helping us create
                    our first NFT collection. Their expertise and guidance were
                    invaluable, and they made the entire process seamless. We're
                    thrilled with the end result and have received great
                    feedback from our collectors."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">Emily Bult </span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">4.9 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "We knew that NFTs were the future, but we weren't sure how
                    to get started. Thankfully, Qubitars was there to guide us
                    through the process. They helped us develop a unique NFT
                    collection that has been a huge hit with our customers."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">Andrew Flaw </span>
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-card ">
                  <span className="client-card-heading">
                    <img src={star} className="img-fluid " alt="slider" />
                    <span className="rating mb-4 p-3 mt-2">5 Rating</span>
                  </span>
                  <p className="client-card-desc mt-4">
                    "Our NFT development project with [Company Name] was a great
                    success. They were able to take our concept and turn it into
                    a beautiful, functional NFT collection that has been very
                    well-received by our community. Their team was professional,
                    responsive, and easy to work with."
                  </p>

                  <span>
                    {/* <img src={cimg} className="img-fluid client-img" alt="slider" /> */}
                    <span className="see-all ">Samantha M.</span>
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
