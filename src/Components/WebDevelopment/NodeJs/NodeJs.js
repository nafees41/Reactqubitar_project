import React from 'react'
import './NodeJs.css';
import nodejs_img from "../../../images/WebDevelopment/nodejs_img.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
function NodeJs() {
  return (
    <section id='nodejs'>
     <div className="container-fluid node-bg">

        <div className="container mt-5 "  >
                <center>  <h1 className='node-heading text-white ' data-aos="zoom-in-right"  data-aos-duration="1000" style={{paddingTop:"50px"}}>Website Maintenance</h1>
                      <p className='node-para text-white'>Certainly, here are few key points to consider when it comes to website maintenance:</p>
                  </center>
                  <div className="row">
                    <div className="col-md-6">
                          <h3 className='node-qs'>What Include in Website Maintenance</h3>
                          <ul className='list text-white mt-5'>
                              <li className='node_items'>Regularly backing up your website is crucial to ensuring you have a recent copy of your website's content and files in case of data loss or corruption. This can be done manually or through the use of automated backup tools.
</li>
                              <li className='node_items'> Security checks involve monitoring your website for potential security vulnerabilities, malware, and hacking attempts. This includes the use of security software and regular scans to identify and mitigate any security risks.</li>
                            <li className='node_items'>
                            Optimizing your website's performance involves identifying and fixing any issues that may be slowing down your website. This includes optimizing images, reducing server response time, and implementing caching and compression techniques to improve page load times.

                            </li>
                          </ul>
                    </div>
                      <div className="col-md-6 nodejs_img">
                          <img
                              src={nodejs_img}
                              className="img-fluid "
                              alt="switch"
                              loading="lazy"
                          />
                    </div>
                  </div>
        </div>

     </div>
    </section>
  )
}

export default NodeJs