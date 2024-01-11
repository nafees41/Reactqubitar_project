import React from 'react'
import './Ecommerce.css';
import add from "../../../images/WebDevelopment/add.png";
import manage from "../../../images/WebDevelopment/manage.png";
import desk from "../../../images/WebDevelopment/desk.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
function Ecommerce() {
    return (
        <div className="container " >
            <div class="tabinator ">
                <div className="ecommerce_heading " data-aos="zoom-in-right"  data-aos-duration="1000" >
                    <h1>What you will get in E- Commerce webiste</h1>
                </div>
              
                <input type="radio" className='mt-5' id="tab1" name="tabs" checked />
                <label for="tab1"><h5>Qubitars E commerce</h5></label>
                <input type="radio" id="tab2" name="tabs" checked />
                <label for="tab2"><h5>Add products and manage your inventory</h5></label>
                <input type="radio" id="tab3" name="tabs" checked />
                <label for="tab3"><h5> Organizing your products</h5></label>
                <input type="radio" id="tab4" name="tabs" checked />
                <label for="tab4"><h5>Content management system</h5></label>
                <div id="content1 ">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Add product images
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={manage}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Manage inventory

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={desk}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Description & details

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="content2">
                    <div className="row">
                      
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={manage}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Manage inventory

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Add product images
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={desk}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Description & details

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="content3">
                    <div className="row">
                       
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={manage}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Manage inventory

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={desk}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Description & details

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Add product images
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="content4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Add product images
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                     
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={desk}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Description & details

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="ecard">
                                <img
                                    src={manage}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading"> <h4>Manage inventory

                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Upload your product images. No need to worry about resizing or optimization — we do that for you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce