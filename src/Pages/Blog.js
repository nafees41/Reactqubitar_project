/** @format */
import React, { useEffect } from "react";
import Layout from "../Components/Home/Layout/Layout";

import BlogBanner from "../Components/Blog/BlogBanner/BlogBanner";
import LatestBlog from "../Components/Blog/LatestBlog/LatestBlog";
import NFTBlog from "../Components/Blog/NFTBlog/NFTBlog";




function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
       
      },[]);
    return (
        <Layout>
    <BlogBanner/>
    <LatestBlog/>
    <NFTBlog/>
    
     


        </Layout>
    );
}

export default Blog;
