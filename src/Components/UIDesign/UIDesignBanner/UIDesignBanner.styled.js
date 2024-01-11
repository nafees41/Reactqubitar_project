/** @format */

import styled from "styled-components";
const Wrapper = styled.div`

  padding-top: 13rem;
  padding-bottom: 70px;
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
  .move-img{
    margin-top:'3%' !important;
  }
  .mainPara {
    font-size: 113px;
    font-weight: 500;
    color: var(  --secondary-color);
    @media (max-width: 1192px) {
      font-size: 90px;
    }
    @media (max-width: 1192px) {
      font-size: 60px;
    }
    @media (max-width: 575.98px) {
      font-size: 40px;
    }
  }
  .wth {
    margin-left: 20px;
  }
  .commonHeaderPera {
    color: #060606;
    margin-top: 20px;
  }
  .mainPara span img {
    @media (max-width: 1192px) {
      width: 27%;
    }
    @media (max-width: 575.98px) {
      width: 18%;
    }
  }

    // @media (max-width: 768px) {
    //   .angular{

    //   }
    // }
  

  
  
  
 
 
 
  .growthe{
  animation: rotation 8s infinite linear;
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
  
  .ak{
    
    
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    -webkit-animation: pulse-border 1.5s cubic-bezier(.77,0,.175,1) infinite;
    animation: pulse-border 1.5s cubic-bezier(.77,0,.175,1) infinite;

  }
  
    
    .gr_button{
    color:#fc7e13;
  }
    .gr_button:hover{
    color:white;
  }
  .banner_line{
    border: 2px solid #D9D9D9;
        border-radius: 2px;
        z-index:-1;
}
.web_banner_heading{
    font-family: Inter;
    padding:30px;
 font-size: 50px;

color:var(--secondary-color);
}
@media (max-width: 768px)
{
.web_banner_para {
    font-family: Inter;
    padding: 0px 20px 0px 30px !important;
}
}
@media (max-width: 768px){

 .web_banner_heading {
    font-size: 30px;
}
}
.web_banner_para{
    font-family: Inter;

    padding: 0 120px 0 30px;
}
.web_banner_btn{
    padding:1em;

}
@media (max-width: 768px){
.cube{
  display:none;
}

.web_banner_para {
    font-family: Inter;
    padding: 0px 0px 0 30px;
}

.threebar{
  margin-top:1%;
}
.col-8 {
  max-width:100% !important;
}

.col-md-8 {
    flex: 0 0 100% !important;
     max-width:100% !important;
    
    padding: 0px 15px;
}
.col-6 {
    flex: 0 0 auto;
     width: 100%; 
}
.webBanner_line{
  display:none;
}


}

.slider {
  --slider-inner-width: 2500px;
  --slider-speed: 30s;
}

@keyframes scroll {
  0% { transform: translateX(-5%) ; }
  100% { transform: translateX(calc((0px - var(--slider-inner-width)) - 5%))}
}
.slider {
  -webkit-transform: translate3d(0, 0, 0);
  animation: scroll linear infinite var(--slider-speed);
  width: calc(2 * var(--slider-inner-width));
  transition: animation-play-state ease 0.3s;
  
}


.slider-container {
  
  height: 100px;
  overflow:hidden;
  position: relative;
  width: 100%;
  .slider {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
  }
  
  .slider__slide {
    height: 100px;
    flex-grow: 1;
    // flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
   
    border-right: solid var(--primary-color) 2px;

    
    &:hover {
     
      // cursor: pointer;
    }
    .slide__content {
      color: white;
      font-size: 80px;
    }
  }
}
.slider_span_para{
  padding-left:10px;
}

`;
export default Wrapper;
