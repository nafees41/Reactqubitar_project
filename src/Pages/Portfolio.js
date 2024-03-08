import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import PortfolioBanner from "../Components/Portfolio/PortfolioBanner/PortfolioBanner";
import Project from "../Components/Home/Project/Project";
import NftPortfolio from "../Components/Portfolio/NftPortfolio/NftPortfolio";
import WebPortfolio from "../Components/Portfolio/WebPortfolio/WebPortfolio";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";
import Services from "../Components/Home/Services/Services";





function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
          {/* <PortfolioBanner/>   */}
          {/* <Project/> */}
          <WebPortfolio/>
          <NftPortfolio/>
         <WebPortfolio/>
          <NftPortfolio/>
          {/* <Services/> */}
          <AngularJs/>
      {/* <Testimonials/> */}
        </Layout>
    );
}

export default Home;
