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
      width: 13%;
    }
    @media (max-width: 575.98px) {
      width: 18%;
    }
  }

  
  
  
  .sm-icons{
    display:flex;
    flex-direction:column;
    position:fixed;
    margin-top:7%;
    z-index:100;
    margin-left: 10px;
    gap:20px;
      -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
   
    
  }
 
 
  .growthe {
    transform: rotate(180deg);
  }
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
 .sm-icons img{
    
    animation: myAnim 2s ease 0s infinite normal forwards;
  } 
  //     @keyframes myAnim {
	// 0% {
	// 	animation-timing-function: ease-out;
	// 	transform: scale(1);
	// 	transform-origin: center center;
	// }

	// 10% {
	// 	animation-timing-function: ease-in;
	// 	transform: scale(1.3);
	// }

	// 17% {
	// 	animation-timing-function: ease-out;
	// 	transform: scale(0.98);
	// }

	// 33% {
	// 	animation-timing-function: ease-in;
	// 	transform: scale(0.87);
	// }

	// 45% {
	// 	animation-timing-function: ease-out;
	// 	transform: scale(1);
	// }
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
   @media (max-width: 768px) {
      .sm-icons{ 
        margin-left:-10px;
        
      }
      .EllipsePic1{
        display:none;
      }
    }
    
    .gr_button{
    color:var(--primary-color);
  }
    .gr_button:hover{
    color:white;
  }

`;
export default Wrapper;
