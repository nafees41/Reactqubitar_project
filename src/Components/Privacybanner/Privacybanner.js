import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Privacybanner.css";

const Privacybanner = () => {
  return (
    <div>
      <div className="container hero-container">
        <div className="row">
          <div className="col-md-12">
            <h2
              className="hero-privacy"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              Terms & Conditions
            </h2>
            <p
              className="customWeb_para text-center hero-paragraph"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              Note: The validity of this proposal is one month from the date
              mentioned above. You can approve this proposal by affirming to
              start it in the same communication thread. By approving this
              proposal/quote/scope of work, you agree to the following terms of
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacybanner;
