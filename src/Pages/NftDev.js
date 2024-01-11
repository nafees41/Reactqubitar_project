/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";
import InvestNFT from "../Components/NFT/InvestNFT/InvestNFT";
import NftCollection from "../Components/NFT/NftCollection/NftCollection";
import NFTCompany from "../Components/NFT/NFTComapny/NFTCompany";

// import Wrapper from "../Components/Home/Banner/Banner.styled";
import NftDevelopment from "../Components/NFT/NftDevelopment/NftDevelopment";
import NftFeatures from "../Components/NFT/NftFeatures/NftFeatures";
import NftProcess from "../Components/NFT/NftProcess/NftProcess";
import UseCases from "../Components/NFT/UseCases/UseCases";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Testimonials from "../Components/Home/Testimonials/Testimonials";




function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
            
     <NftDevelopment/>
     <NFTCompany/>
     <InvestNFT/>
     <UseCases/>
     <NftCollection/>
     <NftFeatures/>
     <NftProcess/>
     {/* <Tech/> */}
     {/* <Portfolio/> */}
     <Testimonials/>


        </Layout>
    );
}

export default Home;
