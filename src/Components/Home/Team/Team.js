import dev1 from "../../../images/dev1.png";
import dev2 from "../../../images/dev2.png";
import dev3 from "../../../images/dev3.png";
import dev4 from "../../../images/dev4.png";
import hadid from "../../../images/hadid.jpg";
import mian from "../../../images/muxammil.jpeg";
import hammad from "../../../images/hammad.jpeg";
import asad from "../../../images/asad.jpeg";
import SAli from "../../../images/SAli.jpeg";
import sjjad from "../../../images/sajjad.jpeg";
import talha from "../../../images/talha.jpeg";
import ammar from "../../../images/ammar.jpeg";
import './Team.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
//import { Autoplay } from "swiper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from "@iconify/react";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
export default function Team() {
  return (
    <div className="container mt-3 ">
          <div className="team-heading ">
              <center> <h1>Meet our team</h1></center>
        </div>
        <div className="team-para mt-4">
            <p>Get to know our talented team of software developers, designers, and quality assurance engineers who are dedicated to delivering exceptional software solutions for our clients.</p>
        </div>
          <div className='swipp  justify-content-cneter'>  
           {/* px-5 py-5 */}
              <Swiper
                  autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                      
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  modules={[Pagination]}
                // modules={[Autoplay]}

                 
                  className='mySwiper'

                  slidesPerView={4}
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
                          slidesPerView: 4,
                          spaceBetween: 15,
                      }, 1280: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                      },

                  }} >
                    <center>
                    <SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container">
        <img src={SAli} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">CEO</h4>
        <h3 className="member_name">Syed M. Ali </h3>
        <p className="member_desc">As the CEO of Qubitars, with a deep understanding of the industry and a passion for technology, I am dedicated to driving the success of our company and delivering exceptional value to our clients.</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
                    <SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container" >
        <img src={hammad} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">Cheif Technology Officer</h4>
        <h3 className="member_name">Hammad Akram</h3>
        <p className="member_desc">Meet Hammad, the CTO of Qubitars, who is leading the charge in developing innovative technology solutions that are revolutionizing the industry.</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 

<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container">
        <img src={hadid} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">BDO</h4>
        <h3 className="member_name">Hadid Adrees</h3>
        <p className="member_desc">As a Business Development Officer (BDO), my role is to identify new business opportunities and to develop strategies to expand our client base. I am responsible for building and maintaining strong relationships with our clients</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
                  
<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container">
        <img src={mian} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">Web Developer</h4>
        <h3 className="member_name">Muzammil Afzal</h3>
        <p className="member_desc">As a MERN developer at Qubitars,Muzammil is responsible for developing and maintaining robust web applications that deliver exceptional user experiences and meet the needs of clients and end-users.</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container" >
        <img src={asad} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">Web Developer</h4>
        <h3 className="member_name">Asad Ali</h3>
        <p className="member_desc">As a Full Stack Web developer at Qubitars, Asad plays a pivotal role in crafting and maintaining powerful web applications. He also creates user-friendly interfaces that are aesthetically appealing and highly responsive.</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container">
        <img src={sjjad} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">Mobile Developer</h4>
        <h3 className="member_name">Sajjad Khalid</h3>
        <p className="member_desc">As a mobile app developer, I specialize in building native and hybrid mobile applications for both Android and iOS platforms.With expertise in mobile development frameworks such as React Native and Flutter </p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 

<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container" >
        <img src={talha} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">UI/UX Designer</h4>
        <h3 className="member_name">Talha</h3>
        <p className="member_desc">As a UI/UX Designer, I make your digital product look great and work well for users. I create the interface, conduct research, and work with the team to ensure the product is user-friendly, intuitive, and accessible. My goal is a visually appealing product with a great user experience.</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
<SwiperSlide className="new-swiper-slide mb-5">

<div class="card">
    <div class="img-container" >
        <img src={ammar} className="img-fluid " alt="slider" />
    </div>
    <div class="card-details mt-3">
      <h4 className="project_manager">Graphic Designer</h4>
        <h3 className="member_name">Ammar</h3>
        <p className="member_desc">"As a Graphic Designer, my goal is to create visual content that tells your brand's story and helps you stand out in a crowded market.  I work closely with you to develop designs that reflect your brand's identity and meet your needs."



</p>
        {/* <center className='team-cons mt-2'>
            <span>
                <a href="#">  <Icon icon="ic:baseline-facebook" color="blue" style={{ fontSize: '30px' }} /></a>
            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:linkedin" color="blue" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
            <span>
                <a href="#">   <Icon icon="mdi:instagram" color="orange" style={{ fontSize: '30px' }} /></a>

            </span>{" "}
        </center> */}

       
    </div>
</div>
</SwiperSlide> 
                  
                  </center>
                
                 

               
                 

              </Swiper>
          </div>
    </div>
  
  )
}
