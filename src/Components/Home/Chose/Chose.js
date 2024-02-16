import React from "react";
import styled from "styled-components";
import Wrapper from "./Chose.styled";
import { ChoseTitleData } from "./ChoseData";
import { ChoseCommonData } from "./ChoseData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Chose.css";
AOS.init();
function Chose() {
  const ChoseContentItem = styled.div``;
  const ChoseTitle = styled.h3`
    font-size: 48px;
    font-weight: 500;
    @media (max-width: 992px) {
      font-size: 31px;
    }
    @media (max-width: 575.98px) {
      padding-left: 15px;
    }
  `;
  const ChosePera = styled.p`
    color: #715757;
    font-size: 19px;
    margin: 20px 0px;
    @media (max-width: 992px) {
      font-size: 15px;
      margin: 10px 0px;
      padding: 16px;
    }
    @media (max-width: 575.98px) {
      padding-left: 20px;
    }
  `;
  const ChoseImg = styled.img``;

  const ChoseCommonItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
    }

    @media (max-width: 767.98px) {
      margin-top: 30px;
    }
    @media (max-width: 575.98px) {
      grid-template-columns: 1fr;
      padding: 20px 20px;
    }
  `;
  const ChoseSingleItem = styled.div`
    background-color: #f5f5f5;
    padding: 8px 15px;
    border-radius: 5px;
    @media (max-width: 992px) {
      margin-bottom: 10px;
      padding: 25px;
    }
  `;
  const SingleItemImg = styled.img``;
  const SingleItemTitle = styled.h3`
    font-size: 17px;
    font-weight: 500;
    margin: 10px 0px;
  `;
  const SinlgeItemPera = styled.p`
    font-size: 14px;
    color: #715757;
  `;

  return (
    <Wrapper>
      <div className="container container-contact" style={{ padding: "18px" }}>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5"
            data-aos="fade-down"
          >
            {ChoseTitleData.map((item, index) => (
              <ChoseContentItem>
                <ChoseTitle> {item.Title} </ChoseTitle>
                <ChosePera> {item.pera} </ChosePera>
              </ChoseContentItem>
            ))}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 contact-card">
            <ChoseCommonItem data-aos="fade-up" data-aos-duration="3000">
              {ChoseCommonData.map((item, index) => (
                <ChoseSingleItem>
                  <SingleItemImg
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                  ></SingleItemImg>
                  <SingleItemTitle> {item.Title} </SingleItemTitle>
                  <SinlgeItemPera> {item.pera} </SinlgeItemPera>
                </ChoseSingleItem>
              ))}
            </ChoseCommonItem>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Chose;
