import { display } from '@mui/system';
import React, { useState } from 'react'
import styled from 'styled-components'
import SideBarr from './SideBar';
import { useNavigate } from "react-router-dom";

const MainContainer =styled.div`
display: flex ;
justify-content:space-between ;
background-color: black ;
color: red ;
`;
const Logo =styled.div``;
const BSRLOGO =styled.img`
height: 60px;
@media (max-width:768px){
    height: 20px ;
}

`;
const Menu=styled.img`

@media (min-width:768px){
    display:none;
    }
`;
const Link=styled.div`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  /* background-color: black; */
  color: red;
  border: none;
  margin: 15px;
  font-size: 18px;
@media (max-width:768px){
    display:none;
    }
`;
const SideBar =styled.div`
background-color:black;
color:red;
width: 400px ;
margin-top: 50px ;
height: 100vh ;
`;
const Container =styled.div`

`;
function Header() {
    const navigate = useNavigate();
    const [SideBar,setSideBar] =useState(false)
    const openSideBar =()=>{
        setSideBar(!SideBar)
        console.log("first",SideBar)
    }
  return (
    <Container>
    <MainContainer>
        <Logo><BSRLOGO src="./bsr.png" alt="Logo" onClick={() => {navigate("/")}}></BSRLOGO></Logo>
        <div style={{marginRight:"20px",display:"flex"}}>
        <Link onClick={() => {navigate("/")}}>Home </Link>
        <Link onClick={() => {navigate("/products")}}>Product</Link>
        <Link onClick={() => {navigate("/CompanyProfile")}}>Company Profile</Link>
        <Link onClick={() => {navigate("/ProductGallery")}}>Project Gallery</Link>
        <Link onClick={() => {navigate("/aboutus")}}>About Us</Link>
        <Link onClick={() => {navigate("/contactus")}}>Contact</Link>
        </div>
        <Menu src="./white-menu.svg" onClick={openSideBar} alt="Logo"/>         
    </MainContainer>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div></div>        
        {SideBar ? <SideBarr/>:""} 
    </div>
    </Container>
  )
}

export default Header