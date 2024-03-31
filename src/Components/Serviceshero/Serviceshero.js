import React from "react";
import './Serviceshero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Serviceshero = () => {
  return (
    <div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center font-weight-bold hereheading"  data-aos="zoom-in-right"  data-aos-duration="2000"> Our Services</h2>
            <p className="customWeb_para text-center hero-paragraph " id="para_space">
            Qubitars Technologies is a custom software design and development company offering a comprehensive range of innovative and AI powered solutions. Our expert team is well versed in Website development, Mobile application development, UI UX design, Quality assurance, MVP builder and Dedicated team services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceshero;
