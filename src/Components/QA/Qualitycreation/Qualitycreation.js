import React from "react";
import platform_card from "../../../images/quality-assuranc.jpg";
import tick from "../../../images/NFTStaking/tick.png";
import "./Qualitycreation.css"

const Qualitycreation = () => {
  return (
    <div>
      <div className="container m-0">
        <div className="row ">
          <div className="col-md-6">
              <div className="row mt-5">
              <div className="col-md-12">
                <div
                  className="Quality_coin"
                  style={{marginRight:"-50px"}}>
                  <img
                    src={platform_card}
                    className="img-fluid m-auto Quality_coin"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div>
              <h1 className="fw-bolder">Creation of  Quality Assurance  </h1>
            </div>
            <div className="Quality_para">
              <p>
                Qubitars is an Quality Creation process  with a
               Quality Assurance developers who can maintain
                futuristic Quality Assurance for startups and enterprises.
                With our wide range of services we provide high-quality,
                bug-free, and scalable solutions suiting your specific business
                requirements. Our developers build Quality Assurance websites using
                next-generation technologies with outstanding features that help
                users to stake various Quality Assurance and earn a passive income.
              </p>
            </div>
            <div className="row  Quality_lines_row">
              <div className="col-md-6">
                <div className="Quality_lines">
                  <img
                    src={tick}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="Quality_para">
                    Highly Experienced Team
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="Quality_lines">
                  <img
                    src={tick}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="Quality_para Unique_Agile">
                    Unique Agile Development
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="Quality_lines">
                  <img
                    src={tick}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="Quality_lines_para">
                    100% Quality Guarantee
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="Quality_lines">
                  <img
                    src={tick}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="Quality_lines_para">Secure Code base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualitycreation;
