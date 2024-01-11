import React from 'react'
import "./Start.css";
import cause from "../../../images/DigitalMarketing/cause.png";

export default function Start() {
  return (
    <div className="container mt-5">
        <div className="start_head">
            <h1>Start with your cause</h1>
        </div>
        <div className="start_para">
            <p>Starting with your cause in digital marketing involves aligning your values with your audience, creating engaging content, and utilizing various channels to amplify your message</p>
        </div>
        <div className="row">
            <div className="col-md-4 ">
                <div className="search_engine left_1">
                    <p>Search Engine Optimizaton</p>
                </div>
                <div className="search_engine left_2">
                    <p>Internet Marketing Services</p>
                </div>
                <div className="search_engine left_3">
                    <p>Link Building</p>
                </div>
                <div className="search_engine left_4">
                    <p>Align with audience</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="start_img">
                <img
                      src={cause}
                      className="img-fluid"
                      alt="switch"
                      loading="lazy"
                    />
                </div>
            </div>
            <div className="col-md-4  ">
                <div className="search_engine right_1">
                    <p>Develop content strategy</p>
                </div>
                <div className="search_engine right_2">
                    <p>Utilize email marketing </p>
                </div>
                <div className="search_engine right_3">
                    <p>Content Writing</p>
                </div>
                <div className="search_engine right_4">
                    <p>Measure and analyze</p>
                </div>
            </div>
        </div>
    </div>
  )
}
