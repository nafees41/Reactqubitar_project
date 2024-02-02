import green_mobile from "../../../images/MobileDevelopment/green_mobile.png";
import black_mobile from "../../../images/MobileDevelopment/black_mobile.png";
import blue_mobile from "../../../images/MobileDevelopment/blue_mobile.png";
import nft from "../../../images/MobileDevelopment/nft.png";
import travel from "../../../images/MobileDevelopment/travel.png";
import trading from "../../../images/MobileDevelopment/trading.png";
import fitness from "../../../images/MobileDevelopment/fitness.png";
import edu from "../../../images/MobileDevelopment/edu.png";
import mb1 from "../../../images/MobileDevelopment/mb1.jpg";
import mb2 from "../../../images/MobileDevelopment/mb2.jpg";

import './OurApps.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination,Autoplay } from "swiper";
//import { Autoplay } from "swiper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from "@iconify/react";

export default function OurApps() {
  return (
    <div className="container mt-3 " style={{paddingBottom:'30px'}}>
            <center><div className="Our_apps_heading mt-5 ">
             <h1>Successful Mobile Apps</h1>
        </div>
        <div className="our_app_para mt-4">
            <p>Our successful apps are a testament to our innovative solutions, customized approach, user-centered design, and comprehensive app development services.</p>
        </div></center>
          <div className='swipp  justify-content-cneter mt-5'>  
              <Swiper
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{
                      clickable: true,
                  }}
                  loop={true}
                  modules={[Pagination,Autoplay]}
                // modules={[Autoplay]}

                 
                  className='mySwiper'

                  slidesPerView={3}
                  spaceBetween={30}
                  breakpoints={{
                    0:{
                        slidesPerView:1,
                        spaceBetween:40,
                    },
                      480: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                      },
                      768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                      }, 1024: {
                          slidesPerView: 3,
                          spaceBetween: 15,
                      }, 1280: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                      },

                  }} >
                    <center>
                   <SwiperSlide className="our_apps_slider mb-5">
                     <div className="our_apps_card">
                        <div className="our_apps_img">
                        <img src={trading} className="img-fluid our_apps_card_img" alt="slider" />

                        </div>
                        <div className="our_apps_card_heading">
                            <h4>Eboard App - By React </h4>
                        </div>
                     </div>

            
                     
                  </SwiperSlide>
                  <SwiperSlide className="our_apps_slider mb-5">
                  <div className="our_apps_card">
                        <div className="our_apps_img">
                        <img src={fitness} className="img-fluid  our_apps_card_img" alt="slider" />

                        </div>
                        <div className="our_apps_card_heading">
                            <h4>Fitness APP - by Flutter</h4>
                        </div>
                     </div>

                   
                  </SwiperSlide> 

                  <SwiperSlide className="our_apps_slider mb-5">
                  <div className="our_apps_card">
                        <div className="our_apps_img">
                        <img src={travel} className="img-fluid  our_apps_card_img" alt="slider" />

                        </div>
                        <div className="our_apps_card_heading">
                            <h4>Tour App - by React Native</h4>
                        </div>
                     </div>

                   
                  </SwiperSlide> 
                   <SwiperSlide className="our_apps_slider mb-5">
                   <div className="our_apps_card">
                        <div className="our_apps_img">
                        <img src={nft} className="img-fluid our_apps_card_img" alt="slider" />

                        </div>
                        <div className="our_apps_card_heading">
                            <h4>Gaming App - by React</h4>
                        </div>
                     </div>

                   
                  </SwiperSlide> 
                  <SwiperSlide className="our_apps_slider mb-5">
                     <div className="our_apps_card">
                        <div className="our_apps_img">
                        <img src={edu} className="img-fluid our_apps_card_img" alt="slider" />

                        </div>
                        <div className="our_apps_card_heading">
                            <h4>Education App - By React Native</h4>
                        </div>
                     </div>

            
                     
                  </SwiperSlide>
                
                  
                  
                    
                  
                  
                  </center>
                
                 

               
                 

              </Swiper>
          </div>
    </div>
  
  )
}
