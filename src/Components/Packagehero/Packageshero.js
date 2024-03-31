import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Packageshero = () => {
  return (
    <div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center font-weight-bold hereheading"  data-aos="zoom-in-right"  data-aos-duration="2000"> Our Packages</h2>
            <p className="customWeb_para text-center hero-paragraph" id="para_space">
              The final phase where the website is tested thoroughly to ensure
              it meets project requirements, including user testing, browser
              testing, and quality assurance testing, before launching the
              website for public access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packageshero;
