import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Qualitybanner = () => {
  return (
    <div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center font-weight-bold hereheading"  data-aos="zoom-in-right"  data-aos-duration="2000"> Quality Assurance</h2>
            <p className="customWeb_para text-center hero-paragraph" style={{ padding: "15px 60px 15px 60px"}}>
             Qubitars Technologies, we understand the importance of quality assurance in delivering flawless digital solutions. Our Software Quality Assurance Service thoroughly tests, validates, and enhances your software applications to ensure they meet the highest standards of performance, functionality, and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualitybanner;
