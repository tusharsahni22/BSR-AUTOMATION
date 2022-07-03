import React from 'react'
import styled from "styled-components";
import Header from "../Header/header"
import Footer from "../Footer/footer"
import Slides from './SlideShow/slide';
import 'react-slideshow-image/dist/styles.css'

// const SlideShow = styled.div`
// height:300px ;
// width:100% ;
// background-color: green ;
// `;
const CompanyLogos = styled.div`
display: flex ;
justify-content:space-between ;
height:100px ;
width:100% ;
background-color: black ;
`;
const ProductImages = styled.div`
display:flex ;
justify-content:space-between ;
margin: 25px ;
`;




const Logo =styled.img`
height:200px ;
margin: 0 20px 50px 0 ;
width:100px ;
`;
const Box1 =styled.img`
height:200px ;
margin: 0 20px 50px 0 ;
width:100% ;
`;
const Box2 =styled.img`
height:200px ;
margin: 0 20px 50px 0 ;
width:100%;
`;
const Box3 =styled.img`
height:200px ;
margin: 0 20px 50px 0 ;
width:100%

`;
const OurServices = styled.div``;

const Box4 =styled.img`
height:200px ;
margin: 0 20px 50px 0 ;
width:100%
`;

const ViewAll =styled.button`
font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
border: none ;
height:25px ;
background-color: red;
width:100%;
color: white;
`;
function main() {
  return (
    <div>
      <Header/>      
      <Slides/>    
      <CompanyLogos>
        <div> <img src='./Ab.png' alt="Logo" style={{height:"60px",marginTop:"25px"}}></img> </div>
        <div> <img src='./Ab1.png' alt="Logo" style={{height:"60px",marginTop:"25px"}}></img> </div>
        <div><img src='./Parker1-.png' alt="Logo" style={{height:"60px",marginTop:"25px"}}></img> </div>
        <div><img src='./Parker.png' alt="Logo" style={{height:"60px",marginTop:"25px"}}></img> </div>
      </CompanyLogos>

      <ProductImages>
      <Logo src='./logo512.png' alt="Logo"></Logo>
      <Logo src='./logo512.png' alt="Logo"></Logo>
      <Logo src='./logo512.png' alt="Logo"></Logo>
      <Logo src='./logo512.png' alt="Logo"></Logo>
      </ProductImages>
      <ViewAll>Show More</ViewAll>
        <h3>Our Services</h3>
      <OurServices>
      <div  style={{justifyContent: "space-between",display:"flex"}} >
      <Box1 src='./logo512.png' alt="Logo"></Box1>
      <Box2 src='./logo512.png' alt="Logo"></Box2>
      </div >
      <div style={{justifyContent: "space-between",display:"flex"}}>
      <Box3 src='./logo512.png' alt="Logo"></Box3>
      <Box4 src='./logo512.png' alt="Logo"></Box4>

      </div>



      </OurServices>
      <Footer/>

      



    </div>
  )
}

export default main