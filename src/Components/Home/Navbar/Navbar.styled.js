import styled from "styled-components";
import HeaderBg from "../../../images/header.png";

const Wrapper = styled.nav`
  /* min-height: 120px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  padding: 15px 60px 15px 40px;
  width: 100%;
  top: 0;
  z-index: 587;
  background: url(${HeaderBg});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 70px;
  @media (max-width: 992px) {
    position: fixed;
    justify-content: space-between;
    padding: 10px 10px;
  }
  @media (max-width: 600px) {
    padding: 10px 10px 14px;
  }
   @media (max-width: 360px) {
    margin-top: 125px !important;
  }
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
  .nav-logo {
    display: flex;
    justify-content: start;
    margin-right:10px;
    transition: 0.5s ease-in-out;

    @media (max-width: 991.98px) {
      top: 0;
    }

    img {
      width: 200px;
    }
  }
  .nav-link-container {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      position: fixed;
      left: 0%;

      top: 0%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: black;
      transition: 0.5s ease-out;
      overflow-y: scroll;
      /* padding: 60px 0px; */
    }
    .menu {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      column-gap: 1.2rem;
      @media (max-width: 1192px) {
        column-gap: 0.3rem;
      }
      @media (max-width: 992px) {
        flex-direction: column;
        /* margin-left: 50px;
        margin-right: 50px; */
        width: 100%;
            padding-right: 30px;
        /* padding-bottom: 20px;
        margin: 10px 0px; */
      }
      li {
        margin: 0 5px;
        position: relative;
        @media (max-width: 1199.98px) {
          margin: 0 8px;
        }
        @media (max-width: 991.98px) {
          margin: 0 0px;
          padding: 10px 0px;
        }
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      a {
        text-decoration: none;
        color: #ffffff;
        width: 100%;
        position: relative;
        font-size: 16px;
        @media (max-width: 1192px) {
          font-size: 13px;
        }
        @media (max-width: 992px) {
          text-align: center;
          font-size: 15px;
        }
      }
    }
    .nav-link-last-item {
      margin-right: 20px;
      @media (max-width: 992px) {
        margin: 0;
      }
    }

    .nav-button {
      left: 1.2rem;

      @media (max-width: 992px) {
        text-align: center;
        margin: 0 auto;
        left: 0;
      }
      a {
        box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
        transition: 0.5s ease-in-out;
        display: flex;
        color: white;
        align-items: center;
        @media (max-width: 991.98px) {
          width: 100%;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          top: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 575.98px) {
          width: 50%;
          justify-content: center;
          margin: 0 auto;
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: var(--primary-color);
        font-size: 30px;
        background: transparent;
        z-index: 592;
      }
    }
  }
  .navLink a {
    transition: 0.5s ease-out;
  }
  .navLink a:hover {
    color: var(--primary-color);
    transition: 0.5s ease-out;
  }
  .nav-button {
    margin: 0px !important;
  }

  .col-md-12 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 30px;
  }
  a span {
    padding: 15px;
    transition: 0.5s;
    position: relative;
  }








  

  a span:nth-child(1) {
    color: #fff;
    // background: #262626;
  }
  a span:nth-child(2) {
    color: #fff;
    
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  a span:nth-child(1):before {
    content: attr(data-attr);
    position: absolute;
    top: 6px;
    left: 0;
    background: #da6a0a;
    padding: 10px 15px 10px 15px;
    transition: 0.5s;
    transform-origin: top;
    transform: rotateX(90deg) translateY(-50%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  a:hover span:nth-child(1):before {
    transform: rotateX(0deg) translateY(0%);
  }
   @media (max-width: 768px) {
     a span:nth-child(2){
      display:none;
     }
       a span:nth-child(1):after {
   display:none;
  }
   a span:nth-child(1) {
    color: #fff;
   background:none;
  }

     
    }
  a span:nth-child(2):before {
    content: attr(data-attr);
    position: absolute;
    top: 6px;
    left: 0;
    background: var(--primary-color);
    padding: 10px 15px 10px 15px;
    
    transition: 0.5s;
    transform-origin: bottom;
    transform: rotateX(90deg) translateY(50%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  a:hover span:nth-child(2):before {
    transform: rotateX(0deg) translateY(0%);
  }
  a span:nth-child(1):after {
    content: attr(data-attr);
    padding: 10px 15px 10px 15px;
    position: absolute;
    top: 6px;
    left: 0;
    background: var(--primary-color);
    transform-origin: bottom;
    transform: rotateX(0deg) translateY(0%);
    transition: 0.5s;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  a:hover span:nth-child(1):after {
    transform: rotateX(90deg) translateY(50%);
  }
  a span:nth-child(2):after {
    content: attr(data-attr);
    position: absolute;
    top: 6px;
    left: 0;
    background: #da6a0a;
    padding: 10px 15px 10px 15px;
    transition: 0.5s;
    transform-origin: top;
    transform: rotateX(0deg) translateY(0%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  a:hover span:nth-child(2):after {
    transform: rotateX(90deg) translateY(-50%);
  }










  /* dropdown menu  */
  .dropdown {
    /* padding: 20px 40px; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    perspective: 1000px;
    z-index: 100;
    transition: 0.5s ease-in-out;

    @media (max-width: 992px) {
      display: relative;
      display: block;
    }
  }
 

  .dropdown:hover {
    color: var(--primary-color);
  }
  .dropdown:hover .dropdown_menu li {
    display: block;
  }
  .dropdown_menu {
    position: absolute;
    top: 100%;
    width: 220px;
    perspective: 1000px;
    /* z-index: -1; */

    @media (max-width: 992px) {
      position: relative;
    }
  }
  .dropdown_menu li {
    display: none;
    color: #fff;
    background-color: #34495e;
    padding: 10px 20px;
    font-size: 13px;
    opacity: 0;
    transition: 0.5s ease-in-out;
  }
  .dropdown_menu li:hover {
    background-color: var(--primary-color);
  }
  .dropdown:hover .dropdown_menu--animated {
    display: block;
  }
  .dropdown_menu--animated {
    display: none;
    visibility: visible;
  }
  .dropdown_menu--animated li {
    display: block;
    opacity: 1;
    font-size: 15px;
  }

  .dropdown_menu-5 .dropdown_item-1 {
    transform-origin: top center;
    animation: translateX 300ms 60ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-2 {
    transform-origin: top center;
    animation: translateX 300ms 120ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-3 {
    transform-origin: top center;
    animation: translateX 300ms 180ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-4 {
    transform-origin: top center;
    animation: translateX 300ms 240ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-5 {
    transform-origin: top center;
    animation: translateX 300ms 300ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-6 {
    transform-origin: top center;
    animation: translateX 300ms 300ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-7 {
    transform-origin: top center;
    animation: translateX 300ms 300ms ease-in-out forwards;
  }

  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    80% {
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .icon {
    margin-left: 5px;
    font-size: 12px;
    margin-top: 8px;
  }
  .dropText {
    z-index: -245;
  }
  .iconDrop {
    display: flex;
    align-items: center;
    justify-content: center;
  }
   .sm-icons {
      display: flex;
      flex-direction: column;
      position: fixed;
      margin-top: 13%;
      z-index: 100;
      margin-left: -61px;
      gap: 20px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;


  }
    .sm-icons img {
        animation: myAnim 2s ease 0s infinite normal forwards;
  }

  @media (max-width: 768px) {
      .sm-icons {
          margin-left: -32px;
              margin-top: 20%;
}

 }
  
  
  
`;
export default Wrapper;
