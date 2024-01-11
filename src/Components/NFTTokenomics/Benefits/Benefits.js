import React from 'react'
import "./Benefits.css";
import h1 from "../../../images/NFTTokenomics/h1.png";
import h2 from "../../../images/NFTTokenomics/h2.png";
import h3 from "../../../images/NFTTokenomics/h3.png";
import h4 from "../../../images/NFTTokenomics/h4.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function Benefits() {
  return (
   <div className="container " data-aos="fade-right"  data-aos-duration="2000" >
    <div className="benefits_head">
        <h1>Extended Efforts for Your Benefits</h1>
    </div>
    <div className="benefits_para">
        <p>that ensures security for your Blockchain Environment.</p>
    </div>
    <div className="row mt-5">
        <div className="col-md-3 benefits_card_align">
            <div className="benefits_card"> 
                <div className="benefits_card_logo">
                <img
                    src={h1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="benefits_card_head">
                    <h4>Matchless Experience</h4>
                </div>
                <div className="benefits_card_para">
                    <p>Our team of Blockchain experts bring with them years of experience in this novel technology, where they have hustled before the rest of the world.
</p>
                </div>
            </div>
        </div>
        <div className="col-md-3 benefits_card_align">
            <div className="benefits_card">
                <div className="benefits_card_logo">
                <img
                    src={h2}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="benefits_card_head">
                    <h4>Matchless Experience</h4>
                </div>
                <div className="benefits_card_para">
                    <p>Our team of Blockchain experts bring with them years of experience in this novel technology, where they have hustled before the rest of the world.
</p>
                </div>
            </div>
        </div>
        <div className="col-md-3 benefits_card_align">
            <div className="benefits_card">
                <div className="benefits_card_logo">
                <img
                    src={h3}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="benefits_card_head">
                    <h4>Matchless Experience</h4>
                </div>
                <div className="benefits_card_para">
                    <p>Our team of Blockchain experts bring with them years of experience in this novel technology, where they have hustled before the rest of the world.
</p>
                </div>
            </div>
        </div>
        <div className="col-md-3 benefits_card_align">
            <div className="benefits_card">
                <div className="benefits_card_logo">
                <img
                    src={h4}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="benefits_card_head">
                    <h4>Matchless Experience</h4>
                </div>
                <div className="benefits_card_para">
                    <p>Our team of Blockchain experts bring with them years of experience in this novel technology, where they have hustled before the rest of the world.
</p>
                </div>
            </div>
        </div>



    </div>

   </div>
  )
}
