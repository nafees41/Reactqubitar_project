import styled from "styled-components";
const Wrapper = styled.div`

  padding: 13rem 40px 70px 20px;

  position: relative;
  .col-md-6 {
    margin-left: 25%;
    @media (max-width: 992px) {
      margin-left: 20%;
      flex: 0 0 60%;
      max-width: 60%;
    }
    @media (max-width: 767.98px) {
      margin-left: 15%;
      flex: 0 0 70%;
      max-width: 70%;
    }
    @media (max-width: 575.98px) {
      margin-left: 0%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes myAnim {
    0% {
      animation-timing-function: ease-out;
      transform: scale(1);
      transform-origin: center center;
    }

    10% {
      animation-timing-function: ease-in;
      transform: scale(1.3);
    }

    17% {
      animation-timing-function: ease-out;
      transform: scale(0.98);
    }

    33% {
      animation-timing-function: ease-in;
      transform: scale(0.87);
    }

    45% {
      animation-timing-function: ease-out;
      transform: scale(1);
    }
  }
  .Dedicated__line {
    border: 2px solid #d9d9d9;
    border-radius: 2px;
    z-index: -1;
  }
  .Dedicatedteam_heading {
    margin-top:10px;
    padding-left:25px;
    font-family: Inter;
    font-size: 50px;
    font-weight: 500;
    line-height: 97px;
    letter-spacing: 0em;
    text-align: center important;
    color: var(--secondary-color);
  }
  .Dedicated_para {
    font-family: Inter;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    padding: 0 120px 0 30px;
    color: var(--secondary-color);
  }
  .web_banner_btn {
    padding: 1em;
  }
  .Dedicated_gallery {
    --s: 280px; /* control the size */

    display: grid;
    width: var(--s);
    aspect-ratio: 1;
    overflow: hidden;
    padding: calc(var(--s) / 20);
    border-radius: 50%;
    position: relative;
    clip-path: circle(
      49.5%
    ); /* to avoid a few glitch cause by overflow: hidden */
  }
  .Dedicated_gallery::after {
    content: "";
    position: absolute;
    inset: 0;
    padding: inherit;
    border-radius: inherit;
    background: repeating-conic-gradient(
      var(--primary-color) 0 30deg,
      var(--secondary-color) 0 60deg
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  .Dedicated_gallery > img {
    grid-area: 1/1;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: inherit;
    transform-origin: 50% 120.7%;
  }
  .Dedicated_gallery::after,
  .Dedicated_gallery > img {
    animation: m 8s infinite cubic-bezier(0.5, -0.2, 0.5, 1.2);
  }
  .Dedicated_gallery > img:nth-child(2) {
    animation-delay: -2s;
  }
  .Dedicated_gallery > img:nth-child(3) {
    animation-delay: -4s;
  }
  .Dedicated_gallery > img:nth-child(4) {
    animation-delay: -6s;
  }

  @keyframes m {
    0%,
    3% {
      transform: rotate(0);
    }
    22%,
    27% {
      transform: rotate(-90deg);
    }
    47%,
    52% {
      transform: rotate(-180deg);
    }
    72%,
    77% {
      transform: rotate(-270deg);
    }
    98%,
    100% {
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 768px) {
    .Dedicated_cube {
      display: none;
    }

    .Dedicated_para {
      font-family: Inter;
      padding: 0px 0px 0 30px;
    }

    .threebar {
      margin-top: 1%;
    }
    .col-8 {
      max-width: 100% !important;
    }
    .col-md-8 {
      flex: 0 0 100% !important;
      max-width: 100% !important;

      padding: 0px 15px;
    }
    .col-6 {
      flex: 0 0 auto;
      width: 100%;
    }
    .Dedicated_line {
      display: none;
    }
  }
  .slider {
    --slider-inner-width: 2500px;
    --slider-speed: 30s;
  }
  @keyframes scroll {
    0% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(calc((0px - var(--slider-inner-width)) - 5%));
    }
  }

  @media (max-width: 768px) {
    .Dedicated_heading {
      font-size: 30px;
    }
  }
  .slider_span_para {
    padding-left: 10px;
  }
`;
export default Wrapper;
