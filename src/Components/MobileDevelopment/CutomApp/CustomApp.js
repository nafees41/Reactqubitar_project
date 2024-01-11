import React from 'react'
import "./CustomApp.css"
import i1 from "../../../images/MobileDevelopment/i1.png";
import i2 from "../../../images/MobileDevelopment/i2.png";
import i3 from "../../../images/MobileDevelopment/i3.png";

export default function CustomApp() {
  return (
    <section id='custom_app'>
   <div className="container">
   <center>
                  <h1 className="custom_heading">Custom App Development</h1>
           
            <div className="custom_para ">
                <p> Our custom app development service offers tailored solutions, experienced team, user-centric design, agile development, quality assurance, and ongoing support and maintenance.</p>
            </div>
              </center>
              <div className="row">
                <div className="col-md-6">
                    <ul className='custom_app_list'>
                        <li className='custom_app_left'>
                            <h4 className='custom_app_left_heading'>01: Tailored Solutions</h4>
                            <p className='custom_app_left_para'> We work closely with our clients to understand their unique needs and develop customized solutions to meet their specific requirements. We believe in delivering solutions that are tailored to your business needs.</p>
                            <hr  className='custom_app_line'/>
                        </li>
                        <li className='custom_app_left'>
                            <h4 className='custom_app_left_heading'>02: Experienced Team</h4>
                            <p className='custom_app_left_para'>Our team of experienced developers has expertise in various programming languages, mobile app development platforms, and database technologies.</p>
                            <hr />
                        </li>
                        <li className='custom_app_left'>
                            <h4 className='custom_app_left_heading'>03:User-Centric Design</h4>
                            <p className='custom_app_left_para'>We understand that the success of an app depends on its usability and user experience. Therefore, we pay close attention to the design and user interface of the app to ensure that it is intuitive, user-friendly, and visually appealing.</p>
                            <hr />
                        </li>
                        <li className='custom_app_left'>
                            <h4 className='custom_app_left_heading'>04: Agile Development</h4>
                            <p className='custom_app_left_para'>We follow an agile development methodology that allows us to deliver projects in a timely and efficient manner. Our process is highly collaborative and flexible, which means we can accommodate changes and updates throughout the development cycle.</p>
                            <hr />
                        </li>
                        <li className='custom_app_left'>
                            <h4 className='custom_app_left_heading'>05:Quality Assurance</h4>
                            <p className='custom_app_left_para'> We have a dedicated team of quality assurance professionals who conduct thorough testing and quality checks throughout the development cycle. We ensure that the app is bug-free, secure, and delivers an optimal user experience.</p>
                            <hr />
                        </li>
                        

                    </ul>
                </div>
                <div className="col-md-6 custom_app_right">
                    <div className="row">
                    <h3 className='custom_app_build'>Build</h3>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>We utilize the latest technologies and development practices to build robust and scalable software solutions.</p>
                        </div>
                    </div>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i2}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>Our team of experienced developers works closely with clients to develop custom software that meets their unique needs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i3}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>We prioritize quality, efficiency, and collaboration throughout the software development lifecycle.</p>
                        </div>
                    </div>

                    </div>
                    <div className="row">
                    <h3 className='custom_app_build'>Release & Monitor</h3>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>Our release and monitoring process is highly automated and designed to ensure a seamless deployment.</p>
                        </div>
                    </div>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i2}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>We monitor software performance in real-time, leveraging the latest monitoring tools and technologies.
</p>
                        </div>
                    </div>
                    <div className="col-md-6 build_list">
                       
                        <div className="az">
                        <img
                    src={i3}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                            <p className='az-para'>Our team of experts provides ongoing support to ensure that software remains secure, stable, and up-to-date.</p>
                        </div>
                    </div>

                    </div>
                  
                    
                   

                </div>
              </div>
   </div>
    </section>
  )
}
