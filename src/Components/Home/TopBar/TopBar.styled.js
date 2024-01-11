/** @format */

import styled from "styled-components";

import HeaderBg from "../../../images/topBar.png";

const Wrapper = styled.nav`
  padding: 11px 0px;
  background: url(${HeaderBg});
  z-index:100;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  top: 0;
  .topBarSingle_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 575.98px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .topBarContact {
    display: flex;
    align-items: center;
    column-gap: 10px;
    @media (max-width: 575.98px) {
      flex: 0 0 100%;
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .topBarContact a {
    color: var(--primary-color);
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .topBarContact a span {
    margin-top: 4px;
    margin-right: 5px;
  }
`;
export default Wrapper;
