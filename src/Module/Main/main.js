import React from "react";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Slides from "./SlideShow/slide";
import Header from "../Header/header";
import "react-slideshow-image/dist/styles.css";

const CompanyLogos = styled.div`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: black;
  @media (max-width: 768px) {
    height: 50px;
  }
`;
const ProductImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
  flex-wrap:wrap ;
  @media (max-width:768px){
margin: 2% ;
}
`;
const Logo = styled.img`
  height: 25%;
  /* margin: 0 20px 50px 0 ; */
  width: 25%;
`;
const Box = styled.img`
  height: 46%;
  /* margin: 0 20px 50px 0; */
  width: 46%;
  padding:2% ;
`;

const OurServices = styled.div`

`;
const H3 = styled.h3`
/* background-color:black; */
color:red ;
`;


const ViewAll = styled.button`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  border: none;
  height: 25px;
  background-color: red;
  width: 100%;
  color: white;
`;
const BrandLogo = styled.img`
  width: 25%;
  height: 60px;
  margin-top: 25px;
  @media (max-width: 768px) {
    margin-top: 0;
    height: 40px;
  }
`;
function Main() {
  return (
    <div>
      <Header />
      <Slides />
      <CompanyLogos>
        <BrandLogo src="./Ab.png" alt="Logo" />
        <BrandLogo src="./Ab1.png" alt="Logo" />
        <BrandLogo src="./Ab.png" alt="Logo" />
        <BrandLogo src="./Ab1.png" alt="Logo" />
      </CompanyLogos>

      <ProductImages>
      <Logo src='https://firebasestorage.googleapis.com/v0/b/bsr-automation.appspot.com/o/images%2F110886cb-f506-45c4-a4cc-196b34d8ef33?alt=media&token=c66f63b7-b2fb-4e88-b38c-c7ae90618c42' alt="Logo"></Logo>
      <Logo src='https://firebasestorage.googleapis.com/v0/b/bsr-automation.appspot.com/o/images%2F110886cb-f506-45c4-a4cc-196b34d8ef33?alt=media&token=c66f63b7-b2fb-4e88-b38c-c7ae90618c42' alt="Logo"></Logo>
      <Logo src='https://firebasestorage.googleapis.com/v0/b/bsr-automation.appspot.com/o/images%2F110886cb-f506-45c4-a4cc-196b34d8ef33?alt=media&token=c66f63b7-b2fb-4e88-b38c-c7ae90618c42' alt="Logo"></Logo>
      <Logo src='https://firebasestorage.googleapis.com/v0/b/bsr-automation.appspot.com/o/images%2F110886cb-f506-45c4-a4cc-196b34d8ef33?alt=media&token=c66f63b7-b2fb-4e88-b38c-c7ae90618c42' alt="Logo"></Logo>
      </ProductImages>

      <ViewAll>Show More</ViewAll>

        <H3>Our Services</H3>
      <OurServices>

      <div  style={{justifyContent: "space-between",display:"flex"}} >
      <Box src='./ourservice1.jpg' alt="Logo"></Box>
      <Box src='./ourservice2.jpg' alt="Logo"></Box>
      </div >
      <div style={{justifyContent: "space-between",display:"flex"}}>
      <Box src='./ourservice3.png' alt="Logo"></Box>
      <Box src='./ourservice4.jpg' alt="Logo"></Box>
      </div>



      </OurServices>

      <Footer />
    </div>
  );
}

export default Main;
