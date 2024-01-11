import React from 'react';
import './CustomWeb.css';
import dotLine from "../../../images/WebDevelopment/dotLine.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

function CustomWeb() {
  return (
    <section className='custom_web' id=''>
        <div className="container  mb-5"  >
            <center>
                  <h1 className="custom_heading"  data-aos="zoom-in-right"  data-aos-duration="1000">Custom Web Development</h1>
           
            <div className="custom_para ">
                <p> It involves creating a website tailored to specific goals and functions, rather than using pre-designed templates or off-the-shelf solutions.</p>
            </div>
              </center>
            <div className="row custom_web_cards">
                <div className="col-md-4 custom_box ">
                      <h3 className='third_party mt-4 '>Planning and Analysis </h3>
                      <div className="dot-line">
                          <img
                              src={dotLine}
                              className="img-fluid "
                              alt="switch"
                              loading="lazy"
                          />
                      </div>
                     
                      <p className='customWeb_para'>
                      The initial phase of custom web development where the project requirements and objectives are discussed and defined, laying the foundation for the entire project
                      </p>
                    
                </div>
                  <div className="col-md-4 custom_box">
                      <h3 className='third_party mt-4 '> Design and Development</h3>
                      <div className="dot-line">
                          <img
                              src={dotLine}
                              className="img-fluid "
                              alt="switch"
                              loading="lazy"
                          />
                      </div>
                      <p className='customWeb_para'>
                      The phase where the website is built, including creating the layout, designing the user interface, developing the website's functionality, and integrating necessary third-party services.
                      </p>

                  </div>
                  <div className="col-md-4 custom_box">
                      <h3 className='third_party mt-4'>Testing and Launch</h3>
                      <div className="dot-line">
                          <img
                              src={dotLine}
                              className="img-fluid "
                              alt="switch"
                              loading="lazy"
                          />
                      </div>
                      <p className='customWeb_para'>
                      The final phase where the website is tested thoroughly to ensure it meets project requirements, including user testing, browser testing, and quality assurance testing, before launching the website for public access.
                      </p>

                  </div>
               
            </div>
        </div>

    </section>
  )
}

export default CustomWeb