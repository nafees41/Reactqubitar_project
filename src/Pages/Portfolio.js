import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import NftPortfolio from "../Components/Portfolio/NftPortfolio/NftPortfolio";
import WebPortfolio from "../Components/Portfolio/WebPortfolio/WebPortfolio";
import AngularJs from "../Components/WebDevelopment/AngularJS/AngularJs";





function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
      
          <WebPortfolio/>
          <NftPortfolio/>
         <WebPortfolio/>
          <NftPortfolio/>
          <AngularJs/>
        </Layout>
    );
}

export default Home;
