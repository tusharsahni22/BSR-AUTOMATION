import React from 'react'
import styled from "styled-components";
// import Header from "../Header/headerreplaced"
import Footer from "../Footer/footer"
import Slides from './SlideShow/slide';
import Header from '../Header/header';
import 'react-slideshow-image/dist/styles.css'
import SideBarr from '../Header/SideBar';

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
height:300px ;
/* margin: 0 20px 50px 0 ; */
width:300px ;
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
function Main(props) {
  return (
    <div>
      <Header/>
      
      <Slides/>
       
      
    
      
      </div>
  )
}

export default Main