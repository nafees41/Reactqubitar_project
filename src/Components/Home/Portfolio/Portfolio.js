import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import web1 from "../../../images/web1.png";
import web2 from "../../../images/web2.png";
import web3 from "../../../images/web3.png";
import web4 from "../../../images/web4.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Portfolio.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
export default function Portfolio() {
    return (
        <div className="container " >
            <div className="team-heading  mt-5">
                <center> <h1>Our Projects</h1></center>
            </div>
            <div className="team-para mt-2" data-aos="flip-up"  data-aos-duration="2000">
                <p>Our Qubitars is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
            </div>
            <div className='swipp justify-content-cneter'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper portfolio-swiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        }, 1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }, 1280: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },

                    }} >
              
                    <SwiperSlide>
                      
                      <div className="dev-card">
                          <img src={web1} className="img-fluid portfolio-img" alt="slider" />
                          
                            
                            <center>  <span className="dev-heading mb-5">CMS Design</span></center>
                         
                            <center>     <span className="dev-name ">Develop in Laravel</span> </center> 
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      
                      <div className="dev-card">
                          <img src={web3} className="img-fluid portfolio-img" alt="slider" />
                          
                            
                            <center>  <span className='dev-heading '>NFT Design</span></center>
                         
                            <center>     <span className='dev-name '>Develop in React</span> </center> 
                      </div>
                  </SwiperSlide>
          
                </Swiper>
            </div>
        </div>

    )
}
