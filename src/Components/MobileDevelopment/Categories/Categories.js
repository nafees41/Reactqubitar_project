import React from 'react'
import "./Categories.css";
import eApp from "../../../images/MobileDevelopment/eApp.png";
import sApp from "../../../images/MobileDevelopment/sApp.png";
import rApp from "../../../images/MobileDevelopment/rApp.png";
import hApp from "../../../images/MobileDevelopment/hApp.png";
import fApp from "../../../images/MobileDevelopment/fApp.png";
import iphone from "../../../images/MobileDevelopment/iphone.png";
import android from "../../../images/MobileDevelopment/android.png";
import react from "../../../images/MobileDevelopment/react.png";
import ecommerce from "../../../images/MobileDevelopment/ecommerce.png";
import flutter from "../../../images/MobileDevelopment/flutter.png";

export default function Categories() {
  return (
    <section id='categories'>
      <div className="container mt-5">
        <div className="categories_heading">
          <h1>
            Categories of Applications
          </h1>
        </div>
        <div className="categories_para">
          <p>We provide blockchain development services from our proficient experts for a wide range of applications.
          </p>
        </div>
        <div className="row gategory_row">
          <div className="col-md-8">
            <div className="categories_left_side">


              <div className="educational_app">
              


                  <img
                    src={eApp}
                    className="img-fluid edu_app_outer"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className='edu_app_para'>Educational apps</span>
                
                
              </div>
              <div className=" educational_app">
                


                  <img
                    src={sApp}
                    className="img-fluid edu_app_outer"
                    alt="switch"
                    loading="lazy"
                  />
              
                <span className='edu_app_para'>Social media apps</span>
              </div>
              </div>
              <div className="categories_left_side">
              <div className=" educational_app">
                


                <img
                  src={rApp}
                  className="img-fluid edu_app_outer"
                  alt="switch"
                  loading="lazy"
                />
              
              <span className='edu_app_para'>Real Estate App</span>
            </div>
            <div className=" educational_app educational_app_4th ">
              


                <img
                  src={hApp}
                  className="img-fluid edu_app_outer"
                  alt="switch"
                  loading="lazy"
                />
             

              <span className='edu_app_para'>Health Care</span>
            </div>
              </div>
              

              <div className="categories_left_side">
              <div className=" educational_app">
                


                <img
                  src={fApp}
                  className="img-fluid edu_app_outer "
                  alt="switch"
                  loading="lazy"
                />
              
              <span className='edu_app_para'>Fintech</span>
            </div>
            <div className=" educational_app e_app" >
                


                <img
                  src={sApp}
                  className="img-fluid edu_app_outer "
                  alt="switch"
                  loading="lazy"
                />
              
              <span className='edu_app_para'>E-Commerce</span>
            </div>
              </div>
              

            
             
        
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6 ios_img_outer">
                <div className="ios_img">
                  <img
                    src={iphone}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6 ios_img_outer">
                <div className="ios_img">
                  <img
                    src={android}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6 ios_img_outer">
                <div className="ios_img">
                  <img
                    src={flutter}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6 ios_img_outer">
                <div className="ios_img">
                  <img
                    src={react}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
