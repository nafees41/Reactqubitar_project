import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import NftDev from "./Pages/NftDev";
import NFTStaking from "./Pages/NFTStaking";
import WebDev from "./Pages/WebDev";
import MobileDev from "./Pages/MobileDev";
import NFTGaming from "./Pages/NFTGaming";
import NFTToken from "./Pages/NFTToken";
import NFTRealEstate from "./Pages/NFTRealEstate";
import NFTMarketplace from "./Pages/NFTMarketplace";
import ICODevelopment from "./Pages/ICODevelopment";
import NFTTokenomics from "./Pages/NFTTokenomics";
import UIDesign from "./Pages/UIDesign";
import DigitalMarketing from "./Pages/DigitalMarketing";
import HashLoader from "react-spinners/HashLoader";
import Banner from "./Components/Home/Banner/Banner";
import Portfolio from "./Pages/Portfolio";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <div className="row">
            <div className="col-md-12 cliploader">
              <HashLoader color={"#F37A24"} loading={loading} size={100} />
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft" element={<NftDev />} />
          <Route path="/nft_staking" element={<NFTStaking />} />
          <Route path="/nft_gaming" element={<NFTGaming />} />
          <Route path="/nft_marketplace" element={<NFTMarketplace />} />
          <Route path="/web_development" element={<WebDev />} />
          <Route path="/mobile_dev" element={<MobileDev />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/token_development" element={<NFTToken />} />
          <Route path="/portfolio" element={<Portfolio/>} />

          <Route path="/real_estate_development" element={<NFTRealEstate />} />
          <Route path="/ico_development" element={<ICODevelopment />} />
          <Route path="/nft_tokenomics" element={<NFTTokenomics />} />
          <Route path="/ui_ux_design" element={<UIDesign />} />

          <Route path="/digital_marketing" element={<DigitalMarketing />} />

          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
}

export default App;
