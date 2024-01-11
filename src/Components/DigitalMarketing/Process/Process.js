import React from 'react'
import './Process.css';


import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
function Process() {
    return (
        <div className="caontainer-fluid java-bg">
            <div class="container">
                <div class="section-header">
                    <div className="java_heading">
                        <h1>Digital Marketing Process</h1>
                    </div>
                </div>
                <div className="java_para"  data-aos="zoom-in-right"  data-aos-duration="1000">
                    <p>
                    Our Digital Marketing process generally involves the following steps:                    </p>
                </div>
                <div class="steps">
                    <div class="steps-container">
                        <div class="content" 
    
    

    >
                            <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={planning}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Consultation and analysis:
                                    </h4>
                                </div>
                                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="1000">
                                    <p>The first step in any digital marketing process is to consult with the client and conduct an analysis of their current digital marketing efforts. This involves understanding their business goals, target audience, current marketing strategies, and competitors. By analyzing this information, you can develop a customized digital marketing strategy that meets the client's unique needs.</p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">01</div>
                    </div>
                    <div class="steps-container">
                        <div class="content" 
                       
     >
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={design}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Strategy development

                                    </h4>
                                </div>
                                <div className="java_card_desk "data-aos="fade-up" data-aos-duration="2000" >
                                    <p> Based on the analysis, the next step is to develop a comprehensive digital marketing strategy that includes a detailed plan for achieving the client's business goals. This should include recommendations for the platforms to use, the types of content to create, and the overall messaging and branding. You should also establish key performance indicators (KPIs) to track progress and success.</p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">02</div>
                    </div>
                    <div class="steps-container">
                        <div class="content" 
                       >
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={qa}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Implementation and optimization

                                    </h4>
                                </div>
                                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="3000">
                                    <p>Once the strategy is in place, it's time to implement the tactics outlined in the plan. This includes creating content, launching advertising campaigns, optimizing the client's website for search engines, and managing their social media presence. You should also regularly track the KPIs established in the strategy and adjust tactics as needed to ensure optimal results.</p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">03</div>
                    </div>
                    <div class="steps-container">
                        <div class="content"  >
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={deploy}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>
                                    Reporting and analysis
                                    </h4>
                                </div>
                                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="4000">
                                    <p> Finally, it's important to regularly report on the results of the digital marketing efforts and analyze the data to identify areas for improvement. This includes tracking metrics like website traffic, engagement rates, conversion rates, and revenue generated. By analyzing this data and adjusting the digital marketing strategy accordingly, you can ensure ongoing success for the client's business.</p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">04</div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Process