import React from 'react'
import tick from "../../../images/NFTStaking/tick.png";
import platform_card from "../../../images/Ai-development.png";

const Aidevelopmentcreation = () => {
  return (
    <div>
             <div className="container ">
        <div className="row ">
          <div className="col-md-6">
              <div className="row mt-5">
              <div className="col-md-12">
                <div
                  className="staking_platform_coin"
                  style={{marginRight:"-50px"}}>
                  <img
                    src={platform_card}
                    className="img-fluid m-auto staking_platform_coin"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div>
              <h1>Creation of AI Development  </h1>
            </div>
            <div className="platform_para">
              <p>
                Qubitars is an Data Analytics  with a
                Data Analytics developers who can maintain
                futuristicData Analytics for startups and enterprises.
                With our wide range of services we provide high-quality,
                bug-free, and scalable solutions suiting your specific business
                requirements. Our developers build Data Analytics websites using
                next-generation technologies with outstanding features that help
                users to stake various Data Analytics and earn a passive income.
              </p>
            </div>
            <div className="row  platform_lines_row">
              <div className="col-md-6">
                <div className="platform_lines">
                  <img
                    src={tick}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="platform_lines_para">
                    Highly Experienced Team
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="platform_lines">
                  <img
                    src={tick}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="platform_lines_para Unique_Agile">
                    Unique Agile Development
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="platform_lines">
                  <img
                    src={tick}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="platform_lines_para">
                    100% Quality Guarantee
                  </span>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="platform_lines">
                  <img
                    src={tick}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="platform_lines_para">Secure Code base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Aidevelopmentcreation
