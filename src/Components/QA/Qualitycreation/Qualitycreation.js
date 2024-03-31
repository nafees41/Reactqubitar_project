import React from "react";
import platform_card from "../../../images/quality-assurance.png";
import tick from "../../../images/NFTStaking/tick.png";
import "./Qualitycreation.css"

const Qualitycreation = () => {
  return (
    <div>
      <div className="container creation-main" id="creation-main-space">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row mt-5">
              <div className="col-md-12">
                <div
                  className="Quality_coin"
                  style={{marginRight:"-50px"}}>
                  <img
                    src={platform_card}
                    className="img-fluid  Quality_coin"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mx-auto">
          <div>
              <h1 className="fw-bolder creation-title">Creation of  Quality Assurance  </h1>
            </div>
            <div className="Quality_para creation_para">
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
            <div className="row Quality_lines_row">
              <div className="col-md-6">
                <div className="Quality_lines">
                  <img
                    src={tick}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="Quality_para experienced-title">
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
                  <span className="Quality_para Unique_Agile experienced-title">
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
                  <span className="Quality_lines_para experienced-title">
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
                  <span className="Quality_lines_para experienced-title">Secure Code base</span>
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
