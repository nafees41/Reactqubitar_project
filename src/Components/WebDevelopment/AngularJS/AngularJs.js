import React from 'react'
import './AngularJs.css';
import angular_side from "../../../images/WebDevelopment/angular_side.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function AngularJs() {
  return (
    <section id='angularjs'>
        <div className="container mt-5 mb-5"   >
              <h1 className='angular-heading' data-aos="fade-up"  data-aos-duration="1000">Front-end Development</h1>
              <p

              className='angular-para'>
               Our focus on creating a visually appealing, user-friendly interface for websites and web applications using HTML, CSS, and JavaScript.



              </p>
              <div className="row ">
                <div className="col-md-8 angular_side custom_box_a ">
                            <p className='underpara mt-3'>
                            Front-end development refers to the creation of the user-facing or client-side portion of a website or web application. This includes the design, layout, and functionality of a website's interface that users see and interact with
                            </p>
                      <p className='underpara'>We use a variety of tools and frameworks, such as React, Angular, and Vue, to build responsive, user-friendly interfaces that work seamlessly across different devices and screen sizes. They also work closely with back-end developers and designers to ensure a cohesive and efficient web development process.</p>
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

    </section>
  )
}
