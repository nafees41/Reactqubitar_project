import React from "react";
import Wrapper from "./TopBar.styled";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { TopBarIcon } from "./TopBarIcon";

function TopBar() {
  const GridBox = styled.div``;
  const Atag = styled.a``;
  const GridImage = styled.div`
    width: 22px;
    height: 22px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
  `;
  const SocialGroup = styled.div`
    display: flex;
    column-gap: 5px;
    @media (max-width: 575.98px) {
      margin-top: 10px;
    }
  `;
  return (
    <Wrapper id="ma">
      <div className="container" id="top_bar">
        <div className="row">
          <div className="col-md-12">
            {/* single item start here */}
            <div className="topBarSingle_item">
              {/* contact start here */}
              <div className="topBarContact">
                <a href="mailto:info@qubitars.com" target="_blank" >
                  <span>
                    <Icon icon="entypo:mail" />
                  </span>{" "}
                  info@qubitars.com
                </a>

                <a href="tel:+923026469153" target="_blank">
                  {" "}
                  <span>
                    <Icon icon="fluent:call-28-filled" />
                  </span>{" "}
                  +92 302 6469153
                </a>
              </div>
              {/* contact end here */}

              {/* social media start here */}

              <SocialGroup>
                {TopBarIcon.map((item, index) => (
                  <GridBox>
                    <Atag
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <GridImage>{item.icon}</GridImage>
                    </Atag>
                  </GridBox>
                ))}
              </SocialGroup>

              {/* social media end here */}
            </div>
            {/* single item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default TopBar;
