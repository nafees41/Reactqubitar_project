/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 60px 0px;
  .col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 60.333333%;
  }
  @media (max-width: 992px) {
    .col-md-7 {
      flex: 0 0 61.333333%;
      max-width: 61.333333%;
    }
  }
  @media (max-width: 767.98px) {
    .col-md-5 {
      flex: 0 0 100%;
      max-width: 100%;
      text-align: center;
    }
    .col-md-7 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 575.98px) {
    .col-md-7,
    .col-md-5 {
      padding: 0px 15px;
    }
  }
`;
export default Wrapper;
