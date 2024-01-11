import React from 'react'
import "./Onboarding.css"
import onBoarding from "../../../images/DigitalMarketing/onBoarding.png";

export default function Onboarding() {
    return (
        <div className="container mt-5" >
            <center>
                <div className="onboard_head">
                    <h1>Our onboarding process</h1>
                </div>
                <div className="onboard_para">
                  <p>Our onboarding process ensures a customized digital marketing strategy, comprehensive analysis, and ongoing support for optimal results.</p>
                </div>
            </center>
            <div className="row">
                <div className="col-md-6">
                    <div className="on_card mt-4">
                        <div className="on_card_content">
                        <div className="on_card_num"><h4>1:</h4></div>
                        <p>Our onboarding process begins with a thorough understanding of your business goals and objectives, allowing us to create a customized digital marketing strategy tailored to your specific needs.</p>
                        </div>

                    </div>
                    <div className="on_card mt-4">
                        <div className="on_card_content">
                        <div className="on_card_num"><h4>2:</h4></div>
                        We then conduct a comprehensive analysis of your current digital marketing efforts, including website traffic, social media engagement, and other key metrics. This helps us identify areas for improvement and refine our approach for optimal results.
                        </div>

                    </div>
                    <div className="on_card mt-4">
                        <div className="on_card_content">
                        <div className="on_card_num"><h4>3:</h4></div>
                        <p>Once we have developed your strategy, we provide ongoing support and communication to ensure that your digital marketing efforts are on track to meet your goals. This includes regular reporting and analysis, as well as ongoing optimization to stay ahead of the competition and drive maximum ROI.</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="onboading_img">
                    <img
                    src={onBoarding}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                    </div>
              
                </div>
            </div>
        </div>
    )
}
