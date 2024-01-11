import React from 'react'
import Slider from "../../../images/react.png";
import l1 from "../../../images/l1.png";
import l2 from "../../../images/l2.png";
import l3 from "../../../images/l3.png";
import l4 from "../../../images/l4.png";
import l5 from "../../../images/l5.png";
import l6 from "../../../images/l6.png";
import l7 from "../../../images/l7.png";
import l8 from "../../../images/l8.png";
import './Life.css';


function Life() {
   
    return (
        <section className='life'>
        <div className='cf'>
            <div className='container'>
                <div className='hd'>
                    <h1 >Life At Qubitars</h1>
                   
        
                </div>
                <div className='desc'>
                    <p>Experience a fulfilling and dynamic life at Qubitars, where innovation, collaboration, and growth are at the forefront of our culture.</p>
                </div>
            </div>
        
        
            <div class="ct mt-5 ">
                <div class="box">
        
                    <div class="dream">
                        <img src={l1} className="img-fluid life-img" alt="slider" />
                        <img src={l2} className="img-fluid life-img" alt="slider" />
                        <img src={l1} className="img-fluid life-img" alt="slider" />
        
                    </div>
        
                    <div class="dream">
        
                        <img src={l8} className="img-fluid life-img" style={{ height:'100%' }} alt="slider" />
        
        
                    </div>
        
                    <div class="dream">
                        <img src={l1} className="img-fluid life-img" alt="slider" />
                        <img src={l2} className="img-fluid life-img" alt="slider" />
                        <img src={l1} className="img-fluid life-img" alt="slider" />
        
                    </div>
                </div>
            </div>
        </div>
        
        
        </section>

    )
}

export default Life